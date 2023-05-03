console.log(1);
//after all html is loaded  waits the html is full loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("Document Ready");
  console.log(2);
});

console.log(3);

//events mouse
const nav = document.querySelector(".navegacion");
nav.addEventListener("dblclick", () => {
  console.log("mouse dblclick");
  nav.style.backgroundColor = "back";
});

nav.addEventListener("click", () => {
  console.log("click mouse");
});

nav.addEventListener("mouseenter", () => {
  console.log("mouse enter");
  nav.style.backgroundColor = "white";
});

nav.addEventListener("mouseout", () => {
  console.log("mouse out");
  nav.style.backgroundColor = "transparent";
});

nav.addEventListener("mousedown", () => {
  console.log("mouse down");
  nav.style.backgroundColor = "yellow";
});

nav.addEventListener("mouseup", () => {
  console.log("mouse up");
  nav.style.backgroundColor = "green";
});

//input events
const search = document.querySelector(".busqueda");

search.addEventListener("keydown", () => {
  console.log("escribiendo keydown...");
});

search.addEventListener("keyup", () => {
  console.log("escribiendo keydup...");
});

//when you click input and then click out
search.addEventListener("blur", () => {
  console.log("escribiendo blur...");
});

search.addEventListener("copy", () => {
  console.log("copy...");
});

search.addEventListener("paste", () => {
  console.log("paste...");
});

search.addEventListener("cut", () => {
  console.log("cut...");
});

//trigger when you click or write in the input all in one
search.addEventListener("input", (event) => {
  console.log("input...");
});
