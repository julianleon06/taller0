// 4. Escribe un programa que calcule el factorial de un número.

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1)  /** Estrictamente igual (===): Comprueba si dos valores son iguales y del mismo tipo de dato. Pregunta primero por el valor (si se cumple), en segunda instancia pregunta por el tipo de dato */  
     {
      return 1;
    } else {
      let factorial = 1;
      for (let i = 2; i <= numero; i++) {
        factorial *= i;
      }
      return factorial;
    }
  }
  
  var numero = 3;
  var factorial = calcularFactorial(numero);
  console.log("El factorial de " + numero + " es: " + factorial); 
