const category = document.querySelector(".form-select");

function initApp() {
  getCategory();
  console.log(category);
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
    const {strCategory} = datacat
    console.log(datacat.strCategory);
    const option = document.createElement("OPTION");
    console.log(option);
    option.value = strCategory;
    option.textContent = datacat.strCategory;
    category.appendChild(option);
  });
  
}
document.addEventListener("DOMContentLoaded", initApp);
