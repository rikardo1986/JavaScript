// ******************** Clases ********************
/*
Las clases son plantillas para crear objetos con propiedades y métodos. 
Permiten organizar y estructurar el código de manera más clara y reutilizable.
*/

class Persona {
  // Definición de la clase Persona
  constructor(nombre, edad, alias) {
    // Constructor de la clase, se ejecuta al crear una instancia de la clase
    this.nombre = nombre; // this es una referencia al objeto que se está creando, se utiliza para acceder a las propiedades y métodos de la clase
    this.edad = edad; // Propiedad edad
    this.alias = alias; // Propiedad alias
  }
}

// sintaxis para crear una instancia de la clase Persona
let persona1 = new Persona("Ricardo", 40, "Rikardo"); // Crear una instancia de la clase Persona
console.log(persona1); // Mostrar la instancia de la clase Persona
console.log(persona1.alias); // Acceder a la propiedad alias de la instancia de la clase Persona

// valores por defecto en el constructor de la clase Persona
class DefaultPersona {
  constructor(nombre = "Sin nombre", edad = 0, alias = "Sin alias") {
    this.nombre = nombre; // Propiedad nombre
    this.edad = edad; // Propiedad edad
    this.alias = alias; // Propiedad alias
  }
}
let persona2 = new DefaultPersona("Constanza", 14); // Crear una instancia de la clase DefaultPersona sin pasar argumentos
console.log(persona2); // Mostrar la instancia de la clase DefaultPersona

// acceso a propiedades

console.log(persona2.alias); // Acceder a la propiedad alias de la instancia de la clase DefaultPersona
console.log(persona2["alias"]); // Acceder a la propiedad alias de la instancia de la clase DefaultPersona

persona2.alias = "Cony"; // Modificar la propiedad alias de la instancia de la clase DefaultPersona
console.log(persona2.alias); // Acceder a la propiedad alias de la instancia de la clase DefaultPersona

// Funciones en clases

class PersonaConFunciones {
  // Definición de la clase PersonaConFunciones
  constructor(nombre, edad, alias) {
    // Constructor de la clase PersonaConFunciones
    this.nombre = nombre;
    this.edad = edad;
    this.alias = alias;
  }
  caminar() {
    // método se llama la funcion dentro de la clase PersonaConFunciones
    console.log(`${this.nombre} está caminando`); // this hace referencia a la instancia de la clase
  }
}

let persona3 = new PersonaConFunciones("Ricardo", 40, "Rikardo"); // Crear una instancia de la clase PersonaConFunciones
persona3.caminar(); // Llamar al método caminar de la instancia de la clase PersonaConFunciones

// Propiedades privadas y públicas

class PersonaPrivada {
  // Definición de la clase PersonaPrivada
  #banco; // Propiedad privada banco, se declara con el símbolo # antes del nombre de la propiedad
  constructor(nombre, edad, alias, banco) {
    // Constructor de la clase PersonaPrivada
    this.nombre = nombre; // Propiedad pública nombre
    this.edad = edad; // Propiedad pública edad
    this.alias = alias; // Propiedad pública alias
    this.#banco = banco; // Propiedad privada banco
  }
  pagar() {
    this.#banco; // Método para pagar, se accede a la propiedad privada banco
  }
}

let persona4 = new PersonaPrivada("Ricardo", 40, "Rikardo", "Banco de Chile"); // Crear una instancia de la clase PersonaPrivada
console.log(persona4);
// console.log(persona4.#banco); // Acceder a la propiedad privada banco de la instancia de la clase PersonaPrivada, esto genera un error
// persona4.banco = "Banco de Santiago"; // Intentar modificar la propiedad privada banco de la instancia de la clase PersonaPrivada, esto genera un error
// persona4.pagar(); // Llamar al método pagar de la instancia de la clase PersonaPrivada

// Getters y Setters: son funciones especiales dentro de una clase que te permiten acceder y modificar las propiedades de un objeto
// como si fueran variables comunes, pero con la ventaja de poder ejecutar código intermedio (como validaciones) antes de hacerlo

