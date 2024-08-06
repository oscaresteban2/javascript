function obtenerValores() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  console.log("los numeros son " + " numero uno " + num1 + " y " + " numero dos " + num2)

  // Validar si los valores están vacíos
  for (const valor of [num1, num2]) {
    if (!valor) {
      document.getElementById("resultado").innerText =
        "Por favor ingresa ambos números";
      return null;
    }
  }

  return [parseFloat(num1), parseFloat(num2)];
}

function sumar() {
  const valores = obtenerValores();
  if (!valores) return;

  const [num1, num2] = valores;
  const resultado = num1 + num2;
  document.getElementById(
    "resultado"
  ).innerText = `el resultado de la suma es: ${resultado}`;
}

function restar() {
  const valores = obtenerValores();
  if (!valores) return;

  const [num1, num2] = valores;
  const resultado = num1 - num2;
  document.getElementById(
    "resultado"
  ).innerText = `El resultado de la resta es: ${resultado}`;
}

function multiplicar() {
  const valores = obtenerValores();
  if (!valores) return;

  const [num1, num2] = valores;
  const resultado = num1 * num2;
  document.getElementById(
    "resultado"
  ).innerText = `El resultado de la multiplicación es: ${resultado}`;
}

function dividir() {
  const valores = obtenerValores();
  if (!valores) return;

  const [num1, num2] = valores;

  if (num2 === 0) {
    document.getElementById("resultado").innerText =
      "No se puede dividir por cero";
    return;
  }

  const resultado = num1 / num2;
  document.getElementById(
    "resultado"
  ).innerText = `El resultado de la división es: ${resultado}`;
}

// filtro de busqueda array,un tipo de filtro
// image:'./img/persona.png',
const products = [
  { name: "Camisa de cuadros", type: "camisa", price: 30 },
  { name: "Pantalón vaquero", type: "pantalon", price: 40 },
  { name: "Pantalón bota campana", type: "pantalon", price: 35 },
  { name: "Pantalón grande", type: "pantalon", price: 100 },
  { name: "Chaqueta de cuero", type: "chaqueta", price: 50 },
  { name: "Camisa blanca", type: "camisa", price: 25 },
];

function renderProducts(filteredProducts) {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "";
  filteredProducts.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.textContent = `${product.name} - $${product.price}`;
    productsContainer.appendChild(productElement);
  });
}

function filterProducts() {
  const typeFilter = document.getElementById("type").value;
  const priceFilter = parseInt(document.getElementById("price").value, 10);

  const filteredProducts = products.filter((product) => {
    if (typeFilter !== "all" && product.type !== typeFilter) {
      return false;
    }
    if (priceFilter && product.price > priceFilter) {
      return false;
    }
    return true;
  });

  renderProducts(filteredProducts);
}

filterProducts();

// Animación del banner
  const banner = document.getElementById('banner');
  let bannerHeight = banner.offsetHeight;
  window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY;
  banner.style.backgroundPositionY = -scrollPos / 2 + 'px';
  banner.style.opacity = 1 - Math.max(scrollPos - bannerHeight, 0) / 200;
});

// Validación del formulario de contacto
const form = document.querySelector('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (nombre.value === '' || email.value === '' || mensaje.value === '') {
    alert('Por favor, rellena todos los campos.');
  } else {
    alert('Mensaje enviado correctamente.');
    form.reset();
  }
});