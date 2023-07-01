//sets create values without duplicates
const cart = new Set();

cart.add('T-shirt');
//tried add same value result will not be added
cart.add('T-shirt');
cart.add('Jeans');
cart.add('Tennis');
cart.add('Mouse pad');

console.log(cart.size);

console.log(cart.has('T-shirt'))

console.log(cart);

cart.forEach(product =>{
    console.log('For each: ', product)
})

console.log('Delete Tennis: ', cart.delete('Tennis'))

console.log(cart);

//delete duplicates
const nums = [10,20,30,10,20,40,50,60,40]
console.log(nums);

const notDuplicates = new Set(nums);
console.log(notDuplicates);