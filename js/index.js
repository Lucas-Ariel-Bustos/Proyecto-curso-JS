let excursiones = [
    {
        id: "excursion-1",
        titulo: "Potrerillos (Dique)",
        imagen: "./assets/img/excursion potrerillos.jpg",
        precio: 5000,
    },
    {
        id: "excursion-2",
        titulo: "Potrerillos (Completo)",
        imagen: "./assets/img/excursion potrerillos completo.jpg",
        precio: 8000,  
    },
    {
        id: "excursion-3",
        titulo: "Villavicencio",
        imagen: "./assets/img/excursion villavicencio.jpg",
        precio: 8000,  
    },
    {
        id: "excursion-4",
        titulo: "Alta Montaña",
        imagen: "./assets/img/excursion puente del inca - cristo redentor.jpg",
        precio: 8000,  
    },
    {
        id: "excursion-5",
        titulo: "San Rafael",
        imagen: "./assets/img/valle grande.jpg",
        precio: 8000,  
    },
    {
        id: "excursion-6",
        titulo: "Bodegas",
        imagen: "./assets/img/bodegas.jpg",
        precio: 10000,  
    },
]

const contenedorExcursiones = document.querySelector("#contenedor-excursiones")
let botonesAgregarExcursion = document.querySelectorAll(".excursion-agregar")
const numerito = document.querySelector('#numerito')

function cargarExcursiones () {
    excursiones.forEach(excursion => {
        const div = document.createElement("div");
        div.classList.add("excursion");
        div.innerHTML = `
            <img class="imagenProducto excursion-imagen" src= "${excursion.imagen}" alt="${excursion.titulo}" />
                <div class="excursion-detalles">
                    <h2 class="excursion-titulo">${excursion.titulo}</h2>
                    <p class="excursion-precio">$${excursion.precio}(Arg)</p>
                    <button id="${excursion.id}" class="excursion-agregar">Agregar</button>
                </div>
        `;      
        contenedorExcursiones.append(div)
    })
    actualizarBotonesAgregar();
}
cargarExcursiones();


    function actualizarBotonesAgregar() {
    botonesAgregarExcursion = document.querySelectorAll(".excursion-agregar")

    botonesAgregarExcursion.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}

let excursionesEnCarrito = [];

