// Declaración de variables
let acumulate = 0;
let typeOperation = "";

// Escucha los botones de la calculadora

document.getElementById("sumar").addEventListener("click", sumar);
document.getElementById("restar").addEventListener("click", restar);
document.getElementById("multiplicar").addEventListener("click", multiplicar);
document.getElementById("dividir").addEventListener("click", dividir);
document.getElementById("calcular").addEventListener("click", calcular);
document.getElementById("limpiar").addEventListener("click", reset);


// Calculadora

function sumar() {
    if (typeOperation == "suma") {
        calcular();
    } else {
        //asignando el valor después de llamar a la función calcular, 
        //la función calcular hace la operación con el operador anterior
        calcular();
        typeOperation = "suma";
    }
}

function restar() {
    if (typeOperation == "resta") {
        calcular();
    } else {
        calcular();
        typeOperation = "resta";
    }
}

function multiplicar() {
    if (typeOperation == "multiplicacion") {
        calcular();
    } else {
        calcular();
        typeOperation = "multiplicacion";
    }
}

function dividir() {
    if (typeOperation == "division") {
        calcular();
    } else {
        calcular();
        typeOperation = "division";
    }
}

// Limpia todos los valores
function reset() {
    typeOperation = "";
    acumulate = 0;
    calculate(acumulate)
}

// Devuelve un mensaje de error si el mensaje está vacío

function calcular() {

    if (isNaN(parseInt(document.getElementById("number1").value))) { //Si devuelve NaN, devuelve mensaje de error.
        document.getElementById("resultado").innerText = "ERROR";
        return;
    }
    switch (typeOperation) { // Hace las operaciones en función del tipo de operación marcada
        case "suma":
            acumulate += parseInt(document.getElementById("number1").value);
            break;
        case "resta":
            acumulate -= parseInt(document.getElementById("number1").value);
            break;
        case "multiplicacion":
            acumulate *= parseInt(document.getElementById("number1").value);
            break;
        case "division":
            acumulate /= parseInt(document.getElementById("number1").value);
            break;
        default:
            acumulate = parseInt(document.getElementById("number1").value);
            break;
    }

    calculate(acumulate);
}
// Limpia los valores del cuadro y muestra el resultado debajo de la calculadora
function calculate(acumulate) {
    document.getElementById("number1").value = "";
    document.getElementById("number1").innerText = "";
    document.getElementById("resultado").innerText = acumulate;
}