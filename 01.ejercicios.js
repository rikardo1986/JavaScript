// ******************** TIPOS DE VARIABLES ********************

// 1. Escribe un comentario en una línea

// Comentario

// 2. Escribe un comentario en varias líneas

/* comentario
varias
lineas */

// 3. Declara variables con valores asociados a todos los tipos de tipo primativos

// String
let nombre = "Ricardo Quilodran";

// Number
let numero = 40;

// Boleanos
let verdadero = true;
let falso = false;

// No definido
let noDefinido = undefined;

// Nulo
let nulo = null;

// Simbolo (Los símbolos siempre tienen valores diferentes, incluso si tienen el mismo nombre)
let miSimbolo = Symbol("unSimbolo");

// BigInt (número entero de gran tamaño)

let granEntero =
  BigInt(
    17566968454522398774456211578955314896555544777788563216566989541232636595545566987455666334747787456167687343,
  );

// 4. Imprime por consola el valor de todas las variables

console.log(nombre);
console.log(numero);
console.log(verdadero);
console.log(falso);
console.log(noDefinido);
console.log(nulo);
console.log(miSimbolo);
console.log(granEntero);

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof nombre);
console.log(typeof numero);
console.log(typeof verdadero);
console.log(typeof falso);
console.log(typeof noDefinido);
console.log(typeof nulo);
console.log(typeof miSimbolo);
console.log(typeof granEntero);

// 6. Modifica los valores de las variables por otros del mismo tipo

nombre = "Constanza Quilodran";
numero = 13;
verdadero = false;
falso = true;
miSimbolo = Symbol("otro Simbolo");
granEntero =
  BigInt(
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
  );

console.log(nombre);
console.log(numero);
console.log(verdadero);
console.log(falso);
console.log(miSimbolo);
console.log(granEntero);

// 7. Modifica los valores de las variables por otros de distinto tipo

nombre = 40;
numero = "Ricardo";
verdadero = null;
falso = undefined;

console.log(nombre);
console.log(numero);
console.log(verdadero);
console.log(falso);

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const nombre2 = "Cony";

const numero2 = 14;

const verdadero2 = true;
const falso2 = false;

const noDefinido2 = undefined;

const nulo2 = null;

const miSimbolo2 = Symbol("Constante");

const granEntero2 =
  BigInt(
    89878523696987442698922224487888231111255333346567865220742897933278378374218217,
  );

// 9. Modifica los valores de las constantes

/* 
nombre2 = "Kitty";
numero2 = 5;
verdadero2 = false;
falso2 = true;
miSimbolo2 = Symbol("No Constante");
granEntero2 = BigInt(717171717171717171717171717171717717171717171771711);

nombre2 = "Kitty";
        ^
TypeError: Assignment to constant variable.
*/

// 10. Comenta las lineas que produzcan algun tipo de error al ejecutarse
