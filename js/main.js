let opcion;
const carritoNombres = [];
const carritoPrecios = [];
const productosNombres = ["Sillón de terciopelo", "Mesa de comedor", "Silla gamer", "Cama King Size"];
const productosPrecios = [3000, 5000, 2100, 7700]; //Pesos mexicanos ;)

do {
    opcion = parseInt(prompt(
        "¡Bienvenido a Mueblería Pérez!\n\n" +
        "1. Agregar producto al carrito\n" +
        "2. Eliminar producto del carrito\n" +
        "3. Ver carrito\n" +
        "4. Finalizar compra\n" +
        "0. Salir"
    ));

    switch (opcion) {
        case 0:
            alert("¡Gracias por visitarnos!");
            break;
        case 1:
            agregarAlCarrito();
            break;
        case 2:
            eliminarDelCarrito();
            break;
        case 3:
            verCarrito();
            break;
        case 4:
            finalizarCompra();
            break;
        default:
            alert("Opción inválida.");
    }
} while (opcion !== 0);


function agregarAlCarrito() {
    let mensaje = "Ingrese el número del producto que desea agregar:\n\n";
    for (let i = 0; i < productosNombres.length; i++) {
        mensaje += `${i + 1}. ${productosNombres[i]} - $${productosPrecios[i]}\n`;
    }
    let seleccion = parseInt(prompt(mensaje)) - 1;

    if (seleccion >= 0 && seleccion < productosNombres.length) {
        carritoNombres.push(productosNombres[seleccion]);
        carritoPrecios.push(productosPrecios[seleccion]);
        alert(`${productosNombres[seleccion]} agregado al carrito.`);
    } else {
        alert("Opción inválida.");
    }
}

function eliminarDelCarrito() {
    if (carritoNombres.length === 0) {
        alert("No hay productos en el carrito para eliminar.");
        return;
    }

    let mensaje = "Ingrese el número del producto que desea eliminar:\n\n";
    for (let i = 0; i < carritoNombres.length; i++) {
        mensaje += `${i + 1}. ${carritoNombres[i]} - $${carritoPrecios[i]}\n`;
    }
    let indexEliminar = parseInt(prompt(mensaje)) - 1;

    if (indexEliminar >= 0 && indexEliminar < carritoNombres.length) {
        let eliminadoNombre = carritoNombres.splice(indexEliminar, 1);
        carritoPrecios.splice(indexEliminar, 1);
        alert(`${eliminadoNombre[0]} eliminado del carrito.`);
    } else {
        alert("Opción inválida.");
    }
}

function verCarrito() {
    if (carritoNombres.length === 0) {
        alert("Tu carrito está vacío.");
    } else {
        let mensaje = "Carrito de compras:\n";
        let total = 0;
        for (let i = 0; i < carritoNombres.length; i++) {
            mensaje += `- ${carritoNombres[i]}: $${carritoPrecios[i]}\n`;
            total += carritoPrecios[i];
        }
        mensaje += `\nTotal: $${total}`;
        alert(mensaje);
    }
}

function finalizarCompra() {
    if (carritoNombres.length === 0) {
        alert("No puedes finalizar la compra con el carrito vacío.");
        return;
    }

    let total = 0;
    for (let i = 0; i < carritoPrecios.length; i++) {
        total += carritoPrecios[i];
    }
    let confirmacion = confirm(`Total a pagar: $${total}.\n¿Desea confirmar la compra?`);

    if (confirmacion) {
        alert("Compra realizada con éxito. Gracias por comprar en Mueblería Pérez.");
        carritoNombres.length = 0;
        carritoPrecios.length = 0;
    } else {
        alert("La compra fue cancelada.");
    }
}
