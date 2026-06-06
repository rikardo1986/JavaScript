// ******************** OBJETOS ********************
/* son de clave y valor, como un MAPS pero pueden contener cualquier tipo de dato, incluso otros objetos. 
Se pueden crear con la sintaxis de llaves {} o con el constructor Object(). 
Los objetos son mutables, lo que significa que se pueden modificar después de su creación.
Usa un Objeto (Object): Para almacenar datos estructurados y sencillos (como un registro JSON) o cuando necesites serializar 
la información para enviarla a una API.
*/
// sintaxis
let persona = {
  nombre: "Ricardo",
  edad: 40,
  ciudad: "Santiago",
};

// acceso a propiedades, notacion punto o corchetes
console.log(persona.nombre); // Ricardo
console.log(persona["edad"]); // 40
console.log(persona["ciudad"]); // Santiago

// modificar propiedades
persona.edad = 41;
console.log(persona.edad); // 41
persona["ciudad"] = "Valparaíso"; // Valparaíso

// cambiar tipo de dato
persona.edad = "42";
console.log(typeof persona.edad); // string

// eliminar propiedad
delete persona.ciudad;
console.log(persona.ciudad); // undefined
console.log(persona); // { nombre: 'Ricardo', edad: '42' }

// agregar nueva propiedad

persona.profesion = "Desarrollador";
console.log(persona.profesion); // Desarrollador

// Metodos de objetos (Funciones)

let persona2 = {
  nombre: "Ricardo",
  edad: 40,
  profesion: "Informático",
  walk: function () {
    console.log(`${this.nombre} está caminando.`);
  },
};
persona2.walk(); // Ricardo está caminando.

// Anidar objetos

let empresa = {
  nombre: "Tech Solutions",
  ubicacion: "Santiago",
  empleados: {
    gerente: {
      // objeto anidado
      nombre: "Ricardo",
      edad: 40,
      work: function () {
        // método dentro del objeto anidado
        console.log(`${this.nombre} está trabajando.`); // this hace referencia al objeto gerente.
        // Si usáramos empresa.empleados.gerente.nombre, también funcionaría, pero this es más directo y claro en este contexto.
      },
    },
    desarrollador: {
      // objeto anidado
      nombre: "Constanza",
      edad: 13,
      study: function () {
        // método dentro del objeto anidado
        console.log(`${this.nombre} está estudiando.`);
      },
    },
  },
};

console.log(empresa.nombre); // Tech Solutions
console.log(empresa.ubicacion); // Santiago
empresa.empleados.gerente.work(); // Ricardo está trabajando.
empresa.empleados.desarrollador.study(); // Constanza está estudiando.

// Comparar objetos

console.log(persona === persona2); // false (comparación por referencia)
console.log(persona.nombre === persona2.nombre); // true (comparación de valores de la propiedad nombre)

// Iterar propiedades de un objeto
for (let key in persona) {
  // key es el nombre de la propiedad
  console.log(`${key}: ${persona[key]}`); // nombre: Ricardo, edad: 42, profesion: Desarrollador
}

// Funciones como objetos
function Person(nombre, edad) {
  // Deberia ser una clase, pero se puede hacer con funciones constructoras.
  this.nombre = nombre;
  this.edad = edad;
}

let persona3 = new Person("Ricardo", 40);
console.log(persona3); //   persona { nombre: 'Ricardo', edad: 40 }
console.log(persona3.edad); // 40

console.log(typeof persona); // object
console.log(typeof persona3); // object

// ******************** EJERCICIOS ********************

// 1. Crea un objeto con 3 propiedades.

let automovil = {
  marca: "Renault",
  modelo: "Fluence",
  año: 2015,
};

// 2. Accede y muestra el valor.

console.log(automovil.marca); // Renault
console.log(automovil["modelo"]); // Fluence
console.log(automovil.año); // 2015

// 3. Agrega una nueva propiedad.

automovil.color = "Rojo";
console.log(automovil.color); // Rojo

// 4. Elimina una de las 3 propiedades.

delete automovil.año;
console.log(automovil.año); // undefined

// 5. Agrega una función e imprímela.

automovil.detalles = function () {
  console.log(
    `El automovil es un ${this.marca} ${this.modelo} de color ${this.color}.`,
  );
};
automovil.detalles(); // El automovil es un Renault Fluence de color Rojo.

// 6. Itera las propiedades del objeto.

for (let key2 in automovil) {
  console.log(`${key2}: ${automovil[key2]}`);
} // marca: Renault, modelo: Fluence, color: Rojo, detalles: [Function (anonymous)]

// 7. Crea un objeto anidado.

let automovil2 = {
  marca: "Renault",
  modelo: "Arkana",
  año: 2015,
};
automovil2.propiedades = {
  color: "Rojo",
  tipo: "SUV",
};

// 8. Accede y muestra el valor de las propiedades anidadas.

console.log(automovil2.propiedades.tipo); // SUV

// 9. Comprueba si los dos objetos son iguales.

console.log(automovil === automovil2); // false (comparación por referencia)
console.log(automovil.marca === automovil2.marca); // true (comparación de valores de la propiedad marca)

// 10. Comprueba si dos propiedades diferentes son iguales.

console.log(automovil.modelo === automovil2.año); // false (comparación de valores de propiedades diferentes)
