const assert = require("node:assert/strict");
const { once } = require("node:events");
const test = require("node:test");
const crypto = require("node:crypto");

const app = require("./server");

async function withServer(run) {
  const server = app.listen(0);
  await once(server, "listening");
  const { port } = server.address();
  const baseUrl = `http://127.0.0.1:${port}`;

  try {
    await run(baseUrl);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
}

test("returns 400 when email is missing", async () => {
  await withServer(async (baseUrl) => {
    const response = await fetch(`${baseUrl}/api/password-reset-token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
    const body = await response.json();

    assert.equal(response.status, 400);
    assert.equal(body.error, "A valid email is required to generate a reset token");
  });
});

test("returns a secure token and expiry metadata", async () => {
  await withServer(async (baseUrl) => {
    const response = await fetch(`${baseUrl}/api/password-reset-token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "user@example.com" })
    });
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(body.email, "user@example.com");
    assert.match(body.token, /^[a-f0-9]{64}$/);
    assert.equal(body.expiresInSeconds, 900);
    assert.ok(Number.isFinite(Date.parse(body.expiresAt)));
  });
});

test("generates a unique token on each request", async () => {
  await withServer(async (baseUrl) => {
    const [firstResponse, secondResponse] = await Promise.all([
      fetch(`${baseUrl}/api/password-reset-token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "user@example.com" })
      }),
      fetch(`${baseUrl}/api/password-reset-token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "user@example.com" })
      })
    ]);

    const firstBody = await firstResponse.json();
    const secondBody = await secondResponse.json();

    assert.equal(firstResponse.status, 200);
    assert.equal(secondResponse.status, 200);
    assert.notEqual(firstBody.token, secondBody.token);
  });
});

test("returns 500 when secure token generation fails", async () => {
  const originalRandomBytes = crypto.randomBytes;
  crypto.randomBytes = () => {
    throw new Error("entropy source unavailable");
  };

  try {
    await withServer(async (baseUrl) => {
      const response = await fetch(`${baseUrl}/api/password-reset-token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "user@example.com" })
      });
      const body = await response.json();

      assert.equal(response.status, 500);
      assert.equal(body.error, "Unable to generate password reset token");
    });
  } finally {
    crypto.randomBytes = originalRandomBytes;
  }
});
