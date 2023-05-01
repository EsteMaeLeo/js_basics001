//traversing DOM

const navegation = document.querySelector('.navegacion');
//spaces in blank they are consider elements
console.log(navegation.firstElementChild);
console.log(navegation.lastElementChild);
console.log(navegation.childNodes);
console.log(navegation.children); //real elements
console.log(navegation.children[0].nodeName); 
console.log(navegation.children[0].nodeType);

const cardTra = document.querySelector('.card');
console.log(cardTra.children[1].children[1])
cardTra.children[1].children[1].textContent = 'Change Text traversing'
console.log(cardTra.children[1].children[1].textContent)

console.log(cardTra.children[0])
//change image
cardTra.children[0].src = 'img/hacer2.jpg';

//parent
console.log(cardTra.parentNode);
console.log(cardTra.parentElement);

//sibling
console.log(cardTra);
console.log(cardTra.nextElementSibling);
console.log(cardTra.nextElementSibling.nextElementSibling);

const lastCard = document.querySelector('.card:nth-child(4)');
console.log(lastCard);
console.log(lastCard.previousElementSibling);

//eliminate DOM elements
const firstLink = document.querySelector('a');
console.log(firstLink)
firstLink.remove();

//from the father
const navegationEliminate = document.querySelector('.navegacion');
console.log(navegation.children);

navegation.removeChild(navegation.children[2]);

//create HTML
