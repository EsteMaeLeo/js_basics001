const form = document.querySelector("#agregar-gasto");
const expenseList = document.querySelector("#gastos ul");

eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", askBudget);
}

class Budget {
  constructor(budget) {
    this.budget = budget;
    this.remaining = budget;
    this.expense = [];
  }
}

class userInterface {
    insertBudget(globalBudget){
        const {budget, remaining} = globalBudget;
        document.querySelector('#total').textContent = budget;
        document.querySelector('#restante').textContent = remaining;
    }
}

const ui = new userInterface();
let budget;

function askBudget() {
  const budgetUser = prompt("Add your budget");
  console.log(budgetUser);
  const numberBudget = Number(budgetUser);
  if (
    budgetUser === "" ||
    budgetUser === null ||
    isNaN(budgetUser) ||
    budgetUser <= 0
  ) {
    window.location.reload();
  }

  budget = new Budget(numberBudget);
  console.log(budget);
  ui.insertBudget(budget);

}
