let excursionesEnCarrito = localStorage.getItem("excursiones-en-carrito");
excursionesEnCarrito = JSON.parse(excursionesEnCarrito);


const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoExcursiones = document.querySelector("#carrito-excursiones");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminarExcursion = document.querySelector(".eliminar-excursion");

function cargarExcursionesEnCarrito() {
    if (excursionesEnCarrito && excursionesEnCarrito > 0) {
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
                    <p>Cantidad<p>
                    <p>${excursion.cantidad}</p>
                </div>
                <div class="precioExcursionElegida">
                    <p>Precio</p>
                    <p>$${excursion.precio}</p>
                </div>
                <div class="carrito-subtotal">
                    <p>Acumulado<p>
                    <p>$${excursion.precio * excursion.cantidad}</p>
                </div>
                <div class="eliminarDeCarrito">
                    <button class="eliminar-excursion" id="${excursion.id}"><i class="bi bi-trash-fill"></i></button>
                </div>
            `;
            contenedorCarritoExcursiones.append(div);
        })
        
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoExcursiones.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled"); 
    }
    actualizarBotonesEliminar();
}
cargarExcursionesEnCarrito();


function actualizarBotonesEliminar() {
    botonesEliminarExcursion = document.querySelectorAll(".eliminar-excursion");

    botonesEliminarExcursion.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    })
}

function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = excursionesEnCarrito.findIndex(excursion => excursion.id === idBoton);
    excursionesEnCarrito.splice(index, 1);
    cargarExcursionesEnCarrito();
    localStorage.setItem("excursiones-en-carrito", JSON.stringify(excursionesEnCarrito));
}