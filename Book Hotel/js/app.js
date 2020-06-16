// Declaración de variables

let typeRoom = document.getElementById("types");
let price = 0;

// Escucha el botón calcular

document.getElementById("calcular").addEventListener("click", calcular);

// Calculadora
function chooseRoom(option) {
    switch (option) {
        case "standard":
            price += 100;
            break;
        case "junior suite":
            price += 120;
            break;
        case "suite":
            price += 150;
            break;
        default:
            price += 100;
            break;
    }
}

function chooseSpa(spa) {
    if (spa == true) {
        price += 20;
        return price;
    }
}

function chooseSize(size) {
    switch (size) {
        case "single":
            price *= 0.75;
            break;
        case "triple":
            price *= 1.25;
            break;
        default:
            break;
    }
}

function chooseParking(parking) {
    if (parking != 0 && parking != "") {
        payParking = parking * 10;
        price += payParking;
    }
    return price;
}

function chooseDays(days) {
    if (days != "" && days != 0) {
        price *= days;
        finalPrice();
    } else {
        document.getElementById("resultado").innerText = "Introduzca los días que va a hospedarse";
    }
}

function finalPrice() {
    return document.getElementById("resultado").innerText = "El precio es: " + price + " euros";
}

function calcular() {

    // Recoge los valores introducidos por el usuario
    let option = typeRoom.options[typeRoom.selectedIndex].value;
    let spa = document.getElementById("spa").checked;
    let size = document.getElementById("sizes").value;
    let days = document.getElementById("days").value;
    let parking = document.getElementById("parking").value;

    // Llama a cada una de las operaciones en función de las opciones elegidas
    chooseRoom(option); // Elige el tipo de habitación
    chooseSpa(spa); // Aumenta el precio si el spa está seleccionado
    chooseSize(size); // Varía el precio en función del tipo de habitación
    chooseParking(parking); // Aumenta el precio en función de los días de parking seleccionados
    chooseDays(days); // adapta el precio al número de días seleccionado

    price = 0; // reinicia el valor de la variable price para que no acumule el precio de nuevo
}