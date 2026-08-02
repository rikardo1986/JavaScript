// ******************** Desestructuración y Propagación ********************
/*
Desestructuración: Es una forma de extraer valores de arrays u objetos y asignarlos a variables de manera más concisa. 
Propagación: Es una forma de copiar o combinar arrays u objetos utilizando el operador de propagación. (...)
Ambas herramientas agilizan drásticamente la manipulación de datos
*/

let miArray = [1, 2, 3, 4]; // Array de ejemplo

let persona = {
  // Objeto de ejemplo
  nombre: "Ricardo",
  edad: 40,
  alias: "Rikardo",
};

let miValor = miArray[1]; // Acceder al segundo elemento del array
console.log(miValor);

let myName = persona.nombre; // Acceder a la propiedad "nombre" del objeto
console.log(myName);

// Desestructuración

// Sintaxis arrays

let [miValor0, miValor1, miValor2, miValor3, miValor4] = miArray; // Desestructuración del array
console.log(miValor0); // Acceder al primer elemento del array
console.log(miValor1); // Acceder al segundo elemento del array
console.log(miValor2); // Acceder al tercer elemento del array
console.log(miValor3); // Acceder al cuarto elemento del array
console.log(miValor4); // Acceder al quinto elemento del array

// Sintaxis arrays con valores predeterminados

let [miValue5 = 0, miValue6 = 0, miValue7 = 0, miValue8 = 0, miValue9 = 0] =
  miArray; // Desestructuración del array con valores predeterminados
console.log(miValue5); // Acceder al primer elemento del array
console.log(miValue6); // Acceder al segundo elemento del array
console.log(miValue7); // Acceder al tercer elemento del array
console.log(miValue8); // Acceder al cuarto elemento del array
console.log(miValue9); // Acceder al quinto elemento del array

// Ignorar elementos array

let [miValue10, , , miValue13] = miArray; // Desestructuración del array ignorando elementos
console.log(miValue10); // Acceder al primer elemento del array
console.log(miValue13); // Acceder al cuarto elemento del array

// Sintaxis objects

let { nombre, edad, alias } = persona; // Desestructuración del objeto
console.log(nombre); // Acceder a la propiedad "nombre" del objeto
console.log(edad); // Acceder a la propiedad "edad" del objeto
console.log(alias); // Acceder a la propiedad "alias" del objeto

// Sintaxis objects con valores predeterminados

let {
  nombre: nombre2,
  edad: edad2,
  alias: alias2,
  email = "email@email.com",
} = persona; // Desestructuración del objeto con valores predeterminados
console.log(nombre2); // No existe
console.log(edad2); // No existe
console.log(alias2); // No existe
console.log(email); // Acceder a la propiedad "email" del objeto

// Sintaxis objects con nuevos nombres de variables

let { alias: alias3, nombre: nombre3, edad: edad3 } = persona; // Desestructuración del objeto con nuevos nombres de variables
console.log(nombre3); // Acceder a la propiedad "nombre" del objeto
console.log(edad3); // Acceder a la propiedad "edad" del objeto
console.log(alias3); // Acceder a la propiedad "alias" del objeto

// Objects anidados

let person3 = {
  // Objeto anidado
  name: "Brais",
  age: 37,
  alias: "MoureDev",
  walk: function () {
    // Método para caminar
    console.log("La persona camina."); // Imprime un mensaje indicando que la persona camina
  },
  job: {
    // Objeto anidado que representa el trabajo de la persona
    name: "Programador",
    exp: 15,
    work: function () {
      // Método para trabajar
      console.log(`La persona de ${this.age} años de experiencia trabaja.`); // Imprime un mensaje indicando la experiencia de la persona en su trabajo
    },
  },
};

let {
  nombre: nombre4,
  job: { name: jobName },
} = person3; // Desestructuración del objeto anidado

console.log(nombre4); // Acceder a la propiedad "nombre" del objeto
console.log(jobName); // Acceder a la propiedad "name" del objeto anidado "job"

