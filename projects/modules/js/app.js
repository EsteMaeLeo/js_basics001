import {
  nameClient,
  budget,
  showInfo,
  hasBudget,
  Client,
} from "../js/client.js";

console.log(nameClient);
console.log(budget);

console.log(showInfo(nameClient, budget));
hasBudget(budget);

const client = new Client(nameClient, budget);
console.log(client);
console.log(client.showInfo());
