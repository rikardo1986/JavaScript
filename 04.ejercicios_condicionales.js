// ******************** CONDICIONALES ********************

/* 
if, else if, else
si, o si, sino

if (condicion) {
    bloque de codigo (si se cumple condicion)
}
    else { bloque de codigo (si no se cumple la condicion)
}

************************
operador ternario: 
? = if
: = else
const mensaje = edad == 40 ? "La edad es 40" : "La edad NO es 40"
console.log(mensaje)

************************
operador switch: es una alternativa a if y else mas corto

let dia = 2;
let nombreDia; // se crea una variable sin valor ya que el valor se lo da el CASE

switch (
  dia // en CASE debe ir la condicion
) {
  case 0:
    nombreDia = "Lunes";
    break; // para finalizar el case en caso de cumplirse la condicion
  case 1:
    nombreDia = "Martes";
    break;
  case 2:
    nombreDia = "Miercoles";
    break;
  case 3:
    nombreDia = "Jueves";
    break;
  case 4:
    nombreDia = "Viernes";
    break;
  default: // cuando no se cumpla ninguna condicion
    nombreDia = "Número de día incorrecto";
}

console.log(nombreDia);
*/

// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = "Cony";

if (nombre == "Ricardo") {
  console.log("El nombre es Ricardo");
} else {
  console.log("El nombre es otro");
}

// 2. Imprime por consola un mensaje si el usuario y contraseña coindice con uno establecido

let user = "rquilodran";
let pass = 1234;

if (user == "rquilodran" && pass === 123) {
  console.log("el usuario y contraseña esta correcta");
} else {
  console.log("el usuario y contraseña es incorrecta");
}

// 3. Verifica si un numero es positivo, negativo o cero e imprime un mensaje

let numero = -50;

if (numero > 0) {
  console.log(`El numero ${numero} es positivo`);
} else if (numero < 0) {
  console.log(`El numero ${numero} es negativo`);
} else {
  console.log("El numero es cero");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuantos años le faltan

let edad1 = 15;
let falta = 18 - edad1;

if (edad1 >= 18) {
  console.log("Si puede votar");
} else {
  console.log(`No puedes votar, te faltan ${falta} años`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad

let edad2 = 10;
const mensaje = edad2 >= 18 ? "Eres un adulto" : "Eres menor de edad";
console.log(mensaje);

// 6. Muestra en que estacion del año nos encontramos dependiendo del valor de una variable "mes"

let mes = "agosto";

if (mes == "diciembre" || mes == "enero" || mes == "febrero") {
  console.log("Estamos en verano");
} else if (mes == "marzo" || mes == "abril" || mes == "mayo") {
  console.log("Estamos en otoño");
} else if (mes == "junio" || mes == "julio" || mes == "agosto") {
  console.log("Estamos en invierno");
} else if (mes == "septiembre" || mes == "octubre" || mes == "noviembre") {
  console.log("Estamos en primavera");
}

// 7. Muestra el numero de días que tiene un mes dependiendo de la variable del ejercicio anterior

let numeroMes = 15;

if (
  numeroMes == 1 ||
  numeroMes == 3 ||
  numeroMes == 5 ||
  numeroMes == 7 ||
  numeroMes == 8 ||
  numeroMes == 10 ||
  numeroMes == 12
) {
  console.log("El mes tiene 31 días");
} else if (
  numeroMes == 4 ||
  numeroMes == 6 ||
  numeroMes == 9 ||
  numeroMes == 11
) {
  console.log("El mes tiene 30 días");
} else if (numeroMes == 2) {
  console.log("El mes tiene 28 días");
} else {
  console.log("numero de mes incorrecto");
}

// 8. Usa switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "ruso";
let saludo;

switch (idioma) {
  case "ingles":
    saludo = "HELLO";
    break;
  case "frances":
    saludo = "BONJOUR";
    break;
  case "portugues":
    saludo = "OLA";
    break;
  case "español":
    saludo = "HOLA";
    break;
  case "aleman":
    saludo = "HALLO";
    break;
  default:
    saludo = "idioma no se reconoce";
}
console.log(saludo);

// 9. Usa switch para hacer el ejercicio 6

let mes2 = "mayo";
let estacion;

switch (mes2) {
  case "diciembre":
  case "enero":
  case "febrero":
    estacion = "Estamos en verano";
    break;
  case "marzo":
  case "abril":
  case "mayo":
    estacion = "Estamos en otoño";
    break;
  case "junio":
  case "julio":
  case "agosto":
    estacion = "Estamos en invierno";
    break;
  case "septiembre":
  case "octubre":
  case "noviembre":
    estacion = "Estamos en primavera";
    break;
  default:
    estacion = "mes incorrecto";
}
console.log(estacion);

// 10. Usa switch para hacer el ejercicio 7

let numeroMes2 = 8;
let diasMes;

switch (numeroMes2) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    diasMes = "El mes tiene 31 días";
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    diasMes = "El mes tiene 30 días";
    break;
  case 2:
    diasMes = "El mes tiene 28 días";
    break;
  default:
    diasMes = "numero de mes incorrecto";
}
console.log(diasMes);
