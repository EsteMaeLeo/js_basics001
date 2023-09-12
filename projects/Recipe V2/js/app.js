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

    getFoods(strCategory);
  });
}

async function getFoods(category) {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  await fetch(url)
    .then((response) => response.json())
    .then((data) => displayFoods(category, data.meals))
    .catch((error) => console.log(error));
}

function displayFoods(category, foodList) {

  console.log(foodList);
  const div = document.createElement("DIV");
  const h2 = document.createElement("H2");
  h2.classList.add("font-bold");
  h2.textContent = category;
  divFoods.appendChild(h2)

  foodList.forEach((food) => {
    const { idMeal, strMeal, strMealThumb } = food;
    const container = document.createElement("DIV");
    const heading = document.createElement("H3");
    heading.textContent = strMeal;
    container.appendChild(heading);
    divFoods.appendChild(container);
  });
}

function intiApp() {
  apiMeals();
}

document.addEventListener("DOMContentLoaded", intiApp);
