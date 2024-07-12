function pedirEntradaNumerica(texto) {
    return Number(prompt(texto));
}

function agregarProductos() {
    let opcionCompra = pedirEntradaNumerica("Ingrese el evento al que desea asistir:\n1 Concierto $50000\n2 Teatro $30000\n3 Cine $20000");
    let cantidad;
    let subtotal = 0;
    switch (opcionCompra) {
        case 1:
            cantidad = pedirEntradaNumerica("Ingrese la cantidad de entradas");
            subtotal = cantidad * 50000;
            break;
        case 2:
            cantidad = pedirEntradaNumerica("Ingrese la cantidad de entradas");
            subtotal = cantidad * 30000;
            break;
        case 3:
            cantidad = pedirEntradaNumerica("Ingrese la cantidad de entradas");
            subtotal = cantidad * 20000;
            break;
        default:
            alert("Opción de evento incorrecta");
            break;
    }
    return subtotal;
}

let opcion = pedirEntradaNumerica("Ingrese\n1 para comprar\n2 para finalizar compra\n0 para salir");
let total = 0;

while (opcion !== 0) {
    if (opcion === 1) {
        total += agregarProductos();
    } else if (opcion === 2) {
        alert("Total: " + total + ". Gracias por su compra. Vuelta pronto");
        total = 0;
    } else {
        alert("Opción incorrecta");
    }
    opcion = pedirEntradaNumerica("Ingrese\n1 para comprar\n2 para finalizar compra\n0 para salir");
}
