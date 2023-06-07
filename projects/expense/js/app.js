const form = document.querySelector("#agregar-gasto");
const expenseList = document.querySelector("#gastos ul");

eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", askBudget);
}

function askBudget() {
  const budgetUser = prompt("Add your budget");
  console.log(budgetUser);
  const numberBudget = Number(budgetUser);
  if (budgetUser === "" || budgetUser === null || isNaN(budgetUser) || budgetUser <=0 ) {
    window.location.reload();
  }
}
