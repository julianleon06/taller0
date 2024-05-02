// 8. Escribe un programa JavaScript que genere un número aleatorio entre 1 y 10 y le pida al usuario que lo adivine. El programa debe dar pistas al usuario si su suposición es demasiado alta o demasiado baja hasta que logre adivinar el número correcto.

function adivinarNumero(intentos) {
    // Generar un número aleatorio entre 1 y 10
    let numeroAleatorio = (Math.random() * 10 + 1) | 0;
  
    
    let adivinar = parseInt(prompt("Adivina el número entre 1 y 10:"));
  
   
    if (adivinar === numeroAleatorio) /** Estrictamente igual (===): Comprueba si dos valores son iguales y del mismo tipo de dato. Pregunta primero por el valor (si se cumple), en segunda instancia pregunta por el tipo de dato */  
    {
      console.log("¡Felicidades! Adivinaste el número en " + intentos + " intentos.");
    } 
    else if (adivinar < numeroAleatorio) {
      console.log("El número es demasiado bajo. Intenta de nuevo.");
      adivinarNumero(intentos + 1); 
    } 
    else {
      console.log("El número es demasiado alto. Intenta de nuevo.");
      adivinarNumero(intentos + 1); 
    }
  }
  
  adivinarNumero(1);