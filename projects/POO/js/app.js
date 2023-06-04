//clas declaration
class Client {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
}

//instance
const will = new Client("William", 5000);
console.log(will);

//class expresion
const Client2 = class {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
};

const will2 = new Client2("William", 5000);
console.log(will2);
