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

function formatClient(client) {
  const { name, balance } = client;
  return `Client: ${name} has a balance of ${balance}`;
}
function formatCompany(company) {
  const { name, balance, category } = company;
  return `Company: ${name} has a balance of ${balance} and belog to category: ${category}`;
}

console.log(formatClient(john));

function Company(name, balance, category) {
  this.name = name;
  this.balance = balance;
  this.category = category;
}
const CompanyJohn = new Company("ERP John", 8900, "Android, IOS, ERP Systems");
console.log(formatCompany(CompanyJohn));

//Prototypes
console.log("PROTOTYPES");
function ClientProto(name, balance) {
  this.name = name;
  this.balance = balance;
}

//method exclusive for the object
ClientProto.prototype.typeClient = function () {
  let type;
  if (this.balance > 1000) {
    type = "Gold";
  } else if (this.balance > 5000) {
    type = "Platinum";
  } else {
    type = "Normal";
  }
  return type;
};

ClientProto.prototype.NameBalance = function () {
  return `Client: ${this.name} has a balance of ${
    this.balance
  }, type Client : ${this.typeClient()}`;
};

ClientProto.prototype.withdraw = function (withdrawValue) {
  this.balance -= withdrawValue;
};

const william = new ClientProto("William", 15000);
console.log(william.typeClient());
console.log(william.NameBalance());
william.withdraw(250);
console.log(william.NameBalance());
console.log(william);

// inheritance
console.log("inheritance");
function People(name, balance, phone) {
  Client.call(this, name, balance);
  this.phone = phone;
}

//inheritance copy prototype of ClientProto
People.prototype = Object.create(ClientProto.prototype);
People.prototype.constructor = ClientProto;

const albert = new People("Albert", 5000, 5154439988);
console.log(albert);
console.log(albert.typeClient());
console.log(albert.NameBalance());
albert.withdraw(250);
console.log(albert.NameBalance());

People.prototype.showPhone = function () {
  return `User: ${this.name}, phone: ${this.phone}`;
};

console.log(albert.showPhone());
