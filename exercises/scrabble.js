//array number
const numbers10 = Array.from({ length: 26 }, (_, i) => i + 1);
console.log(numbers10);
const alphabet = numbers10.map((number) => String.fromCharCode(number + 64));
console.log(alphabet);

const point1 = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];
const point2 = ["D", "G"];
const point3 = ["B", "C", "M", "P"];
const point4 = ["F", "H", "V", "W", "Y"];
const point5 = ["K"];
const point8 = ["J", "X"];
const point10 = ["Q", "Z"];

const word = "cabbage";

const newWord = word.toLocaleUpperCase();
console.log(newWord);

function newObScam(alphabet, point) {
  return (scrambble = {
    alphabet: alphabet,
    point: point,
  });
}
let scramblePoints = [];
alphabet.forEach((letter) => {
  if (point1.includes(letter)) {
    scramblePoints.push(newObScam(letter, 1));
  } else if (point2.includes(letter)) {
    scramblePoints.push(newObScam(letter, 2));
  } else if (point3.includes(letter)) {
    scramblePoints.push(newObScam(letter, 3));
  } else if (point4.includes(letter)) {
    scramblePoints.push(newObScam(letter, 4));
  } else if (point5.includes(letter)) {
    scramblePoints.push(newObScam(letter, 5));
  } else if (point8.includes(letter)) {
    scramblePoints.push(newObScam(letter, 8));
  } else if (point10.includes(letter)) {
    scramblePoints.push(newObScam(letter, 10));
  }
});


console.log(scramblePoints);
