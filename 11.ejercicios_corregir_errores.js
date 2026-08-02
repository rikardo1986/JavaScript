// ******************** Manejo de errores ********************

// Exepciones: son errores que ocurren en tiempo de ejecución y que pueden ser manejados por el programa. En JavaScript,
// las excepciones se manejan mediante el uso de bloques try...catch.

let MiObjeto;
// console.log(MiObjeto.correo); // Esto generará un error porque MiObjeto es undefined

// Captura de errores con try...catch

try {
  console.log(MiObjeto.correo); // Esto generará un error porque MiObjeto es undefined
  console.log(
    "Este mensaje no se mostrará porque el error detiene la ejecución del bloque try.",
  );
} catch (error) {
  // El bloque catch captura el error y permite manejarlo
  console.log("Se ha producido un error:", error.message);

  /* Finally: es un bloque opcional que se ejecuta después del bloque try y catch, independientemente de si se produjo un error o no.
Se utiliza para realizar tareas de limpieza o liberar recursos.
*/
} finally {
  console.log(
    "Este bloque finally se ejecuta siempre, haya habido un error o no.",
  );
}

// Lanzamiento de errores con throw
try {
  throw new Error("Este es un error lanzado manualmente.");
} catch (error) {
  console.log("Se ha producido un error:", error.message);
}

// Caprtura de errores personalizados

class MiErrorPersonalizado extends Error {
  // Heredamos de la clase Error para crear un error personalizado
  constructor(mensaje) {
    // El constructor recibe un mensaje como parámetro
    super(mensaje); // Llamamos al constructor de la clase Error para inicializar el mensaje del error
    this.name = "MiErrorPersonalizado"; // Establecemos el nombre del error personalizado
  }
}
console.log("Antes de lanzar el error personalizado"); // Mensaje antes de lanzar el error
try {
  // Bloque try para capturar el error personalizado
  throw new MiErrorPersonalizado("Este es un error personalizado."); // Lanzamos un error personalizado
} catch (error) {
  // Bloque catch para capturar el error personalizado
  console.log("Se ha producido un error:", error.name, "-", error.message); // Mostramos el nombre y el mensaje del error personalizado
}
