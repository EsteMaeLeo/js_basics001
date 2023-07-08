import { Client } from "../js/client.js";

export class Company extends Client {
  constructor(name, saving, type) {
    super(name, saving);
    this.type = type;
  }
  showInfo() {
    return `Client: ${this.name} - Savings ${this.saving} Type ${this.type}`;
  }
}
