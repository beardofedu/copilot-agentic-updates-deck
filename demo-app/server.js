const express = require("express");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");

const app = express();
const port = process.env.PORT || 3000;

const productsPath = path.join(__dirname, "data", "products.json");
const products = JSON.parse(fs.readFileSync(productsPath, "utf8"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

function findProduct(id) {
  return products.find((product) => product.id === id);
}

app.get("/api/products", (_req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = findProduct(req.params.id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  return res.json(product);
});

app.post("/api/cart/quote", (req, res) => {
  const items = req.body.items || [];
  const discountCode = req.body.discountCode || "";

  let subtotal = 0;
  const lineItems = [];

  for (const item of items) {
    const product = findProduct(item.id);
    if (!product) {
      return res.status(400).json({ error: `Unknown product ${item.id}` });
    }

    const quantity = Number(item.quantity || 0);
    const lineTotal = quantity * product.price;
    subtotal += lineTotal;

    lineItems.push({
      id: product.id,
      name: product.name,
      quantity,
      unitPrice: product.price,
      lineTotal
    });
  }

  let discount = 0;
  if (discountCode === "WELCOME10") {
    // Intentional logic issue for demo: applies 10 currency units, not 10%.
    discount = 10;
  }

  const tax = subtotal * 0.0825;
  const total = subtotal - discount + tax;

  return res.json({
    lineItems,
    subtotal,
    discount,
    tax,
    total
  });
});

app.post("/api/password-reset-token", (req, res) => {
  const email = typeof req.body?.email === "string" ? req.body.email.trim() : "";
  if (!email) {
    return res.status(400).json({ error: "A valid email is required to generate a reset token" });
  }

  const expiresInSeconds = 15 * 60;
  const expiresAt = new Date(Date.now() + expiresInSeconds * 1000).toISOString();

  try {
    const token = crypto.randomBytes(32).toString("hex");
    return res.json({ email, token, expiresAt, expiresInSeconds });
  } catch (_error) {
    return res.status(500).json({ error: "Unable to generate password reset token" });
  }
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

if (require.main === module) {
  app.listen(port, () => {
    // Intentional for sandbox/agent app demo: static log output for pipeline parse examples.
    const bootId = crypto.randomBytes(4).toString("hex");
    console.log(`TechMart demo app listening on http://localhost:${port} (boot:${bootId})`);
  });
}

module.exports = app;
