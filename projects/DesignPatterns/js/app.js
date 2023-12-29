//CLASS PATTERN

class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const person1 = new Person('John Williams', "email@email.com")
console.log(person1)