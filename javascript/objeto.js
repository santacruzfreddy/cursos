const b = {};

console.log(b);

const c = new Object();

console.log(c);

const otakusf = {
  name: "freddy",
  nickName: "otakusf",
  edad: "34",
  pasaTiempo: ["ver tele", "leer"],
  soltero: true,
  contacto: {
    email: "santacruz.freddy@gmail.com",
    pais: "ecuador",
  },
  saludar: function () {
    console.log(`hola :) ${this.name}`);
    return "hola mundo"
  },
};

console.log(otakusf)

console.log(otakusf.saludar())
