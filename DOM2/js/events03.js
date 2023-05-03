const form = document.querySelector("#formulario");

form.addEventListener("submit", valForm);

function valForm(e) {
  //prevent load or sent form o click
  e.preventDefault();

  console.log(e.target);
}

window.addEventListener("scroll", () => {
  console.log("scroll");
  //return value scroll
  const scrollPX = window.scrollY;
  //console.log(scrollPX)

  const premium = document.querySelector(".premium");
  //distance to get to the element
  const ubication = premium.getBoundingClientRect();
  console.log(ubication);

  if (ubication.top < 784) {
    console.log("Elment is visible");
  } else {
    console.log("element is not visible");
  }
});

//even bubling