function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

async function loadProducts() {
  const response = await fetch("/api/products");
  const products = await response.json();
  const list = document.getElementById("products");
  list.innerHTML = "";

  products.forEach((product) => {
    const item = document.createElement("li");
    item.textContent = `${product.name} - $${product.price.toFixed(2)} (${product.inventory} in stock)`;
    list.appendChild(item);
  });
}

async function quoteCart() {
  const response = await fetch("/api/cart/quote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      items: [
        { id: "p1001", quantity: 2 },
        { id: "p1003", quantity: 1 }
      ],
      discountCode: "WELCOME10"
    })
  });

  const quote = await response.json();
  document.getElementById("quoteResult").textContent = JSON.stringify(quote, null, 2);
}

function setPromoText() {
  const promo = getQueryParam("promo");
  if (!promo) {
    return;
  }

  // Intentional for security demo issue: this should be textContent instead.
  document.getElementById("promoText").innerHTML = promo;
}

document.getElementById("loadProducts").addEventListener("click", loadProducts);
document.getElementById("quoteCart").addEventListener("click", quoteCart);
setPromoText();

