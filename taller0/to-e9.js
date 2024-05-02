// 9. Escribe un programa que genere una lista aleatoria de numeros y elimine todos los pares.

function numerosAelatorios(longitud) {
    let lista = [];
    
    for (let i = 0; i < longitud; i++) {
      lista.push((Math.random() * 100 + 1) | 0); // Redondear hacia abajo con | 0
    }
    return lista;
  }
  
  function sinPares(lista) {
   
    return lista.filter(function(numero)  //El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.     
    {
      return numero % 2 !== 0;  //!=       | Desigualdad && La sentencia return finaliza la ejecución de la función y especifica un valor para ser devuelto a quien llama a la función. 
    });
  }
  
  let listaAleatoria = numerosAelatorios(10); 
  
  console.log("Lista con pares");
  console.log(listaAleatoria);
  

  let listaSinPares = sinPares(listaAleatoria);
  
  console.log("Lista sin pares");
  console.log(listaSinPares);