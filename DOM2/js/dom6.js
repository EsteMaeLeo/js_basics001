//create HTML
//create new link

const link = document.createElement("a");
link.textContent = "New Links";

link.href = "/new link";
link.target = "_blank";
link.setAttribute("data-link", "new-link");
link.classList.add("link-new-class");
console.log(link);
const navegation = document.querySelector(".navegacion");
//will add at end
//navegation.appendChild(link);
console.log(navegation.children);
//need pass location where you can insert
navegation.insertBefore(link, navegation.children[1]);

//adding new card
const paragraph1 = document.createElement("P");
paragraph1.textContent = "Concert";
paragraph1.classList.add("categoria", "concierto");

const paragraph2 = document.createElement("p");
paragraph2.textContent = "Heavy Metal Concert";
paragraph2.classList.add("titulo");

const paragraph3 = document.createElement("p");
paragraph3.textContent = "Price $100";
paragraph3.classList.add("precio");
console.log(paragraph3);
//create div
const info = document.createElement("div");
info.classList.add("info");

info.appendChild(paragraph1);
info.appendChild(paragraph2);
info.appendChild(paragraph3);

const image = document.createElement('img');
image.src = 'img/hacer2.jpg';

const card = document.createElement('div');
card.classList.add('card');

//append img
card.appendChild(image);
//append ino
card.appendChild(info);

console.log(card);

//insert in HTML

const container = document.querySelector('.hacer .contenedor-cards');
container.appendChild(card);