class PersonaGetSet {
  // Definición de la clase PersonaGetSet
  #nombre; // Propiedad privada nombre
  #age; // Propiedad privada edad
  #alias; // Propiedad privada alias
  #tarjeta; // Propiedad privada tarjeta
  constructor(nombre, edad, alias, tarjeta) {
    this.#nombre = nombre;
    this.#age = edad;
    this.#alias = alias;
    this.#tarjeta = tarjeta;
  }
  get nombre() {
    // Getter para la propiedad privada nombre
    return this.#nombre; // Retorna el valor de la propiedad privada nombre
  }
  set tarjeta(newTarjeta) {
    // Setter para la propiedad privada tarjeta
    this.#tarjeta = newTarjeta; // Setter para la propiedad privada tarjeta
  }
}
let persona5 = new PersonaGetSet("Ricardo", 40, "Rikardo", "1q2w3e4r5t6y"); // Crear una instancia de la clase PersonaGetSet
console.log(persona5); // Mostrar la instancia de la clase PersonaGetSet
// console.log(persona5.#nombre); // Acceder a la propiedad privada nombre de la instancia de la clase PersonaGetSet, esto genera un error
// persona5.#nombre = "Ricardo2"; // Intentar modificar la propiedad privada nombre de la instancia de la clase PersonaGetSet, esto genera un error
console.log(persona5.nombre); // Acceder a la propiedad privada nombre de la instancia de la clase PersonaGetSet a través del getter,
// pero no se puede modificar la propiedad privada nombre de la instancia de la clase PersonaGetSet a través del getter, esto genera un error
persona5.tarjeta = "6y5t4r3e2w1q"; // Modificar la propiedad privada tarjeta de la instancia de la clase PersonaGetSet a través del setter
console.log(persona5.tarjeta); //   Acceder a la propiedad privada tarjeta de la instancia de la clase PersonaGetSet a través del getter,
// pero no se puede modificar la propiedad privada tarjeta de la instancia de la clase PersonaGetSet a través del getter, esto genera un error

// Herencia: es un mecanismo que permite crear una nueva clase a partir de una clase existente, heredando sus propiedades y métodos,
// y permitiendo agregar nuevas propiedades y métodos o modificar los existentes.

class Animal {
  // Definición de la clase Animal
  constructor(nombre) {
    this.nombre = nombre; // Propiedad pública nombre
  }
  sonido() {
    // Método sonido de la clase Animal
    console.log("El animal hace un sonido");
  }
}

class Perro extends Animal {
  // Definición de la clase Perro que hereda de la clase Animal
  sonido() {
    // Método sonido de la clase Perro que sobrescribe el método sonido de la clase Animal
    console.log("El perro ladra");
  }
}

class Aguila extends Animal {
  // Definición de la clase Aguila que hereda de la clase Animal
  constructor(nombre, tamaño) {
    // Constructor de la clase Aguila que sobrescribe el constructor de la clase Animal
    super(nombre); // Llamar al constructor de la clase padre (Animal), para eso se utiliza la palabra reservada super, que hace referencia a la clase padre
    this.tamaño = tamaño; // Propiedad pública tamaño
  }
  vuela() {
    // Método vuela de la clase Aguila que sobrescribe el método sonido de la clase Animal
    console.log("El águila vuela");
  }
}

let MiPerro = new Perro("Firulais"); // Crear una instancia de la clase Perro
MiPerro.sonido(); // Llamar al método sonido de la instancia de la clase Perro

let MiAguila = new Aguila("Aguila Real", "Grande"); // Crear una instancia de la clase Aguila
MiAguila.vuela(); // Llamar al método vuela de la instancia de la clase Aguila
MiAguila.sonido(); // Llamar al método sonido de la instancia de la clase Aguila

console.log(MiAguila.nombre); // Acceder a la propiedad nombre de la instancia de la clase Aguila
console.log(MiAguila.tamaño); // Acceder a la propiedad tamaño de la instancia de la clase Aguila
console.log(MiPerro.nombre); // Acceder a la propiedad nombre de la instancia de la clase Perro

// Metodos estáticos: son métodos que pertenecen a la clase en sí misma, y no a las instancias de la clase.

class Matematica {
  static sumar(a, b) {
    // Método estático sumar de la clase Matematica
    return a + b; // Retorna la suma de a y b
  }
}
console.log(Matematica.sumar(5, 35)); // Llamar al método estático sumar de la clase Matematica

// ******************** EJERCICIOS ********************

// 1. Crea una clase que reciba 2 propiedades.

// 2. Añade un metodo a la clase que utilice las propiedades.

// 3. Muestra los valores de las propiedades e invoca a la función.

// 4. Añade un metodo estático a la primera clase.

// 5. Haz uso del metodo estatico.

// 6. Crea una clase que haga uso de herencia.

// 7. Crea una clase que haga uso de getters y setters.

// 8. Modifica la clase getters y setters para que use propiedades privadas.

// 9. Utiliza los get y set y muestra sus valores.

// 10. Sobrescribe un metodo de una clase que utilice herencia.
