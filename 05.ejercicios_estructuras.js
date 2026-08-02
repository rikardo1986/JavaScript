// ******************** ESTRUCTURAS ********************
/* permiten almacenar un conjunto de datos

ARRAY: es una lista ordenada donde el orden importa y puedes repetir elementos.
Ejemplo: Una lista de compras donde anotas "Manzanas, Pan, Leche, Manzanas".
Cada cosa tiene una posición (el primer producto es el 0, el segundo el 1, etc.).
Lo usas cuando: Necesitas mantener un orden específico o si tener elementos repetidos no es un problema.
*/
// Crear una lista de frutas
let frutas = ["Manzana", "Pera", "Manzana"];

// Puedes agregar más
frutas.push("Plátano");

// Se accede por posición (empezando en 0)
console.log(frutas[0]); // "Manzana"
console.log(frutas.length); // 4 (mantiene los duplicados)

/* 
SET: es un saco donde metes cosas, pero nada se puede repetir.
Ejemplo: Una colección de monedas de distintos países. Si ya tienes la de México y alguien te da otra igual, sigues teniendo solo una moneda de México en tu colección.
No hay posiciones (índices), lo que importa es si el objeto está o no está ahí.
Lo usas cuando: Quieres asegurarte de que no haya duplicados (por ejemplo, una lista de IDs de usuarios únicos).
*/

// Crear un Set con valores repetidos
let invitados = new Set(["Ana", "Luis", "Ana"]);

// Agregar uno nuevo
invitados.add("Pedro");
invitados.add("Luis"); // No hará nada porque Luis ya existe

// Comprobar si alguien está
console.log(invitados.has("Ana")); // true
console.log(invitados.size); // 3 (Ana, Luis y Pedro)

/* 
MAP: es una lista de parejas donde conectas una "etiqueta" con un "contenido".
Ejemplo: Un diccionario o una agenda telefónica. Buscas el nombre "Juan" (la clave) para encontrar su número "555-123" (el valor).
A diferencia de los objetos normales de JS, aquí la "etiqueta" puede ser cualquier cosa (un número, un texto o hasta un objeto).
Lo usas cuando: Necesitas relacionar dos datos distintos y quieres buscarlos rápidamente por su nombre o clave.
*/

// Crear un mapa de productos y sus precios
let carrito = new Map();

// Guardar datos (Clave, Valor)
carrito.set("Pan", 1500);
carrito.set("Leche", 2000);

// Buscar el valor usando la clave
console.log(carrito.get("Pan")); // 1500

// Borrar un elemento
carrito.delete("Leche");
console.log(carrito.size); // 1

//******************** EJERCICIOS ********************

// 1. Crea un array que almacene cinco animales

let animales = ["Perro", "Gato", "Condor", "Tiburon", "Serpiente"];

console.log(animales);

// 2. Añade dos mas, uno al principio y otro al finalizar

animales.unshift("Aguila"); // principio
animales.push("Toro"); // final

console.log(animales);

// 3. Elimina el que se encuentra en la tercera posicion

animales.splice(2, 1); // tercera posicion, elementos a eliminar

console.log(animales);

// 4. Crea un set que almacene cinco libros

let libros = new Set([
  "El Hobbit",
  "El Señor De Los Anillos",
  "Habitos Atomicos",
  "Papelucho",
  "El Principito",
]);

console.log(libros);

// 5. Añade dos mas, uno de ellos repetido

libros.add("Coraline").add("Papelucho");
console.log(libros);

// 6. Elimina uno concreto a tu eleccion

libros.delete("El Principito");
console.log(libros);

// 7. Crea un mapa que asocie el numero del mes a su nombre

let meses = new Map();

meses.set("Enero", 1);
meses.set("Febrero", 2);
meses.set("Marzo", 3);
meses.set("Abril", 4);
meses.set("Mayo", 5);
meses.set("Junio", 6);
meses.set("Julio", 7);
meses.set("Agosto", 8);
meses.set("Septiembre", 9);
meses.set("Octubre", 10);
meses.set("Noviembre", 11);
meses.set("Diciembre", 12);

console.log(meses);

// 8. Comprueba si el mes numero 5 existe en el map e imprime su valor

console.log(meses.get("Mayo"));

// 9. Añade al MAP una clave con un array como que almacene los meses de verano

meses.set("verano", ["Diciembre", "Enero", "Febrero"]);

console.log(meses.get("verano"));

// 10. Crea un Array, transformalo en un Set y almacenalo en un Map

const miArray = ["Perro", "Gato", "Perro", "Pájaro"];

const miSet = new Set(miArray);

const miMap = new Map();
miMap.set("mascotas_unicas", miSet);

console.log("Array original:", miArray);
console.log("Set (únicos):", miSet);
console.log("Valor en el Map:", miMap.get("mascotas_unicas"));
