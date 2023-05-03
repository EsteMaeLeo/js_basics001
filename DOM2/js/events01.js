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
