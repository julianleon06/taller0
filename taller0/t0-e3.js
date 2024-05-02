// 3. Escribe una función que tome un string como entrada y devuelva la misma cadena con las letras en orden inverso ***(sin usar funciones de JavaScript)***.


function invertir(cadena) {
    let cadenaInvertida = '';
    for (let i = cadena.length - 1; i >= 0; i--) {
      cadenaInvertida += cadena[i];
    }
    return cadenaInvertida;
  }
  
  let cadena = "noel";
  let cadenaInvertida = invertir(cadena);
  console.log(cadenaInvertida); 