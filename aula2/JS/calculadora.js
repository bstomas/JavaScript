// let sum = x + y;
// let sub = x - y;
// let mult = x * y;
// let div = x / y;
// let reminder = x % y; //divisão inteira

// console.log(sum);

const x = +prompt("Introduza um número:");
const y = +prompt("Introduza outro número");

let sum = x + y;
console.log(`a soma de ${x} com ${y} é ${sum}`);

let sub = x - y;
console.log(`a subtração de ${x} com ${y} é ${sub}`);

let mult = x * y;
console.log(`a multiplicação de ${x} com ${y} é ${mult}`);

let div = x / y;
console.log(`a divisão de ${x} com ${y} é ${div}`);

let reminder = x % y;
console.log(`o resto da divisão inteira de ${x} com ${y} é ${reminder}`);

document.querySelector(
    ".sum-js"
).innerHTML = `<i>A soma de ${x} com ${y} é ${sum}</i>`;