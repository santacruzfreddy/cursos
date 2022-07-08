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
    return "hola mundo";
  },
  decirNombre: () => {
    return `hola me llamo: ${this.name}`;
  },
  decirNickName: function () {
    return `mi nickName es: ${this.nickName}`;
  }
};

console.log(otakusf);

console.log(otakusf.saludar());

console.log(otakusf.decirNickName())


//metodos utiles de objetos

//metodos sale los nombres de las propiedades sean atributos o metodos
console.log(Object.keys(otakusf))

//devuelve los valores de cada propiedad
console.log(Object.values(otakusf))

//evalua si el nombre de propiedad existe en el objeto
console.log(otakusf.hasOwnProperty("name"))