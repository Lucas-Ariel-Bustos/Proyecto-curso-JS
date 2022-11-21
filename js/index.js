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

//preentrega N°3
const selectExcursion = document.getElementById ('excursiones')
const buttonAgregarExcursión = document.getElementById ('agregarExcursión')
const selectComidas = document.getElementById ('comidas')
const buttonAgregarComida = document.getElementById ('agregarComida')
const buttonFinalizar = document.getElementById ('finalizar')

// ********EXCURSIONES*******
class Excursion {
    constructor(id, nombre, precio, stock){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
}
const excursionPotrerillos = new Excursion(1, 'potrerillos-Dique', 5000, 25)
const excursionPotrerillosCompleto = new Excursion(2, 'potrerillos-Completo', 6000, 25)
const excursionVillavicencio = new Excursion(3, 'villavicencio', 5000, 25)
const excursionuspallata = new Excursion(4, 'Uspallata', 6000, 25)
const excursionVillavicencioUspallata = new Excursion(5, 'villavicencio-Uspallata', 8000, 25)
const excursionPuenteDelInca = new Excursion(6, 'puente del Inca', 5000, 25)
const excursionCristoRedento = new Excursion(7, 'cristo Redentor', 10000, 25)

const excursionesArray = [excursionPotrerillos, excursionPotrerillosCompleto, excursionVillavicencio, excursionuspallata, excursionVillavicencioUspallata, excursionPuenteDelInca, excursionCristoRedento]


localStorage.setItem('Excursiones', JSON.stringify(excursionesArray));

const excursionesEnLocalStorage = JSON.parse(localStorage.getItem('excursionesArray')); 

excursionesArray.forEach(prod=>{
    let opcionesExcursion = document.createElement('option')
    opcionesExcursion.innerText = `${prod.nombre}: $${prod.precio}`
    selectExcursion.append(opcionesExcursion)
})

// *********MENÚ DE COMIDA*********

class Comida {
    constructor(id, nombre, precio){
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
}

const comidaPolloConGuarnicion = new Comida(1, 'Pollo', 1500)
const milanesaConGuarnicion = new Comida(2, 'Milanesa', 1500)
const sangucheDeJamionCrudo = new Comida(3, 'Sanguche', 1200)
const pastas = new Comida(4, 'Pastas', 1500)

const comidasArray = [comidaPolloConGuarnicion, milanesaConGuarnicion, sangucheDeJamionCrudo, pastas]

const comidasStorageJSON = JSON.stringify(comidasArray)
localStorage.setItem('Comidas', comidasStorageJSON)

const comidasEnLocalStorage = localStorage.getItem('comidasArray')
const comidasArrayJSON = JSON.parse(comidasEnLocalStorage)

comidasArray.forEach(prod=>{
    let opcionesComidas = document.createElement('option')
    opcionesComidas.innerText = `${prod.nombre}: $${prod.precio}`
    selectComidas.append(opcionesComidas)
})

// *******CARRITO*******

const carrito = [] 
// console.log(excursionesArray)
buttonAgregarExcursión.onclick = () => {
    const indexExc = selectExcursion.selectedIndex
    const excursionElegida = excursionesArray[indexExc]
    carrito.push(excursionElegida)
    console.log(carrito)
}

// console.log(comidasArray)
buttonAgregarComida.onclick = () => {
    const indexCom = selectComidas.selectedIndex
    const comidaElegida = comidasArray[indexCom]
    carrito.push(comidaElegida)
    console.log(carrito)
}


buttonFinalizar.onclick = () =>{
    let totalCompra = 0
    carrito.forEach(prod=>{
        totalCompra = totalCompra + parseInt(prod.precio)
    })
    console.log(`Total $${totalCompra}`)
}