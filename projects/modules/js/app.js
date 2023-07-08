//and import can use Alias example client as clientname

import newFunction, {
  nameClient,
  budget,
  showInfo,
  hasBudget,
  Client,
} from "../js/client.js";

import { Company } from "../js/company.js";

console.log(nameClient);
console.log(budget);

console.log(showInfo(nameClient, budget));
hasBudget(budget);

const client = new Client(nameClient, budget);
console.log(client);
console.log(client.showInfo());

const company = new Company("SoftwareCO", 350000, "Local Business");
console.log(company);
console.log(company.showInfo());

newFunction();