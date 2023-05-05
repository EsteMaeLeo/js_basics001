const cart = document.querySelector("#carrito");
const containerCart = document.querySelector("#lista-carrito tbody");
const btEmptyCart = document.querySelector("#vacias-carrito");
const listCourses = document.querySelector("#lista-cursos");

loadEventListeners();

function loadEventListeners() {
  listCourses.addEventListener("click", addCourse);
}

function addCourse(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    console.log(e.target);
  }
}
