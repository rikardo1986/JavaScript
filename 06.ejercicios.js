// ******************** BUCLES ********************
/* permiten crear ciclos de ejecucion de un codigo, hay que asegurarse que el codigo en algun momento debe dar un FALSE, de lo contrario se vuelve infinito

FOR: Sabes cuántas veces va a pasar, Ejemplo analógico: "Da exactamente 5 vueltas a la pista".
*/

for (let i = 0; i < 5; i++) {
  //entre parentesis va la inicialización, condición o actualización de lo que queremos
  console.log(`FOR ${i}`); // Código que se ejecuta en cada repetición
}

const numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++) {
  console.log(`Elemento ${numeros[i]}`);
}

/*
WHILE: Depende de una condición externa. Revisa primero, actúa después, Ejemplo analógico: "Sigue corriendo mientras no empiece a llover".
*/

let i = 0; // la variable se crea afuera
while (i < 5) {
  console.log(`WHILE ${i}`);
  i++; // el incremento ocurre dentro del bloque.
}

/*
DO WHILE: siempre ejecuta el código al menos una sola vez, antes de revisar la condición. Actúa primero, revisa después
*/
i = 6;
do {
  console.log(`DO WHILE ${i}`);
  i++;
} while (i < 5);

/*
FOR OF:  es una versión moderna y simplificada del for tradicional. Va directo al grano, recorre los elementos de una Array, Set o Map
de forma directa, sin necesidad de usar contadores (i++) ni condiciones.
*/

miArray = [1, 2, 3, 4, 5];

miSet = new Set(["Ricardo", "Quilodran", 40, false, "ricardo@quilodran.cl"]);

miMap = new Map([
  ["nombre", "Ricardo"],
  ["correo", "ricardo@quilodran.cl"],
  ["edad", 40],
]);

for (let valor of miArray) {
  console.log(valor);
}

for (let valor of miSet) {
  console.log(valor);
}

for (let valor of miMap) {
  console.log(valor);
}

// BREAK y CONTINUE

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  } // indica que se salte el 5 y continue el bucle
  else if (i == 8) {
    break; // indica que si sale el 8, pare el bucle
  }
  console.log(`JS ${i}`);
}

//******************** EJERCICIOS ********************

// NOTA: Explora diferenteres tipos de bucles como for, while, do-while y for...of para resolver los siguientes ejercicios:

// 1. Crea un bucle que imprima los numeros del 1 al 20

for (let number = 1; number < 21; number++) {
  console.log(`número ${number}`);
}

// 2. Crea un bucle que sume todos los numeros del 1 al 100 e imprima el resultado

// 3. Crea un bucle que im prima los numeros pares del 1 al 50

// 4. Dado un array de nombres, crea un bucle que imprima cada nombre en la consola

// 5. Escribe un bucle que cuente el numero de vocales en una cadena de texto

// 6. Dado un array de numeros, usa un bucle para multipilicar todos los numeros y mostrar el producto

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

// 8. Usa un bucle para invertir una cadena de texto

// 9. Usa un bucle que imprima los primeros 10 numeros de la serie de Fibonacci

// 10. Dado un array de numeros, usa un bucle para crear un nuevo array que contenga solo los numeros mayores a 10
