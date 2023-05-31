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

function Company(name, balance, category){
  this.name = name;
  this.balance = balance;
  this.category = category
}
const CompanyJohn = new Company('ERP John', 8900, 'Android, IOS, ERP Systems');
console.log(formatCompany(CompanyJohn));
