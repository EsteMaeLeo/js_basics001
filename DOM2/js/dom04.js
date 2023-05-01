const head = document.querySelector('.contenido-hero h1');
; //if css visibility:hidden will not found 
console.log(head.innerText)
; //if css visibility:hidden will found 
console.log(head.textContent); 
console.log(head.innerHTML); //text and HTML

const headText = document.querySelector('.contenido-hero h1').textContent;
console.log(headText);

const newHeadingText = 'New Heading using variables'
document.querySelector('.contenido-hero h1').textContent = newHeadingText;
document.querySelector('.contenido-hero h1').textContent = headText;
const imagen = document.querySelector('.card img')
console.log(imagen);
imagen.src = 'img/hacer2.jpg'

const headH1 = document.querySelector('h1')

headH1.style.backgroundColor = 'black';
headH1.style.fontFamily = "Arial";
headH1.style.textTransform = 'uppercase'
console.log(headH1.style);

//remove class
card = document.querySelector('.card');
card.classList.add('new-class')
card.classList.remove('card')
console.log(card.classList);

//traversing DOM

const navegation = document.querySelector('.navegacion');
//spaces in blank they are consider elements
console.log(navegation.childNodes);
console.log(navegation.children); //real elements
console.log(navegation.children[0].nodeName); 
console.log(navegation.children[0].nodeType);

const cardTra = document.querySelector('.card');
console.log(cardTra.children[1].children[1])
cardTra.children[1].children[1].textContent = 'Change Text traversing'
console.log(cardTra.children[1].children[1].textContent)

console.log(cardTra.children[0])