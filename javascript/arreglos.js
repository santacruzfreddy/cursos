const a = [];
const b = [1, true, "hola", ["A", "B", "C"]];
console.log(a);
console.log(b);
console.log(b.length);
console.log(b[2]);

const c = Array.of("X", "Y", "Z", 9, 8, 7);

console.log(c);

const d = Array(100).fill(false);
console.log(d);

const e = new Array();

console.log(e);

const f = new Array(1, 2, 3, true, false);
console.log(f);

const colores = ["Rojo", "Verde", "Azul"];
console.log(colores);

//agrega un nuevo elemento
colores.push("negro");
console.log(colores);

//quita el ultimo elemento
colores.pop();
console.log(colores);

colores.forEach(function (color,index) {
  console.log(`<li id="${index}">${color}</li>`);
});