// Propagación (...)

// Sintaxis arrays

let myArray2 = [...miArray, 5, 6]; // Propagación del array

console.log(myArray2); // Acceder al array propagado

// Copia de arrays

let myArray3 = [...miArray]; // Copia del array

console.log(myArray3); // Acceder al array copiado

// Combinación de arrays

let myArray4 = [...miArray, ...myArray2, ...myArray3]; // Combinación de arrays

console.log(myArray4); // Acceder al array combinado

// Sintaxis objects

let persona4 = { ...persona, email: "braismoure@mouredev.com" }; // Propagación del objeto

console.log(persona4); // Acceder al objeto propagado

// Copia de objects

let persona5 = { ...persona }; // Copia del objeto

console.log(persona5); // Acceder al objeto copiado

// ******************** EJERCICIOS ********************

// 1. Usa desestructuración para extraer los dos primeros elementos de un array

let cumbia = ["Amar Azul", "Pibes Chorros", "Pala Ancha", "Damas Gratis"];
let [grupo1, grupo2] = cumbia;
console.log(grupo1); // Amar Azul
console.log(grupo2); // Pibes Chorros

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [grupo3, grupo4, grupo5 = "Rafaga"] = cumbia;
console.log(grupo3); // Amar Azul
console.log(grupo4); // Pibes Chorros
console.log(grupo5); // Rafaga

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let persona2 = {
  nombre: "Constanza",
  edad: 13,
  alias: "Cony",
};
let { nombre: nombre5, edad: edad5 } = persona2;
console.log(nombre5); // Constanza
console.log(edad5); // 13

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let { nombre: nombre6, alias: alias6 } = persona2;
console.log(nombre6); // Constanza
console.log(alias6); // Cony

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let person4 = {
  name: "Brais",
  age: 37,
  alias: "MoureDev",
  walk: function () {
    console.log("La persona camina.");
  },
  job: {
    name: "Programador",
    exp: 15,
    work: function () {
      console.log(`La persona de ${this.age} años de experiencia trabaja.`);
    },
  },
};
let {
  job: { name: jobName2, exp: jobExp },
} = person4;
console.log(jobName2); // Programador
console.log(jobExp); // 15

// 6. Usa propagación para combinar dos arrays en uno nuevo

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let array3 = [...array1, ...array2];
console.log(array3); // [1, 2, 3, 4, 5, 6]

// 7. Usa propagación para crear una copia de un array

let array4 = [...array1];
console.log(array4); // [1, 2, 3]

// 8. Usa propagación para combinar dos objetos en uno nuevo

let obj1 = { name: "Brais", age: 37 };
let obj2 = { alias: "MoureDev", job: "Programador" };

let obj3 = { ...obj1, ...obj2 };
console.log(obj3); // { name: "Brais", age: 37, alias: "MoureDev", job: "Programador" }

// 9. Usa propagación para crear una copia de un objeto

let obj4 = { ...obj1 };
console.log(obj4); // { name: "Brais", age: 37 }

// 10. Combina desestructuración y propagación

let person5 = {
  // Objeto original
  name: "Brais",
  age: 37,
  alias: "MoureDev",
  walk: function () {
    // Método para caminar
    console.log("La persona camina."); // Imprime un mensaje indicando que la persona camina
  },
  job: {
    // Objeto anidado que representa el trabajo de la persona
    name: "Programador",
    exp: 15,
    work: function () {
      // Método para trabajar
      console.log(`La persona de ${this.age} años de experiencia trabaja.`); // Imprime un mensaje indicando la experiencia de la persona en su trabajo
    },
  },
};
let { name: name7, ...rest } = person5; // Desestructuración para extraer la propiedad "name" y el resto de las propiedades del objeto
console.log(name7); // Brais
console.log(rest); // { age: 37, alias: "MoureDev", walk: [Function], job: { name: "Programador", exp: 15, work: [Function] } }
