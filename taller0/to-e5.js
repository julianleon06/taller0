// 5. Escribe un programa que realice las operaciones básicas de suma, resta, multiplicación y división. El programa debe solicitar al usuario dos números y la operación que desea realizar.

function suma(num1, num2) {
    return num1 + num2;  //La sentencia return finaliza la ejecución de la función y especifica un valor para ser devuelto a quien llama a la función.
  }
  
  function resta(num1, num2) {
    return num1 - num2;  //La sentencia return finaliza la ejecución de la función y especifica un valor para ser devuelto a quien llama a la función.
  }
  
  function multiplicacion(num1, num2) {
    return num1 * num2;  //La sentencia return finaliza la ejecución de la función y especifica un valor para ser devuelto a quien llama a la función.
  }
  
  function division(num1, num2) {
    if (num2 === 0)  /** Estrictamente igual (===): Comprueba si dos valores son iguales y del mismo tipo de dato. Pregunta primero por el valor (si se cumple), en segunda instancia pregunta por el tipo de dato */  
    {
      return "Error: division por cero";  //La sentencia return finaliza la ejecución de la función y especifica un valor para ser devuelto a quien llama a la función.
    } 
    else {
      return num1 / num2;  //La sentencia return finaliza la ejecución de la función y especifica un valor para ser devuelto a quien llama a la función.
    }
  }
  
  let num1 = parseFloat(prompt("colocar primer numero:"));  //La función parseFloat() analiza un argumento (si es necesario, lo convierte en una cadena) y devuelve un número de coma flotante.
  let num2 = parseFloat(prompt("colocar segundo numero:"));  //La función parseFloat() analiza un argumento (si es necesario, lo convierte en una cadena) y devuelve un número de coma flotante.
  
  let operacion = prompt("que operacion desea realizar (+, -, *, /):");
  
  let resultado;
  
  switch (operacion)   /** Switch: Permite evaluar una expresión y ejecutar diferentes bloques dependiendo del valor de dicha expresión como una casuistica o conjunto de casos que pueden ocurrir y que deben ser evaluados, incluido una casuistica por defecto */
  {
    case '+':
      resultado = suma(num1, num2);
      break;
    case '-':
      resultado = resta(num1, num2);
      break;
    case '*':
      resultado = multiplicacion(num1, num2);
      break;
    case '/':
      resultado = division(num1, num2);
      break;
    default:
      resultado = "Operación no válida";
  }
  
  console.log("El resultado de la operación es: " + resultado);