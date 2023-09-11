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
  const url =
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => getMeals(data))
    .catch((error) => console.log(error));
}

function getMeals(data){
    console.log(data)
    data.meals.forEach(food =>{
        console.log(food)
    })
}

function getCategory() {
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
  fetch(url)
    .then((response) => response.json())
    .then((data) => createCategoryList(data))
    .catch((error) => console.log(error));
}

function createCategoryList(data) {
  console.log(data);
  data.categories.forEach((datacat) => {
    const { strCategory } = datacat;
    console.log(datacat.strCategory);
    const option = document.createElement("OPTION");
    console.log(option);
    option.value = strCategory;
    option.textContent = datacat.strCategory;
    category.appendChild(option);
  });
}
document.addEventListener("DOMContentLoaded", initApp);
