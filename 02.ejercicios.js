//  ******************** OPERACIONES LOGICOS ********************

// 1. Crea una variable para cada operacion aritmetica

let suma = 5 + 6;
let resta = 8 - 4;
let multipilicacion = 5 * 5;
let division = 30 / 6;
let resto = 7 % 8;
let exponente = 9 ** 5;

console.log(suma);
console.log(resta);
console.log(multipilicacion);
console.log(division);
console.log(resto);
console.log(exponente);

// incrementa 1
suma++;

// decrementa 1
multipilicacion--;

console.log(suma);
console.log(multipilicacion);

// 2. Crea una variable para cada operacion de asignacion, que haga uso de las variables utilizadas para las operaciones aritmeticas

suma += 2; // suma 2
resta -= 3; // resta 3
multipilicacion *= 2; // multiplica 2
division /= 2; // divide 2
resto %= 3; // resto 3
exponente **= 2; // exponente 2

console.log(suma);
console.log(resta);
console.log(multipilicacion);
console.log(division);
console.log(resto);
console.log(exponente);

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparacion

let a = 5;
let b = 10;

/*
console.log(a > b); // mayor a
console.log(a < b); // menor a
console.log(a >= b); // mayor o igual a 
console.log(a <= b); // menor o igual a
console.log(a == b); // igual a
console.log(a == 5); // igualdad por valor
console.log(a == "5"); // igualdad por valor, JS reconoce que es un numero 10
console.log(a === "5"); // Igualdad por identidad (valor y tipo de dato)
console.log(a != 6); // es distinto de
console.log(a !== "5"); // es distinto en valor e identidad
*/
console.log(a < b);
console.log(a == 5);
console.log(a == "5");
console.log(a != 6);
console.log(a !== "8");

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparacion

console.log(a > b);
console.log(a >= b);
console.log(a == b);
console.log(a === "5");
console.log(a !== 5);

// 5. Utiliza el operador logico and

// and && (devuelve verdadero solo si ambas condiciones son verdaderas)
console.log(20 > 10 && 10 > 15); // 20 mayor a 10 y 10 mayor a 15
console.log(20 < 10 && 10 < 15); // 20 menor a 10 y 10 menor a 15
console.log(20 > 10 && 10 < 15); // 20 mayor a 10 y 10 menor a 15
console.log(20 < 10 && 10 > 15 && 40 < 10); // 20 menor a 10 y 10 mayor a 15 y 40 menor a 10

// 6. Utiliza el operador logico or

// or || (devuelve verdadero si al menos una es verdadera)
console.log(20 > 10 || 10 > 15); // 20 mayor a 10 y 10 mayor a 15
console.log(20 < 10 || 10 < 15); // 20 menor a 10 y 10 menor a 15
console.log(20 > 10 || 10 < 15); // 20 mayor a 10 y 10 menor a 15
console.log(20 < 10 || 10 > 15 || 40 < 10); // 20 menor a 10 y 10 mayor a 15 y 40 menor a 10

// 7. Combina ambos operadores logicos

console.log((20 < 10 && 10 > 15) || 40 < 10); // 20 menor 10 y 10 mayor 15 (false) o 40 menor 10 (false)
console.log((20 > 10 || 10 > 15) && 40 > 10); // 20 mayor 10 o 10 mayor 15 (true) y 40 mayor 10 (true)

// 8. Añade alguna negacion

console.log(!true);
console.log(!false);
console.log(!(20 > 10 && 10 > 15)); // false pero en negacion cambia a true
console.log(!(20 > 10 || 10 > 15)); // true pero en negacion cambia a false

// 9. Utiliza el operador tenario

const lloviendo = true;
/*
    ? significa que si el valor es verdadero, se ejecuta lo que viene a continuacion
    : significa que si el valor es falso, se ejecuta lo que viene a continuacion
*/
lloviendo ? console.log("Esta lloviendo") : console.log("No esta lloviendo");

// 10. Combina operadores aritmeticos, de comparacion y logicos

console.log(5 * 10 > 6 * 8 && 100 / 4 < 60);
console.log(7 * 3 < 2 * 8 || 50 / 4 > 21);
