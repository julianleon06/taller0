// 7. Escribe un programa que tome un string como entrada y cuente el número de vocales que contiene.

// otra forma con el includes pero es tema no viso
// preguntar

// function contarVocales(cadena) {
//     // Convertir la cadena a minúsculas para simplificar la comparación
//     cadena = cadena.toLowerCase();
  
//     // Convertir la cadena en un array de caracteres
//     var caracteres = cadena.split('');
  
//     // Filtrar solo las vocales
//     var vocales = caracteres.filter(function(caracter) {
//       return 'aeiou'.includes(caracter);
//     });
  
//     // Devolver la longitud del array de vocales
//     return vocales.length;
//   }
  
//   // Solicitar al usuario que introduzca una cadena
//   var cadena = prompt("Introduce una cadena para contar el número de vocales:");
  
//   // Llamar a la función contarVocales y mostrar el resultado
//   var numeroVocales = contarVocales(cadena);
//   console.log("El número de vocales en la cadena es: " + numeroVocales);




function contarVocales(cadena) {
    
    let contadorVocales = 0;
  
    
    let vocales = 'aeiouAEIOU';
  
    
    for (let i = 0; i < cadena.length; i++) {
      
      let esVocal = false;
      for (let j = 0; j < vocales.length; j++) {
        if (cadena [ i ] === vocales [ j ])  /** Estrictamente igual (===): Comprueba si dos valores son iguales y del mismo tipo de dato. Pregunta primero por el valor (si se cumple), en segunda instancia pregunta por el tipo de dato */  
        {  
          esVocal = true;
          break;  //Detener un bucle. Para detener la ejecución de un bucle debemos hacer uso de la palabra reservada 'break', esto detendrá la ejecución del mismo, interrumpiendolo por completo.
        }
      }
      if (esVocal) {
        contadorVocales++;
      }
    }
  
    return contadorVocales;   //La sentencia return finaliza la ejecución de la función y especifica un valor para ser devuelto a quien llama a la función. 
  }
  
  
  let cadena = prompt("coloca una palabra");
  
  
  let cantidadVocales = contarVocales(cadena);
  console.log("la cantidad de vocales en la palabra es: " + cantidadVocales);