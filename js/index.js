let precioPotrerillosD = 5000;
let precioPotrerillosC = 6000;
let precioVillavicencio = 5000;
let precioUspallata = 6000;
let precioVillavicencioUspallata = 8000;
let precioPuenteDelInca = 8000;
let precioCristoRedentor = 10000;

let precioPollo = 5000;
let precioMilanesa = 6000;
let precioJamon = 5000;
let precioPastas = 8000;

let otraExcursion
let precioTotal = 0;
let invalido = false;

function saludar(destino) {
    alert("En el próximo menú elija su " + destino);
}
saludar("destino");
do {
    const excursionesMendoza = prompt(`¿Que lugar de Mendoza desea conocer?
    1. Potrerillos (dique)
    2. Potrerillos completo (Las Vegas - El Salto)
    3. Villavicencio (Reserva Natural)
    4. Uspallata (Las Bóvedas - actividades ecuestres)
    5. Villavicencio - Uspallata (El camino del Año)
    6. Puente del Inca (Monumento Natural Puente del Inca)
    7. Cristo Redentor (Límite con Chile)
    8. Salir de este menú
    `);
    switch (excursionesMendoza) {
        case "1":
            precioTotal = precioTotal + precioPotrerillosD
            console.log("1. Potrerillos")            
            break;
        case "2":
            precioTotal = precioTotal + precioPotrerillosC
            console.log("2. Potrerillos completo")           
            break;
        case "3":
            precioTotal = precioTotal + precioVillavicencio
            console.log("3. Villavicencio")
        case "4":
            precioTotal = precioTotal + precioUspallata
            console.log("4. Uspallata")          
            break;
        case "5":
            precioTotal = precioTotal + precioVillavicencioUspallata
            console.log("5. Villavicencio - Uspallata")           
            break;
        case "6":
            precioTotal = precioTotal + precioPuenteDelInca
            console.log("6. Puente del Inca")           
            break;
        case "7":
            precioTotal = precioTotal + precioCristoRedentor
            console.log("7. Cristo Redentor")           
            break;
        case "8":
            console.log("Gracias! Vuelva pronto!");
            break;
        default:
            invalido = true;
            break;
    }
    if (invalido) {
        alert("Ingrese una opción válida")
        // invalido = false;
        // otraExcursion = "si"
        continue;
    }
    if (excursionesMendoza == 8) {
        alert("Gracias! Vuelva pronto!")
        break;
    }
    function saludar(destino) {
        alert("En el próximo menú elija su " + destino);
    }
    saludar("menú de comida");
    const comidaIncluida = prompt(`Elija el menú que quiere consumir (todas con bebidas)
        1. Pollo con guarnición.
        2. Milanesas con guarnición.
        3. Sanguche de jamón crudo.
        4. Pastas (ravioles).
        5. Sin comida.
    `); 
    switch (comidaIncluida) {
        case "1":
            precioTotal = precioTotal + precioPollo
            console.log("1. Pollo con guarnición.")            
            break;
        case "2":
            precioTotal = precioTotal + precioMilanesa
            console.log("2. Milanesas con guarnición.")
            break;
        case "3":
            precioTotal = precioTotal + precioJamon
            console.log("3. Sanguche de jamón crudo.")
        case "4":
            precioTotal = precioTotal + precioPastas
            console.log("4. Pastas")          
            break;
        case "5":         
            break;
        default:
            invalido = true
            break;
    }   
    if (comidaIncluida == 5) {
        console.log("Sin Comida")
    }
    // console.log("Menú adquirido " + comidaIncluida);
    otraExcursion = prompt('¿Desea adquirir otra excursión? y/n');
    console.log("Elija otra excursión ", otraExcursion);
} while (otraExcursion == "y"); 
console.log("Total a pagar " + precioTotal);


