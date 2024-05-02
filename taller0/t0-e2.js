// 2. Escribe un programa que genere la tabla de multiplicar de un número dado.


function tabla(numero) {
    console.log("tabla de multiplicar del " + numero );
    for (let i = 0; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}

let a = 5;
tabla(a);