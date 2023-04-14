//simple example use a map
const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1)

//object scamble fields; alphabet and point
scrambble = {
    alphabet : '',
    point : 0
}
//array number
const numbers10 = Array.from({length: 26}, (_,i) => i+1);
console.log(numbers10)
const alphabet =numbers10.map((x)=> String.fromCharCode(x+96));
console.log(alphabet)
