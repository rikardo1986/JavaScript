// ******************** Modulos ********************

/* Un modulo es un archivo o fichero de JavaScript que contiene código que puede ser reutilizado en otros archivos. Los módulos permiten organizar el código 
en partes más pequeñas y manejables, facilitando la mantenibilidad y la colaboración en proyectos grandes.
 */

// Exportar un modulo
// Para exportar un modulo, se utiliza la palabra clave export seguida de la declaración de la variable, función o clase que se desea exportar.
// Esto permite que otros archivos puedan importar y utilizar ese modulo.

// functiones
export function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

// Propiedades
export const PI = 3.14159265;

// Clases
export class Circulo {
  constructor(radio) {
    this.radio = radio;
  }
  area() {
    return Math.PI * Math.pow(this.radio, 2);
  }
  perimetro() {
    return 2 * Math.PI * this.radio;
  }
}

// Exportacion por defecto, solo se puede hacer 1 exportacion por defecto, ya que si se hace otra, da error
export default function subtract(a, b) {
  return a - b;
}
