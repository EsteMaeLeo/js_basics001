const client = {
  name: "John",
  balance: 500,
};

console.log(client);
console.log(typeof client);

function Client(name, balance) {
  this.name = name;
  this.balance = balance;
}

const john = new Client("John", 500);
console.log(john);
