// 6. Escribe un programa que tome como entrada tus nombres y apellidos completos y cuente cuantos caracteres tiene, sin tener en cuenta los espacios.


let nombreCompleto = prompt("Introducir nombres y apellidos completos");

let sinEspacios = 0;


for (let i = 0; i < nombreCompleto.length; i++) {
  
  if (nombreCompleto[i] !== ' ') {
    sinEspacios++;
  }
}

console.log("La cantidad de caracteres sin contar los espacios es: " + sinEspacios);