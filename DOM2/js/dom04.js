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

const imagen = document.querySelector('.card img')
console.log(imagen);
imagen.src = 'img/hacer2.jpg'