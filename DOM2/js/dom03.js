//return only one element. ID find first
const form = document.getElementById("formulario");
console.log(form);

//queyselector ID and CLASS return first found
const querySelectorCard = document.querySelector(".card");
console.log(querySelectorCard);

const info = document.querySelector(".premium .info");
console.log(info);

//select second card
const secondCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(secondCard);

//select formulario using queryselector using ID need #
const form2 = document.querySelector("#formulario");
console.log(form2);

//select HTML elements
const nav = document.querySelector('nav');
console.log(nav);
