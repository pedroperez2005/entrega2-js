const productos = [
    {
        nombre: "Sillón de terciopelo",
        precio: 3000
    },
    {
        nombre: "Mesa de comedor",
        precio: 5000
    },
    {
        nombre: "Silla gamer",
        precio: 2100
    },
    {
        nombre: "Cama King Size",
        precio: 7700
    }
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const productosContainer = document.getElementById("productos");
const carritoContainer = document.getElementById("carrito");
const totalContainer = document.getElementById("total");
const finalizarBtn = document.getElementById("finalizar");

function mostrarProductos() {
    productosContainer.innerHTML = "";
    productos.forEach((producto, index) => {
        productosContainer.innerHTML += `
            <div class="p-4 border rounded-lg shadow-md bg-white">
                <h3 class="text-lg font-semibold">${producto.nombre}</h3>
                <p class="text-gray-700">$${producto.precio}</p>
                <button class="mt-2 bg-blue-500 text-white px-4 py-2 rounded" onclick="agregarAlCarrito(${index})">
                    Agregar al carrito
                </button>
            </div>
        `;
    });
}

function actualizarCarrito() {
    carritoContainer.innerHTML = "";
    let total = 0;

    carrito.forEach((item, index) => {
        total += item.precio;
        carritoContainer.innerHTML += `
            <div class="flex justify-between p-2 bg-gray-100 rounded-lg my-2">
                <p>${item.nombre} - $${item.precio}</p>
                <button class="bg-red-500 text-white px-2 py-1 rounded" onclick="eliminarDelCarrito(${index})">X</button>
            </div>
        `;
    });

    totalContainer.textContent = `Total: $${total}`;
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarAlCarrito(index) {
    carrito.push(productos[index]);
    actualizarCarrito();
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

function finalizarCompra() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    if (confirm(`Total a pagar: $${carrito.reduce((sum, item) => sum + item.precio, 0)}. ¿Desea confirmar la compra?`)) {
        alert("¡Compra realizada con éxito! Gracias por comprar en Mueblería Pérez.");
        carrito = [];
        localStorage.removeItem("carrito");
        actualizarCarrito();
    }
}

finalizarBtn.addEventListener("click", finalizarCompra);

mostrarProductos();
actualizarCarrito();