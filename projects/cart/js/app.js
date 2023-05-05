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

    const courseRead = e.target.parentElement.parentElement;
    readCourse(courseRead);
  }
}

//read data of HTML which we did the click
function readCourse(course){
    console.log(course)
    const infoCourse ={
        id : course.querySelector('a').getAttribute('data-id'),
        img : course.querySelector('img').src,
        title : course.querySelector('h4').textContent,
        price : course.querySelector('.precio span').textContent,
        cantidad : 1
        
    }

    console.log(infoCourse);
}