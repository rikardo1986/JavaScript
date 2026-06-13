// ******************** Desestructuración y Propagación ********************
/*
Desestructuración: Es una forma de extraer valores de arrays u objetos y asignarlos a variables de manera más concisa. 
Propagación: Es una forma de copiar o combinar arrays u objetos utilizando el operador de propagación. (...)
Ambas herramientas agilizan drásticamente la manipulación de datos
*/

let miArray = [1, 2, 3, 4];

let persona = {
  nombre: "Ricardo",
  edad: 40,
  alias: "Rikardo",
};

let miValor = miArray[1];
console.log(miValor);

let myName = persona.nombre;
console.log(myName);

// Desestructuración

// Sintaxis arrays

let [miValor0, miValor1, miValor2, miValor3, miValor4] = miArray;
console.log(miValor0);
console.log(miValor1);
console.log(miValor2);
console.log(miValor3);
console.log(miValor4);

// Sintaxis arrays con valores predeterminados

let [miValue5 = 0, miValue6 = 0, miValue7 = 0, miValue8 = 0, miValue9 = 0] =
  miArray;
console.log(miValue5);
console.log(miValue6);
console.log(miValue7);
console.log(miValue8);
console.log(miValue9);

// Ignorar elementos array

let [miValue10, , , miValue13] = miArray;
console.log(miValue10);
console.log(miValue13);

// Sintaxis objects

let { nombre, edad, alias } = persona;
console.log(nombre);
console.log(edad);
console.log(alias);

// Sintaxis objects con valores predeterminados

let {
  nombre: nombre2,
  edad: edad2,
  alias: alias2,
  email = "email@email.com",
} = persona;
console.log(nombre2); // No existe
console.log(edad2); // No existe
console.log(alias2); // No existe
console.log(email);

// Sintaxis objects con nuevos nombres de variables

let { alias: alias3, nombre: nombre3, edad: edad3 } = persona;
console.log(nombre3);
console.log(edad3);
console.log(alias3);

// Objects anidados

let person3 = {
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
  nombre: nombre4,
  job: { name: jobName },
} = person3;

console.log(nombre4);
console.log(jobName);

// Propagación (...)

// Sintaxis arrays

let myArray2 = [...miArray, 5, 6];

console.log(myArray2);

// Copia de arrays

let myArray3 = [...miArray];

console.log(myArray3);

// Combinación de arrays

let myArray4 = [...miArray, ...myArray2, ...myArray3];

console.log(myArray4);

// Sintaxis objects

let persona4 = { ...persona, email: "braismoure@mouredev.com" };

console.log(persona4);

// Copia de objects

let persona5 = { ...persona };

console.log(persona5);

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
let { name: name7, ...rest } = person5;
console.log(name7); // Brais
console.log(rest); // { age: 37, alias: "MoureDev", walk: [Function], job: { name: "Programador", exp: 15, work: [Function] } }
