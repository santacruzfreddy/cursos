//revision de tipos de operadores en javaScript

//aritmeticos + - * / () %

let a = 5 + (5 - 10) * 3;

let b = 5 % 2;

console.log(a);

console.log(b);

//relacionales
// >,<, >=, <=, ==, ===, !=, !==
console.log(8 > 9);
console.log(9 > 8);

// = -> sirve para asignar un valor,ejemplo a = "hola mundo"
// == -> comparacion de valores
// === -> 3 iguales es comparacion de tipo de dato y de valor

//valores truely, falsely

console.log(7 == 7);
console.log("7" == 7);
console.log(0 == false);

console.log(7 === 7);
console.log("7" === 7);
console.log(0 === false);

//operadores incrementales o decrementales

console.log("operadores incrementales");
let i = 1;
i = i + 2;
console.log(i);
i += 3;
console.log(i);
i -= 2;
console.log(i);
i /= 2;
console.log(i);
i *= 5;
console.log(i);

//operador unario
i++; //asignar despues de usar
console.log(i);
i--; //restar despues de usar
console.log(i);
++i; //asignar antes de usar
console.log(i);
--i; //restar antes de usar
console.log(i);

//operadores logicos ! -> not, || -> or, && -> and

console.log(7 == 6 || 10 >= 9);
