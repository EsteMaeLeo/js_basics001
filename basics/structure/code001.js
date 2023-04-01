//array
const listOfNumbers = [];

const storeNumber = (num) => listOfNumbers.push(num);
storeNumber(2);
console.log(listOfNumbers);

const doYouhaveThisNumer = (num) => listOfNumbers.includes(num);
console.log(doYouhaveThisNumer(2));

//object

//array
const listOfNumbersObj = {};

const storeNumberObj = (num) => (listOfNumbersObj[num] = true);
storeNumberObj(2);
console.log(listOfNumbersObj);

const doYouhaveThisNumerObj = (num) => listOfNumbersObj[num] === true;
console.log(doYouhaveThisNumerObj(2));

//class
//implement own API for array
class Stack {
  constructor() {
    this._array = [];
  }
  push(newValue) {
    this._array.push(newValue);
  }

  pop() {
    return this._array.pop();
  }
}

const stack = new Stack();
stack._array.unshift('value');