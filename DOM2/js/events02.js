//input events
const search = document.querySelector(".busqueda");

//trigger when you click or write in the input all in one
search.addEventListener("input", (event) => {
  //console.log(event.target);
  console.log(event.target.value);
  //console.log(event);
});
