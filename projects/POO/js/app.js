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
console.log(Client.atmWelcome());
console.log(will.showInfo());

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

//inheritance
class Company extends Client {
  constructor(name, balance, phone, category) {
    super(name, balance);
    this.phone = phone;
    this.category = category;
  }

  static welcomeCompany() {
    return `ATM for the comapany`;
  }
}
console.log(Client.atmWelcome());
const nashCompany = new Company("Devs on Nashvegas", 250000, 6508763344);
console.log(Company.welcomeCompany());
console.log(nashCompany.showInfo());

class Client3 {
  #phone;
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
    //private attr
    this.#phone;
  }
  showInfo() {
    return `Client: ${this.name} Blance: ${this.balance} Phone ${this.#phone}`;
  }

  setPhone(phone) {
    this.#phone = phone;
  }

  getPhone(phone) {
    return this.#phone;
  }

  static atmWelcome() {
    return `Welcome to the ATM`;
  }
}

const clientPrivate = new Client3("Charlie", 4500);
console.log(clientPrivate.showInfo());
clientPrivate.setPhone("670008800");
console.log(clientPrivate.getPhone());
console.log(clientPrivate.showInfo());
