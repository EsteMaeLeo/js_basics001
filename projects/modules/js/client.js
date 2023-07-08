export const nameClient = "John Williams";
export const budget = 3000;

export function showInfo(nameClient, budget) {
  return `Client: ${nameClient} - Budget ${budget}`;
}

export function hasBudget(budget) {
  if (budget > 0) {
    console.log("Has budget of: ", budget);
  } else {
    console.log("Dont have Budget assigned");
  }
}

export class Client {
  constructor(name, saving) {
    this.name = name;
    this.saving = saving;
  }
  showInfo(){
    return `Client: ${this.name} - Savings ${this.saving}`
  }
}
