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

let suma = 0; // Creamos una variable acumuladora que empieza en 0. Aquí guardaremos el resultado.
for (let i = 1; i <= 100; i++) {
  //El contador empieza en 1; El ciclo continuará repitiéndose mientras i sea menor o igual a 100;
  suma += i; // En cada vuelta, le sumamos el valor actual de i a nuestra variable suma (es lo mismo que escribir suma = suma + i).
}
console.log(`El resultado de la suma es: ${suma}`);

// 3. Crea un bucle que imprima los numeros pares del 1 al 50

for (let i = 2; i <= 50; i += 2) {
  console.log(`numeros pares: ${i}`);
}

// 4. Dado un array de nombres, crea un bucle que imprima cada nombre en la consola

const nombres = ["Ricardo", "María", "Juan", "Ana", "Pedro"];

for (let i = 0; i < nombres.length; i++) {
  console.log(`Nombre: ${nombres[i]}`);
}

// 5. Escribe un bucle que cuente el numero de vocales en una cadena de texto

const texto = "Hola, ¿como estas?";
let contadorVocales = 0;
for (let o = 0; o < texto.length; o++) {
  //Revisa la frase letra por letra, desde la primera posición (0) hasta el final de la palabra (texto.length).
  const letra = texto[o].toLowerCase(); //para que no importe si la vocal es mayúscula o minúscula
  if (
    // condición que verifica si la letra actual es una vocal. Si es así, incrementa el contador de vocales en 1.
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    contadorVocales++; // Incrementa el contador de vocales en 1 cada vez que encuentra una vocal
    // Si la respuesta es no (es un espacio, un signo o una consonante), no hace nada y pasa a la siguiente letra.
  }
}
console.log(`El número de vocales en el texto es: ${contadorVocales}`);

// 6. Dado un array de numeros, usa un bucle para multipilicar todos los numeros y mostrar el producto

let producto = 1; // Creamos una variable acumuladora que empieza en 1. Aquí guardaremos el resultado.
const numerosArray = [2, 3, 4];

for (let i = 0; i < numerosArray.length; i++) {
  //Da vueltas para revisar los números de la lista uno por uno, desde la posición 0 hasta el final
  producto *= numerosArray[i]; //En cada vuelta, multiplica el valor actual de producto por el número de la lista (numerosArray[i]) y guarda el nuevo resultado ahí mismo.
}
/* Vuelta 1: producto vale 1. Se multiplica por 2. Ahora producto es 2.
Vuelta 2: producto vale 2. Se multiplica por 3. Ahora producto es 6.
Vuelta 3: producto vale 6. Se multiplica por 4. Ahora producto es 24.
*/
console.log(`El producto de los números es: ${producto}`);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 8. Usa un bucle para invertir una cadena de texto

const cadena = "Java Script es genial";
let cadenaInvertida = ""; // Creamos una variable vacía donde iremos guardando la cadena al revés.
for (let i = cadena.length - 1; i >= 0; i--) {
  //Empezamos a revisar la cadena desde el último carácter (cadena.length - 1) hasta el primero (0), y vamos hacia atrás (i--).
  cadenaInvertida += cadena[i]; //En cada vuelta, le agregamos a cadenaInvertida el carácter actual de la cadena original (cadena[i]).
}
console.log(`La cadena invertida es: ${cadenaInvertida}`);

// 9. Usa un bucle que imprima los primeros 10 numeros de la serie de Fibonacci

let a = 0,
  b = 1; // Crea dos variables: a (que vale 0) y b (que vale 1). Estos son los dos primeros números de la serie.
console.log(`Serie de Fibonacci: ${a}, ${b}`); //Imprime de inmediato esos dos números en la consola
for (let i = 2; i < 10; i++) {
  //Está programado para dar 8 vueltas (empieza en i = 2 y se detiene antes de llegar a 10). Junto con los dos números iniciales, completará un total de 10 números.
  const siguiente = a + b; // Calculamos el siguiente número sumando los dos anteriores
  console.log(siguiente); // Imprimimos el siguiente número
  a = b; // Actualizamos a para que ahora sea el número anterior
  b = siguiente; // Actualizamos b para que ahora sea el número actual
}

// 10. Dado un array de numeros, usa un bucle para crear un nuevo array que contenga solo los numeros mayores a 10

const numerosArray2 = [5, 12, 8, 20, 3];
const numerosMayoresA10 = []; // Creamos un nuevo array vacío donde guardaremos los números mayores a 10.
for (let i = 0; i < numerosArray2.length; i++) {
  //Revisamos cada número del array original uno por uno, desde la posición 0 hasta el final.
  if (numerosArray2[i] > 10) {
    //Si el número actual es mayor a 10, lo agregamos al nuevo array usando push.
    numerosMayoresA10.push(numerosArray2[i]);
  } //Si el número no es mayor a 10, no hacemos nada y pasamos al siguiente número.
}
console.log(`Números mayores a 10: ${numerosMayoresA10}`);
