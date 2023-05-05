const cardDiv = document.querySelector(".card");

cardDiv.addEventListener("click", (e) => {
    //e.stopPropagation();
    //identify the click
    console.log(e.target);
    //delegations
    console.log(e.target.classList);
    if(e.target.classList.contains('titulo')){
        console.log('click on titulo')
    }
    if(e.target.classList.contains('precio')){
        console.log('click on precio')
    }
    if(e.target.classList.contains('card')){
        console.log('click on card')
    }
  });

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
//using parameters call functio to avoid//
//paragraph3.onclick= newFunction(1);
paragraph3.onclick= () => {newFunction(1)};

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

function newFunction(id){
    console.log('New function', id)
}