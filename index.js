let cantidades = 0;
const precio = 400000;

function aumentar() {
    cantidades++;
    actualizarValores();
}

function disminuir() {
    if (cantidades > 0) {
        cantidades--;
        actualizarValores();
    }
}

function actualizarValores() {
    const cantidadSpan = document.querySelector('.cantidad');
    const precioTotal = document.querySelector('.valor-total');

    cantidadSpan.textContent = cantidades;
    precioTotal.textContent = (cantidades * precio).toLocaleString('es-CL');
}