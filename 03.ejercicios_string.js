// ******************** STRING ********************

// 1. Concatena dos cadenas de texto

let nombre = "Ricardo Cristobal";
let edad = 40;

console.log("Hola mi nombre es " + nombre + " y mi edad es " + edad);

// 2. Muestra la longitud de una cadena de texto

console.log(nombre.length);

// 3. Muestra el primer y ultimo caracter de un string

console.log(nombre[0]);
console.log(nombre[6]);

// 4. Convierte mayusculas y minusculas de un string

console.log(nombre.toUpperCase()); // toUpperCase y toLowerCase son funciones, por eso hay que agregar ()
console.log(nombre.toLowerCase());

// 5. Crea una cadena de texto en varias lineas

let mensaje = `Hola 
este es un texto 
de varias lineas
en JavaScript`;

console.log(mensaje);

// 6. Interpola el valor de una variable en un string

console.log(`Hola ${nombre}, tu edad es ${edad}`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(nombre.replace("Cristobal", "Quilodran"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(nombre.includes("Cony"));

// 9. Comprueba si dos string son iguales

if (nombre === edad) {
  console.log("Son iguales");
} else {
  console.log("Son diferentes");
}

// 10. Comprueba si dos string tienen la misma longitud

if (nombre.length === edad.length) {
  console.log("misma longitud");
} else {
  console.log("diferente longitud");
}
