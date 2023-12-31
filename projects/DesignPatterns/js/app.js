//CLASS PATTERN

class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

console.log("****** CLASS PATTERN ******");

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

console.log("****** Singleton ****** ");

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

const personS1 = new personSingleton(
  "Mike Knight",
  "email@email.com",
  "Google"
);
console.log("PersonS1: ", personS1);

const personS2 = new personSingleton(
  "Karen  Knight",
  "email@email.com",
  "Google"
);
console.log("PersonS1: ", personS2);

//factory create objects with some conditions
console.log("****** Factory ****** ");

class inputHTML {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
  createInput() {
    return `<input type="${this.type}" name="${this.name}" id="${this.name}">`;
  }
}

class HTMLFactory {
  createElement(type, name) {
    switch (type) {
      case "text":
        return new inputHTML("text", name);
      case "tel":
        return new inputHTML("tel", name);
      case "email":
        return new inputHTML("email", name);
      default:
        return;
    }
  }
}

const element = new HTMLFactory();
const inputText = element.createElement("text", "name-client");
console.log("HTMLFactory: ", element);
console.log(inputText.createInput());

const element2 = new HTMLFactory();
const inputText2 = element.createElement("tel", "tel-client");
console.log("HTMLFactory: ", element2);
console.log(inputText2.createInput());

const element3 = new HTMLFactory();
const inputText3 = element.createElement("email", "email-client");
console.log("HTMLFactory: ", element3);
console.log(inputText3.createInput());

//module pattern
console.log("****** module pattern ****** ");

const showClient = (name) => {
  console.log(name);
};

//previous ECM6
const module1 = (function () {
  const name = "William";

  function hello() {
    console.log("Hello: ", name);
  }
  return {
    name,
    hello,
  };
})();

export { showClient };

///MIX PATTERN
console.log("****** MIX PATTERN ******");

class PersonMix {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class ClientMix {
  constructor(name, email, company) {
    this.name = name;
    this.email = email;
    this.company = company;
  }
}

const functionsPerson = {
  showInfo() {
    console.log(`"Name: ${this.name}, Email: ${this.email}"`);
  },
  showName() {
    console.log(`Name: ${this.name}`);
  },
};

Object.assign(PersonMix.prototype, functionsPerson);
Object.assign(ClientMix.prototype, functionsPerson);

const p1 = new PersonMix("Peter Potter", "peter@email.com");
console.log(p1);
p1.showInfo();
p1.showName();

const p2 = new PersonMix("Wallace Potter", "Wallace@email.com");
console.log(p2);
p2.showInfo();
p2.showName();

//namespaces
console.log("****** namespaces ******");

const restaurantApp = {};

restaurantApp.food = [
  {
    food: "Pizza",
    price: 10,
  },
  {
    food: "Burger",
    price: 10,
  },
  {
    food: "Beef steak",
    price: 20,
  },
];

restaurantApp.functions = {
  showMenu: (food) => {
    console.log("Restaurant Menu");

    food.forEach((food, index) => {
      console.log(`${index}: ${food.food} : ${food.price}`);
    });
  },

  order: (id) => {
    console.log(`Preparing: ${restaurantApp.food[id].food}`);
  },

  addFood: (food, price) => {
    const newFood = {
      food,
      price,
    };

    restaurantApp.food.push(newFood);
  },
};

const { food } = restaurantApp;

restaurantApp.functions.showMenu(food);

restaurantApp.functions.order(1);

restaurantApp.functions.addFood("Chicken Pasta", 15);

restaurantApp.functions.showMenu(food);

console.log(restaurantApp);
