const form = document.querySelector("#agregar-gasto");
const expenseList = document.querySelector("#gastos ul");

eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", askBudget);

  form.addEventListener("submit", addExpense);
}

class Budget {
  constructor(budget) {
    this.budget = budget;
    this.remaining = budget;
    this.expense = [];
  }
}

class userInterface {
  insertBudget(globalBudget) {
    const { budget, remaining } = globalBudget;
    document.querySelector("#total").textContent = budget;
    document.querySelector("#restante").textContent = remaining;
  }
  printAlert(message, type) {
    const divMsg = document.createElement("div");
    divMsg.classList.add("text-center", "alert");
    if (type === "error") {
      divMsg.classList.add("alert-danger", "alert");
    } else {
      divMsg.classList.add("alert-success");
    }
    divMsg.textContent = message;
    document.querySelector(".primario").insertBefore(divMsg, form);

    setTimeout(() => {
      divMsg.remove();
    }, 3000);
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

function addExpense(e) {
  e.preventDefault();
  const name = document.querySelector("#gasto").value;
  const quantity = document.querySelector("#cantidad").value;

  if (name === "" || quantity === "") {
    ui.printAlert("Both Fields are required", "error");
    return;
  } else if (quantity <= 0 || isNaN(quantity)) {
    ui.printAlert("Quantitty not valid", "error");
    return;
  }
}
