//partials and currying

console.log("--PARTIALS AND CURRYING--");

const add = (a, b, c) => a + b + c;
console.log(add(4, 5, 6));

const partial = (a) => (b, c) => add(a, b, c);

const firstNumber = partial(4);
const resultPartial = firstNumber(5, 6);
console.log(resultPartial);

const partialTwo = (a) => (b) => (c) => add(a, b, c);

const numberfirst = partialTwo(4);
const numberSecond = numberfirst(5);
const resultThird = numberSecond(6);

console.log(resultThird);

const resultPartialFinal = partialTwo(4)(5)(6);
console.log(resultPartialFinal);
