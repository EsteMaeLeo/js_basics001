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
  newExpense(expense) {
    //this.expense.push(expense);
    this.expense = [...this.expense, expense];
    this.calculateRemainin();
    console.log(this.expense);
  }

  calculateRemainin() {
    const totalExpense = this.expense.reduce(
      (total, expense) => total + expense.quantity,
      0
    );
    console.log(totalExpense);
    this.remaining = this.budget - totalExpense;
  }

  deleteExpense(id) {
    this.expense = this.expense.filter((expense) => expense.id != id);
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

  addExpenseList(expenses) {
    this.clearHtml();
    expenses.forEach((expense) => {
      const { quantity, name, id } = expense;

      //create LI
      const newExpense = document.createElement("li");
      newExpense.className =
        "list-group-item d-flex justify-content-between align-items-center";
      //newExpense.setAttribute('data-id', id)
      newExpense.dataset.id = id;
      console.log(newExpense);
      newExpense.innerHTML = `${name} <span class="badge badge-primary badge-pill">$ ${quantity}</span>`;
      const btnDelete = document.createElement("button");
      btnDelete.classList.add("btn", "btn-danger", "borrar-gasto");
      btnDelete.innerHTML = "Delete &times";

      btnDelete.onclick = () => {
        deleteExpense(id);
      };

      newExpense.appendChild(btnDelete);

      expenseList.appendChild(newExpense);
    });
  }

  clearHtml() {
    while (expenseList.firstChild) {
      expenseList.removeChild(expenseList.firstChild);
    }
  }

  updateRemaining(remaining) {
    document.querySelector("#restante").textContent = remaining;
  }

  checkBudget(budgetObj) {
    const { budget, remaining } = budgetObj;

    const remainingDiv = document.querySelector(".restante");

    if (budget / 4 > remaining) {

      remainingDiv.classList.remove("alert-success", "alert-success");
      remainingDiv.classList.add("alert-danger");
    } else if (budget / 2 > remaining) {

      remainingDiv.classList.remove("alert-success");
      remainingDiv.classList.add("alert-warning");
    }

    if (remaining <= 0) {
      ui.printAlert("You use all your budget", "error");
      form.querySelector('button[type="submit"]').disabled = true;
    }
  }
}

const ui = new userInterface();
let budget;

function askBudget() {
  const budgetUser = prompt("Add your budget");

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

  ui.insertBudget(budget);
}

function addExpense(e) {
  e.preventDefault();
  const name = document.querySelector("#gasto").value;
  const quantity = Number(document.querySelector("#cantidad").value);

  if (name === "" || quantity === "") {
    ui.printAlert("Both Fields are required", "error");
    return;
  } else if (quantity <= 0 || isNaN(quantity)) {
    ui.printAlert("Quantitty not valid", "error");
    return;
  }
  //object expense joining ... using object literal
  const newExpense = { name, quantity, id: Date.now() };

  //add new expense
  budget.newExpense(newExpense);
  console.log(newExpense);

  //message
  ui.printAlert("Expense Added");
  console.log(budget);

  const { expense, remaining } = budget;
  ui.addExpenseList(expense);

  ui.updateRemaining(remaining);

  ui.checkBudget(budget);

  form.reset();
}

function deleteExpense(id) {
  budget.deleteExpense(id);
  const { expense, remaining } = budget;
  ui.addExpenseList(expense);
}
