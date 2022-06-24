//El uso de las variables con la palabra reservada var crean variables globales
//que se adjuntan al objeto global

//Es uso de variables con la palabra reservada let crea variables de ambito,
//que no se agregan al objeto global

var hola = "mundo";
let hello = "hola mundo";

console.log(hola);
console.log(hello);
console.log(window);
console.log(window.hola)
