const cart = document.querySelector("#carrito");
const containerCart = document.querySelector("#lista-carrito tbody");
const btEmptyCart = document.querySelector("#vacias-carrito");
const listCourses = document.querySelector("#lista-cursos");
let shoppingCart = [];

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
function readCourse(course) {
  console.log(course);
  const infoCourse = {
    id: course.querySelector("a").getAttribute("data-id"),
    img: course.querySelector("img").src,
    title: course.querySelector("h4").textContent,
    price: course.querySelector(".precio span").textContent,
    quantity: 1,
  };

  console.log(infoCourse);
  //adding elments to the shoppping cart
  shoppingCart = [...shoppingCart, infoCourse];
  console.log(shoppingCart);
  showCartHtml();
}

function showCartHtml() {
  //clean html
  deleteHtml();
  //loop the html
  shoppingCart.forEach((course) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>
        <img src="${course.img}" width="100">
    </td>
    <td>
        ${course.title}
    </td>
    <td>
        ${course.price}
    </td>  
    <td>
        ${course.quantity}
    </td> 
    <td>
        <a href="#" class="borrar-curso" data-id="${course.id}" > X </a>
    </td>     
    `;
    //add HTML into tbody
    containerCart.appendChild(row);
  });
}

//eliminate the course tbody
function deleteHtml() {
  //slow
  //containerCart.innerHTML = "";
  //loop until has items better for performance
  while (containerCart.firstChild) {
    containerCart.removeChild(containerCart.firstChild);
  }
}