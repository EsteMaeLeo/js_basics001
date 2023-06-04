//clas declaration
class Client {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  showInfo() {
    return `Client: ${this.name} Blance: ${this.balance}`;
  }

  static atmWelcome() {
    return `Welcome to the ATM`;
  }
}

//instance
const will = new Client("William", 5000);
console.log(will);
console.log(Client.atmWelcome())
console.log(will.showInfo())

//class expresion
const Client2 = class {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  showInfo() {
    return `Client: ${this.name} Blance: ${this.balance}`;
  }
};

const will2 = new Client2("Will", 5000);
console.log(will2);
console.log(will2.showInfo());
