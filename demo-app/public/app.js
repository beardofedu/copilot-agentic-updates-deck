// Maximum length for promo text to prevent DOM saturation attacks
const MAX_PROMO_LENGTH = 256;

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

  // Security fix: use textContent instead of innerHTML to prevent reflected XSS
  // textContent safely treats input as plain text, not HTML
  // Truncate to MAX_PROMO_LENGTH to prevent DOM saturation attacks
  const truncatedPromo = promo.substring(0, MAX_PROMO_LENGTH);
  document.getElementById("promoText").textContent = truncatedPromo;
}

document.getElementById("loadProducts").addEventListener("click", loadProducts);
document.getElementById("quoteCart").addEventListener("click", quoteCart);
setPromoText();

