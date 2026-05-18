// ******************** FUNCIONES ********************
/* 
Bloque de código reutilizable y diseñado para realizar una tarea específica o calcular un valor. 
Permite agrupar instrucciones, aceptar datos de entrada (parámetros) y devolver un resultado (retorno), 
lo que evita repetir el mismo código a lo largo de tu proyecto

*/
// Funcion simple

function miFunc() {
  // se crea la funcion
  console.log("Esta es mi funcion"); // se crea la instuccion, pero este no imprime nada hasta que se invoque
}

miFunc(); // cuando se invoque la funcion, este va a imprimir la instruccion

function miFunc2() {
  console.log("funcion con un bucle");
}

for (let i = 0; i < 3; i++) {
  // podemos combinar un bucle con una funcion
  miFunc2();
}

// Funcion con parametros

function funcionParametros(nombre) {
  // agregamos el parametro nombre, se pueden agregar mas parametros separados por coma
  console.log(`Hola ${nombre}`);
}

funcionParametros("Ricardo");
funcionParametros("Quilodran");

function suma(a, b) {
  // con 2 parametros
  console.log(a + b);
}
suma(5, 10);

// Funcion anonima, que no tiene nombre

const miFunc3 = function (grupo) {
  // se guarda una funcion (sin nombre) dentro de una constante y con un parametro
  console.log(`Grupo de cumbia: ${grupo}`);
};

miFunc3("Pibes Chorros");

// Arrow Function, funciones flechas, sintaxis simplificada en una sola linea, sin poner function

const miFunc4 = (grupo) => console.log(`Grupo de cumbia: ${grupo}`);

miFunc4("Pala Ancha");

// Retorno de valores

function mult(a, b) {
  return a * b; // el return indica que esta funcion va a devolver un valor, en este caso el resultado de multiplicar a por b
}

let resultado = mult(5, 10); // el resultado de la multiplicacion se guarda en la variable resultado, que luego se imprime
console.log(resultado);

// Funciones anidadas, funciones dentro de funciones

function externa() {
  console.log("Esta es la funcion externa"); // se ejecuta primero la funcion externa
  function interna() {
    console.log("Esta es la funcion interna"); // se ejecuta despues la funcion interna
  }
  interna(); // se invoca la funcion interna dentro de la funcion externa para que se ejecute, si no se invoca, la funcion interna no se ejecuta
}

externa(); // se invoca la funcion externa, que a su vez invoca la funcion interna
// interna(); // si se intenta invocar la funcion interna fuera de la funcion externa, va a dar error, porque la funcion interna solo existe dentro del bloque de la funcion externa

// Funciones de orden superior, que pueden recibir otras funciones como argumentos o devolver funciones como resultado

function saludar(nombre) {
  return `Hola ${nombre}`;
}
function procesarSaludo(nombre, callback) {
  const saludo = saludar(nombre);
  callback(saludo); // se llama a la funcion callback, que es la funcion que se pasa como argumento, y se le pasa el saludo como parametro
}

procesarSaludo("Ricardo", (saludo) => {
  console.log(saludo); // se imprime el saludo que se recibe como parametro en la funcion callback
});

// funcion ForEach, es una funcion para ejecutar bucles asociados a elementos iterables, como arrays, sets o maps.
// Permite recorrer cada elemento de la coleccion y ejecutar una funcion para cada uno de ellos, sin necesidad de usar un bucle tradicional (for, while, do-while)

const miArray = [1, 2, 3, 4];

const miSet = new Set([
  "Ricardo",
  "Quilodran",
  40,
  false,
  "ricardo@quilodran.cl",
]);

miMap = new Map([
  ["nombre", "Ricardo"],
  ["correo", "ricardo@quilodran.cl"],
  ["edad", 40],
]);

miArray.forEach(function (valor) {
  console.log(valor);
});

miArray.forEach((valor) => console.log(valor)); // con arrow function
miSet.forEach((valor) => console.log(valor)); // con forEach se puede recorrer un Set
miMap.forEach((valor, clave) => console.log(`${clave}: ${valor}`)); // con forEach se puede recorrer un Map, el primer parametro es el valor y el segundo es la clave

// ******************** EJERCICIOS ********************

// NOTA: Explora diferenteres sintaxis de funciones para resolver los ejercicios:

// 1. Crea una función que reciba dos numeros y devuelva su suma

// 2. Crea una función que reciba un array de numeros y devuelva el mayor de ellos

// 3. Crea una función que reciba un string y devuelva el numero de vocales que contiene

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayusculas

// 5. Crea una función que reciba un numero y devuelva true si es primo y false si no lo es

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos arrays

// 7. Crea una función que reciba un array de numeros y devuelva la suma de todos los numeros pares

// 8. Crea una función que reciba un array de numeros y devuelva un nuevo array con cada numero elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un numero dado
