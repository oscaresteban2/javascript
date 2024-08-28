fetch("products.json")
  .then((response) => response.json())
  .then((data) => {
    products = data;
    renderProducts();
  })
  .catch((error) => {
    Swal.fire({
      icon: "error",
      text: "no an cargado correctamente los productos por favor espera pronto resolveremos el problema",
    });
  });

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts() {
  const productContainer = document.getElementById("products");
  productContainer.innerHTML = "";
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `
          <img class="container img" src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Precio: $${product.price}</p>
          <button class="" onclick="addToCart(${product.id})">Agregar al carrito</button>
      `;
    productContainer.appendChild(productElement);
  });
}

function addToCart(productId, quantity = 1) {
  const product = products.find((p) => p.id === productId);
  const existingProduct = cart.find((p) => p.id === productId);
  Toastify({
    text: "se ha agregado al carrito",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "bottom",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, black, #28a745)",
    },
  }).showToast();
  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceContainer = document.getElementById("total-price");
  cartItemsContainer.innerHTML = "";

  let totalPrice = 0;
  cart.forEach((product) => {
    totalPrice += product.price * product.quantity; // Multiplica el precio por la cantidad
    const cartItem = document.createElement("div");
    cartItem.innerHTML = `
      <img class="ime" src="${product.image}" alt="${product.name}">   <td>${
      product.name
    }</td>  <td>${product.quantity}</td>  <td>$${
      product.price * product.quantity
    }</td> 
      <button onclick="removeFromCart(${product.id})">Eliminar</button>`;
    cartItemsContainer.appendChild(cartItem);
  });

  totalPriceContainer.innerText = `Precio Total: $${totalPrice}`;
}
document.getElementById("search").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );
  const productContainer = document.getElementById("products");
  productContainer.innerHTML = "";
  filteredProducts.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Precio: $${product.price}</p>
          <button onclick="addToCart(${product.id} )">Agregar al carrito</button>
      `;
    productContainer.appendChild(productElement);
  });
});

document.getElementById("checkout").addEventListener("click", function () {
  if (cart.length === 0) {
    Swal.fire({
      icon: "error",
      text: "el carito esta vacio!",
      footer: "por favor agrega productos para continuar con la compra",
    });
  } else {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "tu compra se realizo con exito!!",
      showConfirmButton: false,
      timer: 1500,
    });
    cart = [];
    localStorage.removeItem("cart");
    renderCart();
  }
});

renderProducts();
renderCart();

// Animación del banner
const banner = document.getElementById("banner");
let bannerHeight = banner.offsetHeight;
window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY;
  banner.style.backgroundPositionY = -scrollPos / 2 + "px";
  banner.style.opacity = 1 - Math.max(scrollPos - bannerHeight, 0) / 200;
});

// Validación del formulario de contacto
const form = document.querySelector("form");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (nombre.value === "" || email.value === "" || mensaje.value === "") {
    alert("Por favor, rellena todos los campos.");
  } else {
    alert("Mensaje enviado correctamente.");
    form.reset();
  }
});
