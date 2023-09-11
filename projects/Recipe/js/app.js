const category = document.querySelector(".form-select");
const selectCategory = document.querySelector("#categorias");

function initApp() {
  getCategory();
  selectCategory.addEventListener("change", selectionCategory);
}

function selectionCategory(e) {
  e.preventDefault();
  /*both work because get the selected category */
  console.log(selectCategory.value);
  console.log(e.target.value);
  const category = e.target.value;
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => getMeals(data))
    .catch((error) => console.log(error));
}

function getMeals(data) {
  console.log(data);
  const result = document.querySelector("#resultado");
  console.log(result);
  data.meals.forEach((food) => {
    //console.log(food)
    const { idMeal, strMeal, strMealThumb } = food;
    const container = document.createElement("DIV");

    container.classList.add("col-md-4");
    const card = document.createElement("DIV");
    card.classList.add("card", "mb-4");
    container.appendChild(card);

    const img = document.createElement("IMG");
    img.classList.add("card-img-top");
    img.alt = `Recipe image ${strMeal}`;
    img.src = strMealThumb;

    const cardBody = document.createElement("DIV");
    cardBody.classList.add("card-body");

    const heading = document.createElement("H3");
    heading.classList.add("card-title", "mb-3");
    heading.textContent = strMeal;

    const button = document.createElement("BUTTON");
    button.classList.add("btn", 'w-100', 'btn-danger');
    button.textContent= 'Check Recipe'

    cardBody.appendChild(heading);
    cardBody.appendChild(button);

    card.appendChild(img);
    card.appendChild(cardBody);

    container.appendChild(card);

    result.appendChild(container);
  });
  console.log(result);
}

function getCategory() {
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
  fetch(url)
    .then((response) => response.json())
    .then((data) => createCategoryList(data))
    .catch((error) => console.log(error));
}

function createCategoryList(data) {
  //console.log(data);
  data.categories.forEach((datacat) => {
    const { strCategory } = datacat;
    //console.log(datacat.strCategory);
    const option = document.createElement("OPTION");
    console.log(option);
    option.value = strCategory;
    option.textContent = datacat.strCategory;
    category.appendChild(option);
  });
}
document.addEventListener("DOMContentLoaded", initApp);
