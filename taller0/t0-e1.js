// 1. Escribe un programa que tome dos números como variables y muestre cuál es el mayor de los dos.

function Mayor( numero1, numero2 ) {
    if ( numero1 > numero2 ) {
        console.log ( numero1 + " es mayor que " + numero2 );
    } 
    else if ( numero2 > numero1 ) {
        console.log ( numero2 + " es mayor que " + numero1 );
    } 
}
let a = 50;
let b = 20;
Mayor(a, b);