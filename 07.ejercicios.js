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

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios:

// 1. Crea una función que reciba dos numeros y devuelva su suma

function suma(a, b) {
  console.log(a + b);
}
suma(10, 20);

// 2. Crea una función que reciba un array de numeros y devuelva el mayor de ellos

let numeros = [3, 20, 15, 4, 80, 69];
function mayor(array) {
  // se recibe un array como parametro
  let max = array[0]; // se asume que el primer elemento del array es el mayor, luego se compara con los demas elementos del array
  for (let i = 1; i < array.length; i++) {
    // se recorre el array desde el segundo elemento hasta el final
    if (array[i] > max) {
      // si el elemento actual es mayor que el maximo, se actualiza el maximo
      max = array[i]; // se actualiza el maximo con el nuevo valor en la variable max
    }
  }
  console.log(max); // se imprime el valor del maximo, que es el mayor numero del array
}
mayor(numeros); // se llama a la funcion mayor con el array de numeros como argumento, y se imprime el resultado

// 3. Crea una función que reciba un string y devuelva el numero de vocales que contiene

let texto = "Pala Ancha - Cumbia Sin Fronteras";
function contarVocales(cadena) {
  let vocales = "aeiouAEIOU"; // se define una cadena con todas las vocales, tanto mayusculas como minusculas
  let contador = 0; // se inicializa un contador en 0
  for (let i = 0; i < cadena.length; i++) {
    // se recorre la cadena de texto caracter por caracter
    if (vocales.includes(cadena[i])) {
      // si el caracter actual es una vocal, se incrementa el contador
      contador++;
    }
  }
  console.log(contador); // se imprime el valor del contador, que es el numero de vocales que contiene la cadena
}
contarVocales(texto); // se llama a la funcion contarVocales con el texto como argumento, y se imprime el resultado

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayusculas

let palabras = ["hola", "mundo", "cumbia", "sin", "fronteras"];
function mayusculas(array) {
  let resultado = []; // se crea un nuevo array vacio para guardar las strings en mayusculas
  for (let i = 0; i < array.length; i++) {
    // se recorre el array de strings
    resultado.push(array[i].toUpperCase()); // se convierte cada string a mayusculas y se agrega al array resultado
  }
  console.log(resultado); // se imprime el array resultado, que contiene las strings en mayusculas
}
mayusculas(palabras); // se llama a la funcion mayusculas con el array de palabras como argumento, y se imprime el resultado

// 5. Crea una función que reciba un numero y devuelva true si es primo y false si no lo es

function esPrimo(num) {
  if (num <= 1) {
    // los numeros menores o iguales a 1, la función se detiene inmediatamente aquí y devuelve false
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // Math.sqrt() es una función nativa de JS, es para calcular la raíz cuadrada de un número
    // se verifica si el numero es divisible por algun otro numero
    if (num % i === 0) {
      // divide el número entre i. Si el residuo es 0, significa que la división es exacta, por lo tanto no es primo y la función se cierra devolviendo false
      return false; // se devuelve false, indicando que el numero no es primo
    }
  }
  return true; // si el numero no es divisible por ningun otro numero, entonces es primo, se devuelve true
}
console.log(esPrimo(7)); // se llama a la funcion esPrimo con el numero 7 como argumento, y se imprime el resultado (true)
console.log(esPrimo(10)); // se llama a la funcion esPrimo con el numero 10 como argumento, y se imprime el resultado (false)

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos arrays

function comunes(array1, array2) {
  let resultado = []; // se crea un nuevo array vacio para guardar los elementos comunes
  for (let i = 0; i < array1.length; i++) {
    // se recorre el primer array
    if (array2.includes(array1[i])) {
      // se verifica si el elemento actual del primer array esta incluido en el segundo array, si es asi, se agrega al array resultado
      resultado.push(array1[i]); // se agrega el elemento comun al array resultado
    }
  }
  console.log(resultado); // se imprime el array resultado, que contiene los elementos comunes entre ambos arrays
}
let array1 = [1, 2, 3, 4, 5];
let array2 = [4, 5, 6, 7, 8];
comunes(array1, array2); // se llama a la funcion comunes con los dos arrays como argumentos, y se imprime el resultado ([4, 5])

// 7. Crea una función que reciba un array de numeros y devuelva la suma de todos los numeros pares

function sumaPares(array) {
  let suma = 0; // se inicializa una variable suma en 0
  for (let i = 0; i < array.length; i++) {
    // se recorre el array de numeros
    if (array[i] % 2 === 0) {
      // se verifica si el numero actual es par, si es asi, se suma a la variable suma
      suma += array[i]; // se suma el numero par a la variable suma
    }
  }
  console.log(suma); // se imprime el valor de la variable suma, que es la suma de todos los numeros pares del array
}
let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
sumaPares(numeros2); // se llama a la funcion sumaPares con el array de numeros como argumento, y se imprime el resultado (30)

// 8. Crea una función que reciba un array de numeros y devuelva un nuevo array con cada numero elevado al cuadrado

function cuadrados(array) {
  let resultado = []; // se crea un nuevo array vacio para guardar los numeros elevados al cuadrado
  for (let i = 0; i < array.length; i++) {
    // se recorre el array de numeros
    resultado.push(array[i] ** 2); // se eleva cada numero al cuadrado y se agrega al array resultado
  }
  console.log(resultado); // se imprime el array resultado, que contiene los numeros elevados al cuadrado
}
let numeros3 = [1, 2, 3, 4, 5];
cuadrados(numeros3); // se llama a la funcion cuadrados con el array de numeros como argumento, y se imprime el resultado ([1, 4, 9, 16, 25])

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function invertirPalabras(cadena) {
  let palabras = cadena.split(" "); // se divide la cadena de texto en un array de palabras, usando el espacio como separador
  let palabrasInvertidas = palabras.reverse(); // se invierte el orden de las palabras en el array
  let resultado = palabrasInvertidas.join(" "); // se une el array de palabras invertidas en una nueva cadena de texto, usando el espacio como separador
  console.log(resultado); // se imprime la cadena de texto con las palabras en orden inverso
}
let texto2 = "Pala Ancha - Cumbia Sin Fronteras";
invertirPalabras(texto2); // se llama a la funcion invertirPalabras con el texto como argumento, y se imprime el resultado ("Fronteras Sin Cumbia - Ancha Pala")

// 10. Crea una función que calcule el factorial de un numero dado

function factorial(num) {
  if (num < 0) {
    console.log("El factorial no esta definido para numeros negativos");
    return; // se detiene la ejecucion de la funcion si el numero es negativo, ya que el factorial no esta definido para numeros negativos
  } else if (num === 0 || num === 1) {
    // el factorial de 0 y 1 es 1, se verifica si el numero es 0 o 1
    console.log(1); // el factorial de 0 y 1 es 1, se imprime el resultado
    return; // se detiene la ejecucion de la funcion, ya que el resultado ya se ha impreso
  } else {
    // para numeros mayores a 1, se calcula el factorial usando un bucle
    let resultado = 1; // se inicializa una variable resultado en 1, para almacenar el resultado del factorial
    for (let i = 2; i <= num; i++) {
      // se recorre desde 2 hasta el numero dado, multiplicando el resultado por cada numero en el camino
      resultado *= i; // se multiplica el resultado por el numero actual, acumulando el producto
    }
    console.log(resultado); // se imprime el resultado del factorial
  }
}
factorial(5); // se llama a la funcion factorial con el numero 5 como argumento, y se imprime el resultado (120)
