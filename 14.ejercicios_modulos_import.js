// ******************** Modulos ********************

// Para importar un modulo, se utiliza la palabra clave import seguida del nombre del modulo que se desea importar.
// Esto permite que el código del modulo importado pueda ser utilizado en el archivo actual.
// se utiliza un archivo package.json para poder exportar e importar entre archivos .js

import { saludar, PI, Circulo } from "./13.ejercicios_modulos_export.js"; // Importa la función saludar desde el archivo 13.ejercicios_modulos_export.js

import resta from "./13.ejercicios_modulos_export.js"; // La exportacion por defecto toma en cuenta a lo que esta por defecto, no por el nombre

// Uso de la función importada
const mensaje = saludar("Ricardo"); // Llama a la función saludar con el argumento "Juan"
console.log(mensaje); // Muestra el mensaje devuelto por la función saludar en la consola

// Uso de la propiedad importada
console.log(PI);

// Uso de una clase importada
let circulo = new Circulo(20);
console.log(circulo.radio);
console.log(circulo.area().toFixed(2));
console.log(circulo.perimetro());

// Uso de la importacion por defecto
console.log(resta(25, 10));

// importar desde otros ficheros
//import { MiImportacion } from "./carpeta/archivo.js";
