// ******************** Console ********************

// Console es un objeto global incorporado que te da acceso a la consola de depuración del entorno donde se está ejecutando tu código.

// log
console.log("Hola, mundo!"); // Muestra un mensaje en la consola

// error
console.error("Este es un mensaje de error."); // Muestra un mensaje de error en la consola
console.error(
  "Error al conectarse a la base de datos:",
  new Error("Conexión fallida"),
); // Muestra un mensaje de error con un objeto Error

// warn
console.warn("Este es un mensaje de advertencia."); // Muestra un mensaje de advertencia en la consola

// info
console.info("Este es un mensaje informativo."); // Muestra un mensaje informativo en la consola

// table
const personas = [
  // Array de objetos
  { nombre: "Juan", edad: 30 }, // Objeto 1
  { nombre: "María", edad: 25 }, // Objeto 2
  { nombre: "Pedro", edad: 35 }, // Objeto 3
];
console.table(personas); // Muestra un array de objetos en forma de tabla en la consola

// group
console.group("Grupo de mensajes");
console.log("Mensaje 1"); // Muestra un mensaje en la consola
console.log("Mensaje 2"); // Muestra otro mensaje en la consola
console.groupEnd(); // Finaliza el grupo de mensajes

// time
console.time("Tiempo de ejecución"); // Inicia un temporizador con una etiqueta específica
// Código cuyo tiempo de ejecución deseas medir
for (let i = 0; i < 1000000; i++) {
  // Simulación de un bucle que realiza una tarea, como sumar números del 0 al 999999
}
console.timeEnd("Tiempo de ejecución"); // Finaliza el temporizador y muestra el tiempo transcurrido en la consola

console.time("Tiempo de ejecución 2"); // Inicia otro temporizador con una etiqueta diferente
// Código cuyo tiempo de ejecución deseas medir
for (let i = 0; i < 1000000; i++) {
  // Simulación de un bucle que realiza otra tarea, como multiplicar números del 0 al 999999
}
console.timeEnd("Tiempo de ejecución 2"); // Finaliza el temporizador y muestra el tiempo transcurrido en la consola

// assert
const x = 5;
console.assert(x > 10, "x no es mayor que 10"); // Muestra un mensaje de error si la condición es falsa

// count
console.count("Contador"); // Muestra el número de veces que se ha llamado a console.count con la misma etiqueta
console.count("Contador"); // Muestra el número de veces que se ha llamado a console.count con la misma etiqueta
console.countReset("Contador"); // Reinicia el contador con la etiqueta especificada
console.count("Contador"); // Muestra el número de veces que se ha llamado a console.count con la misma etiqueta

// trace
function funcionA() {
  funcionB(); // Llama a la función B
}
function funcionB() {
  console.trace("Seguimiento de la ejecución"); // Muestra un rastreo de la pila de llamadas en la consola
}
funcionA(); // Llama a la función A, que a su vez llama a la función B y muestra el rastreo de la pila de llamadas

// clear
console.clear(); // Limpia la consola, eliminando todos los mensajes anteriores
