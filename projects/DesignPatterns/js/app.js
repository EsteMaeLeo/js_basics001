//CLASS PATTERN

class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

console.log("CLASS PATTERN");

const person1 = new Person("John Williams", "email@email.com");
console.log(person1);

//Constructor Pattern

class Client extends Person {
  constructor(name, email, company) {
    super(name, email);
    this.company = company;
  }
}

const client = new Client("Mike Knight", "email@email.com", "Google");
console.log("Constructor Pattern");
console.log(client);

console.log("Singleton");

let instance = null;

class personSingleton {
  constructor(name, email) {
    if (!instance) {
      this.name = name;
      this.email = email;
      instance = this;
    } else {
      return instance;
    }
  }
}

const personS1 = new personSingleton("Mike Knight", "email@email.com", "Google");
console.log("PersonS1: ", personS1);

const personS2 = new personSingleton("Karen  Knight", "email@email.com", "Google");
console.log("PersonS1: ", personS2);
