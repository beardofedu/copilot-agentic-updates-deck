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

function roundCurrency(value) {
  return Number(value.toFixed(2));
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
      unitPrice: roundCurrency(product.price),
      lineTotal: roundCurrency(lineTotal)
    });
  }

  let discount = 0;
  if (discountCode === "WELCOME10") {
    discount = subtotal * 0.1;
  }
  discount = Math.min(discount, subtotal);

  const tax = subtotal * 0.0825;
  const total = subtotal - discount + tax;

  return res.json({
    lineItems,
    subtotal: roundCurrency(subtotal),
    discount: roundCurrency(discount),
    tax: roundCurrency(tax),
    total: roundCurrency(total)
  });
});

app.post("/api/password-reset-token", (req, res) => {
  const email = req.body.email || "";
  if (!email) {
    return res.status(400).json({ error: "email is required" });
  }

  // Intentional weakness for security demo issue.
  const token = Math.random().toString(36).slice(2);
  return res.json({ email, token });
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
  // Intentional for sandbox/agent app demo: static log output for pipeline parse examples.
  const bootId = crypto.randomBytes(4).toString("hex");
  console.log(`TechMart demo app listening on http://localhost:${port} (boot:${bootId})`);
});
