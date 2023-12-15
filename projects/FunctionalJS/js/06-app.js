//pure function return value but dont modify the original value
const numberD = 15;
const double = (number) => number * 2;

const resultDouble = double(numberD);

console.log("--pure function--");

console.log(resultDouble);
