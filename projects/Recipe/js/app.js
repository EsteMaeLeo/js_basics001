const category = document.querySelector(".form-select");
const selectCategory = document.querySelector("#categorias");
const modalBootstrap = new bootstrap.Modal("#modal", {});
const favoritesDiv = document.querySelector(".favoritos");
 
function initApp() {
  if (selectCategory) {
    getCategory();
    selectCategory.addEventListener("change", selectionCategory);
  }

  if (favoritesDiv) {
    getFavorites();
  }
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
    .then((data) => getMeals(data.meals))
    .catch((error) => console.log(error));
}

function getMeals(recipe) {
  const result = document.querySelector("#resultado");

  cleanHTML(result);

  const heading = document.createElement("H2");
  heading.classList.add("text-center", "text-black", "my-5");
  heading.textContent = recipe.length ? "Recipes" : "No data";
  result.appendChild(heading);

  console.log(recipe.length);

  recipe.forEach((food) => {
    //console.log(food)
    const { idMeal, strMeal, strMealThumb } = food;
    const container = document.createElement("DIV");

    container.classList.add("col-md-4");
    const card = document.createElement("DIV");
    card.classList.add("card", "mb-4");
    container.appendChild(card);

    const img = document.createElement("IMG");
    img.classList.add("card-img-top");
    img.alt = `Recipe image ${strMeal ?? recipe.tittle}`;
    img.src = strMealThumb ?? food.img;

    const cardBody = document.createElement("DIV");
    cardBody.classList.add("card-body");

    const heading = document.createElement("H3");
    heading.classList.add("card-title", "mb-3");
    heading.textContent = strMeal ?? food.tittle;

    const button = document.createElement("BUTTON");
    button.classList.add("btn", "w-100", "btn-danger");
    button.textContent = "Check Recipe";
    button.dataset.bsTarget = "#modal";
    button.dataset.bsToggle = "modal";

    button.onclick = function () {
      selectRecipe(idMeal ?? food.id);
    };

    cardBody.appendChild(heading);
    cardBody.appendChild(button);

    card.appendChild(img);
    card.appendChild(cardBody);

    container.appendChild(card);

    result.appendChild(container);
  });
  console.log(result);
}

function selectRecipe(idMeal) {
  console.log(idMeal);
  url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => getDetailRecipe(data.meals[0]))
    .catch((error) => console.log(error));
}

function cleanHTML(selector) {
  while (selector.firstChild) {
    selector.removeChild(selector.firstChild);
  }
}

function getDetailRecipe(data) {
  const { idMeal, strInstructions, strMeal, strMealThumb } = data;

  const modalTitle = document.querySelector(".modal .modal-title");
  const modalBody = document.querySelector(".modal .modal-body");
  console.log(strMealThumb);
  modalTitle.textContent = strMeal;
  modalBody.innerHTML = `
    <img class='img-fluid' src='${strMealThumb}' alt='${strMeal}' />
    <h3 class='my-3'>Instructions</h3>
    <p>${strInstructions}</p>
    <h3 class='my-3'> Ingredients and Quantities`;
  modalBootstrap.show();

  const listGroup = document.createElement("UL");
  for (let i = 1; i <= 20; i++) {
    if (data[`strIngredient${i}`]) {
      console.log(data[`strIngredient${i}`]);
      const ingredient = data[`strIngredient${i}`];
      const quantity = data[`strMeasure${i}`];

      const ingredientList = document.createElement("LI");
      ingredientList.textContent = `${ingredient} - ${quantity}`;
      listGroup.appendChild(ingredientList);
    }
  }
  modalBody.appendChild(listGroup);

  const modalFooter = document.querySelector(".modal-footer");
  cleanHTML(modalFooter);

  //close and favorite
  const btnFavorite = document.createElement("BUTTON");
  btnFavorite.classList.add("btn", "btn-danger", "col");
  btnFavorite.textContent = existSomeFavorite(idMeal)
    ? "Delete Favorite"
    : "Add Favorite";
  modalFooter.appendChild(btnFavorite);

  //safe localstorage
  btnFavorite.onclick = function () {
    if (existSomeFavorite(idMeal)) {
      deleteFavorite(idMeal);
      btnFavorite.textContent = "Add Favorite";
      showToast("Favorite deleted");
      return;
    }

    addFavorite({
      id: idMeal,
      tittle: strMeal,
      img: strMealThumb,
    });
    btnFavorite.textContent = "Delete Favorite";
    showToast("Favorite added");
  };

  const btnClose = document.createElement("BUTTON");
  btnClose.classList.add("btn", "btn-secondary", "col");
  btnClose.textContent = "Close";
  btnClose.onclick = function () {
    modalBootstrap.hide();
  };

  modalFooter.appendChild(btnClose);
  //console.log(strInstructions);
  /*data.meals.forEach((meal) => {
    const h3 = document.createElement("H3");
    h3.textContent = meal.strInstructions;
    modalBody.appendChild(h3)
    console.log(meal.strInstructions);
  });*/
}

function addFavorite(recipe) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];
  console.log(favorites);
  localStorage.setItem("favorites", JSON.stringify([...favorites, recipe]));
  //existFindFavorite(recipe);
}

function deleteFavorite(id) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];
  const newFavorite = favorites.filter((favorite) => favorite.id !== id);
  console.log(newFavorite);

  localStorage.setItem("favorites", JSON.stringify(newFavorite));
}

function existFindFavorite(recipe) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];
  const findId = favorites.find((favorite) => favorite.id === recipe.id);
  if (!findId) {
    localStorage.setItem("favorites", JSON.stringify([...favorites, recipe]));
  } else {
    console.log("id same");
  }
}

function showToast(msg) {
  const toastDiv = document.querySelector("#toast");
  const toastBody = document.querySelector(".toast-body");
  const toast = new bootstrap.Toast(toastDiv);
  toastBody.textContent = msg;
  toast.show();
}

function existSomeFavorite(id) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];
  return favorites.some((favorite) => favorite.id === id);
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

function getFavorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];
  if (favorites.length) {
    console.log(favorites);
    /*favorites.forEach((favorite) => {
      const { id, img, tittle } = favorite;
      const container = document.createElement("DIV");

      container.classList.add("col-md-4");
      const card = document.createElement("DIV");
      card.classList.add("card", "mb-4");
      container.appendChild(card);

      const imgElement = document.createElement("IMG");
      imgElement.classList.add("card-img-top");
      imgElement.alt = `Recipe image ${tittle}`;
      imgElement.src = img;

      const cardBody = document.createElement("DIV");
      cardBody.classList.add("card-body");

      const heading = document.createElement("H3");
      heading.classList.add("card-title", "mb-3");
      heading.textContent = tittle;

      cardBody.appendChild(heading);

      card.appendChild(imgElement);
      card.appendChild(cardBody);

      container.appendChild(card);

      favoritesDiv.appendChild(container);
    });*/
    getMeals(favorites)
  }else{
    const noFav = document.createElement('P')
    noFav.textContent = 'No favorites found'
    noFav.classList.add('fs-4', 'text-center', 'font-bold', 'mt-5')
    favoritesDiv.appendChild(noFav);
  }
}

document.addEventListener("DOMContentLoaded", initApp);
