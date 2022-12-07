const excursionesEnCarrito = JSON.parse(localStorage.getItem("#excursiones-en-carrito"));

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoExcursiones = document.querySelector("#carrito-excursiones")
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones")
const contenedorCarritoComprado = document.querySelector("#carrito-comprado")

if (excursionesEnCarrito) {
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoExcursiones.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");
    contenedorCarritoComprado.classList.add("disabled")

    contenedorCarritoExcursiones.innerHTML = "";

    excursionesEnCarrito.forEach(excursion => {
        const div = document.createElement("div")
        div.classList.add("excursionElegida")
        div.innerHTML = `
        <img class="imagenProductoElegido" src="${excursion.imagen}" alt="${excursion.titulo}" />
            <div class="excursion-detalles-elegido">
                <h2 class="descripcion-elegida">${excursion.titulo}</h2>
            </div>
            <div class="cantidad">
                <p>${excursion.cantidad}</p>
                <p>1</p>
            </div>
            <div class="precioExcursionElegida">
                <p>Precio</p>
                <p>$${excursion.precio}</p>
            </div>
            <div class="carrito-subtotal">
                <p>$${excursion.precio * excursion.cantidad}</p>
            </div>
            <div class="eliminarDeCarrito">
                <button id="${excursion.id}"><i class="bi bi-trash-fill"></i></button>
            </div>
        `;
        contenedorCarritoExcursiones.append(div);
    })
    
} else {
    
}