function agregarAlCarrito(e) {
    const idBoton =e.currentTarget.id;
    const excursionAgregada = excursiones.find(excursion => excursion.id === idBoton)
    if(excursionesEnCarrito.some(excursion => excursion.id === idBoton)) {
        const index = excursionesEnCarrito.findIndex(excursion => excursion.id === idBoton);
        excursionesEnCarrito[index].cantidad++;
    } else {
        excursionAgregada.cantidad = 1;
        excursionesEnCarrito.push(excursionAgregada);
    }
    actualizarNumerito();
    
    const excursionesEnCarritoJSON = JSON.stringify(excursionesEnCarrito);
    localStorage.setItem("excursion-en-carrito", excursionesEnCarritoJSON);
//    localStorage.setItem("excursiones-en-carrito", JSON.stringify(excursionesEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = excursionesEnCarrito.reduce((acc, excursion) => acc + excursion.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}



// function agregarAlCarrito(e) {
//    const idBoton = e.currentTarget.id;
//    let excursionAgregada = excursiones.find(excursion => excursion.id === idBoton);
//    if(excursionesEnCarrito.some(excursion => excursion.id === idBoton)) {
//         const index = excursionesEnCarrito.findIndex(excursion => excursion.id === idBoton)
//         excursionesEnCarrito[index].cantidad++;
//     }
//     else {
//         // excursionAgregada.cantidad = 1;
//         excursionesEnCarrito.push(excursionAgregada);
//     }

//     console.log(excursionesEnCarrito)
// }

// let excursionesEnCarrito = [];

// function agregarAlCarrito(e) {
//    const idBoton = e.currentTarget.id;
//    let excursionAgregada = excursiones.find(excursion => excursion.id === idBoton);
//    if(excursionesEnCarrito.some(excursion => excursion.id === idBoton)) {
//         const index = excursionesEnCarrito.findIndex(excursion => excursion.id === idBoton)
//         excursionesEnCarrito[index].cantidad++;
//     }
//     else {
//         // excursionAgregada.cantidad = 1;
//         excursionesEnCarrito.push(excursionAgregada);
//     }

//     console.log(excursionesEnCarrito)
// }

    // const agregarAlCarrito = (prodId) => {
    //     const item = excursiones.find((prod) => prod.id === prodId)
    //     carrito.push(item)
    //     console.log(carrito)
    // }


    // actualizarBotonesAgregar();
    // console.log(botonesAgregarExcursion)
// }
// cargarExcursiones(excursiones);



// let excursionesEnCarrito = [];

// function agregarAlCarrito(e) {
//    const idBoton = e.currentTarget.id;
//    let excursionAgregada = excursiones.find(excursion => excursion.id === idBoton);
//    if(excursionesEnCarrito.some(excursion => excursion.id === idBoton)) {
//         const index = excursionesEnCarrito.findIndex(excursion => excursion.id === idBoton)
//         excursionesEnCarrito[index].cantidad++;
//     }
//     else {
//         // excursionAgregada.cantidad = 1;
//         excursionesEnCarrito.push(excursionAgregada);
//     }

//     console.log(excursionesEnCarrito)
// }


// let discoAgregado;

// function agregarAlCarrito(e) {
//   TOASagregandoAlCarrito();  
//   const idBoton = e.currentTarget.id;
//    discoAgregado = discosArreglo.find(disco => disco.id === idBoton);

//   if(carrito.some(disco => disco.id === idBoton)) {
//     const index = carrito.findIndex(disco => disco.id === idBoton);
//     carrito[index].cantidad++;
//   }
//   else {
//     discoAgregado.cantidad = 1;
//     carrito.push(discoAgregado); 
//   }

//   actualizarNumerito();
// localStorage.setItem("ProductosEnCarrito", JSON.stringify(carrito));
// totalTodo();
// }
// *****ME QUEDÉ AGREGANDO PRODUCTOS AL CARRITO*****falla la eleccion de cada producto

// *************AYUDA DEL TUTOR****************
// function cargarExcursiones() {
//     excursiones.forEach(excursion => {
//         const div = document.createElement("div");
//         div.classList.add("excursion");
//         div.innerHTML = `
//             <img class="imagenProducto excursion-imagen1" src= "${excursion.imagen}" alt="${excursion.titulo}" />
//                 <div class="excursion-detalles">
//                     <h2 class="descripcion-producto1">${excursion.titulo}</h2>
//                     <p class="precioPotrerillos">$${excursion.precio}(Arg)</p>
//                     <button class="agregar-excursion" id="boton-${excursion.id}">Agregar</button>
//                 </div>
//         `;
//         contenedorExcursiones.appendChild(div);
//         const botonesAgregarExcursion = document.getElementById(`boton-${excursion.id}`)
//         botonesAgregarExcursion.addEventListener("click", () => agregarAlCarrito(excursion.id));
//     })
// }

// function agregarAlCarrito(id) {
//     console.log(id);
// }

// ****************************************

// cargarExcursiones();

// function agregarExcursionAlCarrito () {
//     botonesAgregarExcursion = document.querySelector(".agregar-excursion");
//     botonesAgregarExcursion.forEach(boton=>{
//         boton.addEventListener("click", agregarAlCarrito);
//     })
// }

// const excursionesEnCarrito = [];

// function agregarAlCarrito(e) {
//     const id = e.currenTarget.id;
//     console.log(id);
// }

// //preentrega N°3
// const selectExcursion = document.getElementById ('excursiones')
// const buttonAgregarExcursión = document.getElementById ('agregarExcursión')
// const selectComidas = document.getElementById ('comidas')
// const buttonAgregarComida = document.getElementById ('agregarComida')
// const buttonFinalizar = document.getElementById ('finalizar')

// // ********EXCURSIONES*******
// class Excursion {
//     constructor(id, nombre, precio, stock){
//         this.id = id
//         this.nombre = nombre
//         this.precio = precio
//         this.stock = stock
//     }
// }
// const excursionPotrerillos = new Excursion(1, 'potrerillos-Dique', 5000, 25)
// const excursionPotrerillosCompleto = new Excursion(2, 'potrerillos-Completo', 6000, 25)
// const excursionVillavicencio = new Excursion(3, 'villavicencio', 5000, 25)
// const excursionuspallata = new Excursion(4, 'Uspallata', 6000, 25)
// const excursionVillavicencioUspallata = new Excursion(5, 'villavicencio-Uspallata', 8000, 25)
// const excursionPuenteDelInca = new Excursion(6, 'puente del Inca', 5000, 25)
// const excursionCristoRedento = new Excursion(7, 'cristo Redentor', 10000, 25)

// const excursionesArray = [excursionPotrerillos, excursionPotrerillosCompleto, excursionVillavicencio, excursionuspallata, excursionVillavicencioUspallata, excursionPuenteDelInca, excursionCristoRedento]


// localStorage.setItem('Excursiones', JSON.stringify(excursionesArray));

// const excursionesEnLocalStorage = JSON.parse(localStorage.getItem('excursionesArray')); 

// excursionesArray.forEach(prod=>{
//     let opcionesExcursion = document.createElement('option')
//     opcionesExcursion.innerText = `${prod.nombre}: $${prod.precio}`
//     selectExcursion.append(opcionesExcursion)
// })

// // *********MENÚ DE COMIDA*********

// class Comida {
//     constructor(id, nombre, precio){
//         this.id = id
//         this.nombre = nombre
//         this.precio = precio
//     }
// }

// const comidaPolloConGuarnicion = new Comida(1, 'Pollo', 1500)
// const milanesaConGuarnicion = new Comida(2, 'Milanesa', 1500)
// const sangucheDeJamionCrudo = new Comida(3, 'Sanguche', 1200)
// const pastas = new Comida(4, 'Pastas', 1500)

// const comidasArray = [comidaPolloConGuarnicion, milanesaConGuarnicion, sangucheDeJamionCrudo, pastas]

// const comidasStorageJSON = JSON.stringify(comidasArray)
// localStorage.setItem('Comidas', comidasStorageJSON)

// const comidasEnLocalStorage = localStorage.getItem('comidasArray')
// const comidasArrayJSON = JSON.parse(comidasEnLocalStorage)

// comidasArray.forEach(prod=>{
//     let opcionesComidas = document.createElement('option')
//     opcionesComidas.innerText = `${prod.nombre}: $${prod.precio}`
//     selectComidas.append(opcionesComidas)
// })

// // *******CARRITO*******

// const carrito = [] 
// buttonAgregarExcursión.onclick = () => {
//     const indexExc = selectExcursion.selectedIndex
//     const excursionElegida = excursionesArray[indexExc]
//     carrito.push(excursionElegida)
//     console.log(carrito)
//     localStorage.setItem('carrito', JSON.stringify(carrito));
// }

// buttonAgregarComida.onclick = () => {
//     const indexCom = selectComidas.selectedIndex
//     const comidaElegida = comidasArray[indexCom]
//     carrito.push(comidaElegida)
//     console.log(carrito)
//     localStorage.setItem('carrito', JSON.stringify(carrito));
// }

// buttonFinalizar.onclick = () =>{
//     let totalCompra = 0
//     carrito.forEach(prod=>{
//         totalCompra = totalCompra + parseInt(prod.precio)
//     })
//     console.log(`Total $${totalCompra}`)
// }



// *****CÓDIGOS DE PREENTREGAS ANTERIORES*****

// let precioPotrerillosD = 5000;
// let precioPotrerillosC = 6000;
// let precioVillavicencio = 5000;
// let precioUspallata = 6000;
// let precioVillavicencioUspallata = 8000;
// let precioPuenteDelInca = 8000;
// let precioCristoRedentor = 10000;

// let precioPollo = 5000;
// let precioMilanesa = 6000;
// let precioJamon = 5000;
// let precioPastas = 8000;

// let otraExcursion
// let precioTotal = 0;
// let invalido = false;
// //Arrays
// const bebidas = ['Coca-Cola', 'Agua con gas', 'Agua sin gas', 'Agua saborizada']

// //Objetos
// function Lugar (lugar, duracion, horarioSalida, horarioLlegada, distancia, paradas) {
//     this.lugar = lugar
//     this.duracion = duracion
//     this.horarioSalida = horarioSalida;
//     this.horarioLlegada = horarioLlegada;
//     this.distancia = distancia;
//     this.paradas =paradas;
// }
// const potrerillos = new Lugar ('Potrerillos','7hs','7hs', '14hs', '130km', '5');
// const potrerillosCompleto = new Lugar('Potrerillos Completo','8hs','7hs', '15hs', '164km', '8');
// const villavicencio = new Lugar ('Villavicencio','8hs','8:30hs', '16:30hs', '100km', '3');
// const uspallata = new Lugar ('Uspallata','8hs','8hs', '16hs', '240km', '5');
// const villavicencioUspallata = new Lugar ('Villavicencio-Uspallata','12hs','7hs', '19hs', '280km', '10')
// const puenteDelInca = new Lugar ('Puente del Inca', '9hs','7hs', '18hs', '400km', '10');
// const cristoRedentor = new Lugar ('Cristo Redentor','12hs','7hs', '19hs', '500km', '10');

// console.log(potrerillos);
// console.log(potrerillosCompleto);
// console.log(villavicencio);
// console.log(uspallata)
// console.log(villavicencioUspallata)
// console.log(puenteDelInca)
// console.log(cristoRedentor)


// function saludar(destino) {
//     alert("Elija su " + destino);
// }
// saludar("destino");

// do {
//     const excursionesMendoza = prompt(`¿Que lugar de Mendoza desea conocer?
//     1. Potrerillos (dique)
//     2. Potrerillos completo (Las Vegas - El Salto)
//     3. Villavicencio (Reserva Natural)
//     4. Uspallata (Las Bóvedas - actividades ecuestres)
//     5. Villavicencio - Uspallata (El camino del Año)
//     6. Puente del Inca (Monumento Natural Puente del Inca)
//     7. Cristo Redentor (Límite con Chile)
//     8. Salir de este menú
//     `);
//     switch (excursionesMendoza) {
//         case "1":
//             precioTotal = precioTotal + precioPotrerillosD
//             console.log("1. Potrerillos")            
//             break;
//         case "2":
//             precioTotal = precioTotal + precioPotrerillosC
//             console.log("2. Potrerillos completo")           
//             break;
//         case "3":
//             precioTotal = precioTotal + precioVillavicencio
//             console.log("3. Villavicencio")
//         case "4":
//             precioTotal = precioTotal + precioUspallata
//             console.log("4. Uspallata")          
//             break;
//         case "5":
//             precioTotal = precioTotal + precioVillavicencioUspallata
//             console.log("5. Villavicencio - Uspallata")           
//             break;
//         case "6":
//             precioTotal = precioTotal + precioPuenteDelInca
//             console.log("6. Puente del Inca")           
//             break;
//         case "7":
//             precioTotal = precioTotal + precioCristoRedentor
//             console.log("7. Cristo Redentor")           
//             break;
//         case "8":
//             console.log("Gracias! Vuelva pronto!");
//             break;
//         default:
//             invalido = true;
//             break;
//     }
//     if (invalido) {
//         alert("Ingrese una opción válida")
//         // invalido = false;
//         // otraExcursion = "si"
//         continue;
//     }
//     if (excursionesMendoza == 8) {
//         alert("Gracias! Vuelva pronto!")
//         break;
//     }
//     function saludar(destino) {
//         alert("En la próxima lista elija su " + destino);
//     }
//     saludar("menú de comida");
    
//     const comidaIncluida = prompt(`Elija el menú que quiere consumir (todas con bebidas)
//         1. Pollo con guarnición.
//         2. Milanesas con guarnición.
//         3. Sanguche de jamón crudo.
//         4. Pastas (ravioles).
//         5. Sin comida.
//     `); 
//     switch (comidaIncluida) {
//         case "1":
//             precioTotal = precioTotal + precioPollo
//             console.log("1. Pollo con guarnición.")            
//             break;
//         case "2":
//             precioTotal = precioTotal + precioMilanesa
//             console.log("2. Milanesas con guarnición.")
//             break;
//         case "3":
//             precioTotal = precioTotal + precioJamon
//             console.log("3. Sanguche de jamón crudo.")
//         case "4":
//             precioTotal = precioTotal + precioPastas
//             console.log("4. Pastas")          
//             break;
//         case "5":         
//             break;
//         default:
//             invalido = true
//             break;
//     }   
//     if (comidaIncluida === 5) {
//         console.log("Sin Comida")
//     }
//     //Arrays
//     console.log('Estas son las opciones de bebidas', bebidas)
//    //find
//     let elijaBebida = prompt(`Escriba la bebida que haya elejido
//     Coca Cola
//     Agua con gas
//     Agua sin gas
//     Agua saborizad`)
//     console.log(bebidas.find((bebida) => bebida === elijaBebida));

//     otraExcursion = prompt('¿Desea adquirir otra excursión? y/n');
//     console.log('Elija otra excursión ', otraExcursion);    
// } while (otraExcursion === "y"); 
// console.log("Total a pagar " + precioTotal);

// //Correccíon del tutor!!
// while(otraExcursion != 'y'){
//     if (otraExcursion != 'n'){
//         alert('Ingrese una opcion valida');
//         otraExcursion = prompt('¿Desea adquirir otra excursión? y/n');
//     }else{
//         break;
//     }
// }