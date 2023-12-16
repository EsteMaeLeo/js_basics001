//partials and currying

console.log("--PARTIALS AND CURRYING--");

const add = (a, b, c) => a + b + c;
console.log(add(6, 6, 6));

const partial = (a) => (b, c) => add(a, b, c);

const firstNumber = partial(5);
const resultPartial = firstNumber(6, 6);
console.log(resultPartial);
