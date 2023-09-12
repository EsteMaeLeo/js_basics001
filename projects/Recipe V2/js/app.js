const divFoods = document.querySelector(".foods");

function apiMeals() {
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

  fetch(url)
    .then((response) => response.json())
    .then((data) => createCategoryList(data))
    .catch((error) => {
      console.log(error);
    });
}

function createCategoryList(data) {
  data.categories.forEach((category) => {
    const { strCategory } = category;
    const div = document.createElement("DIV");
    const h2 = document.createElement("H2");
    h2.textContent = strCategory;
    divFoods.appendChild(h2);
    getFoods(strCategory);
  });
}

function getFoods(category) {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayFoods(data))
    .catch((error) => console.log(error));
}

function displayFoods(data) {console.log(data)}

function intiApp() {
  apiMeals();
}

document.addEventListener("DOMContentLoaded", intiApp);
