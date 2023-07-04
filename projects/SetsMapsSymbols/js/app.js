//sets create values without duplicates
const cart = new Set();

cart.add("T-shirt");
//tried add same value result will not be added
cart.add("T-shirt");
cart.add("Jeans");
cart.add("Tennis");
cart.add("Mouse pad");

console.log(cart.size);

console.log(cart.has("T-shirt"));

console.log(cart);

cart.forEach((product) => {
  console.log("For each: ", product);
});

console.log("Delete Tennis: ", cart.delete("Tennis"));

console.log(cart);

//delete duplicates
const nums = [10, 20, 30, 10, 20, 40, 50, 60, 40];
console.log(nums);

const notDuplicates = new Set(nums);
console.log(notDuplicates);

//WeakSet only objects dont have size and canot do foreach
const weakSet = new WeakSet();

const client = {
  name: "William",
  budget: 3000,
};

weakSet.add(client);
console.log(client);
console.log(weakSet.has(client));

//maps objects better performance, sorted key and value

const clientMap = new Map();
clientMap.set("name", "Carl");
clientMap.set("type", "Platinum");
clientMap.set("balance", "4500");
console.log(clientMap);

console.log(clientMap.size);
console.log(clientMap.has("name"));
console.log(clientMap.get("name"));
clientMap.delete("balance");
console.log(clientMap.has("balance"));
console.log(clientMap.get("balance"));
clientMap.clear();
console.log(clientMap);

const patient = new Map([
  ["name", "Terry"],
  ["room", 430],
]);
console.log(patient);
patient.set("dr", "Dr Jown");
console.log(patient);
patient.set("name", "Tonny");
console.log(patient);

patient.forEach((data, index)=>{
    console.log(data, index)
})

// WEKMAP
const product = {
    id: 10
}

const wekmap = new WeakMap();
wekmap.set(product, 'Mouse');

console.log(wekmap.has(product));
console.log(wekmap.get(product));
console.log(wekmap);

//SYMBOLS 
const sym = Symbol();
const sym2 = Symbol();

if(sym === sym2){
    console.log('Symbols same')
}else{
    console.log('Symbols are different')
}

