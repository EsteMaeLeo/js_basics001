//function declarations able to call function before the definition

function add(number1, number2) {
  let result = number1 + number2;
  console.log(`Result: ${result}`);
}

add(2, 2);

//function expression you can call function before the definition

const add2 = function (number1, number2) {
  let result = number1 + number2;
  console.log(`Result: ${result}`);
};

add2(2, 5);

//difference method and function... method: name variable .nameMethod
const numero1 = 20;
const numero2 = "20";

console.log(parseInt(numero2)); //function parseInt
console.log(numero1.toString());

//Parameters in function and default parameters
function saidHello(name = "Unknown", lastname = "") {
  console.log(`Hello ${name} ${lastname}`);
}

saidHello("John", "Connor");
saidHello("Glen");
saidHello();

//function return values
function addReturn(number1, number2) {
  return number1 + number2;
}

const result = addReturn(94, 78);
console.log(result);

//function on  the objects

const player = {
  play: function (id) {
    console.log(`playing the song ${id}...`);
  },
  pause: function (id) {
    console.log(`pause the song ${id}...`);
  },
  deletefunction: function (id) {
    console.log(`deleting the song ${id}...`);
  },
  createPlayList: function (name1) {
    console.log(`${name1} play list create...`);
  },
  deletePlayList: function (name1) {
    console.log(`${name1} play list deleted...`);
  },
};

player.play("2");
player.pause("2");
player.deletefunction("2");
player.createPlayList("Rock songs");
player.deletePlayList("Delete Pop songs");

//arrow functions
const learning = function (technology, technology2) {
  console.log(`Learning ${technology} ${technology2}`);
};
//one line can eliminate the {}
const learning2 = (technology, technology2) =>
  `Learning ${technology} ${technology2}`;

learning("Javascript", "nodeJS");
console.log(learning2("Javascript", "nodeJS"));

//Arrow using map and foreach

const shoppAmazon = [
  { name: "Iphone", price: 750 },
  { name: "VGA Card", price: 250 },
  { name: "Mouse", price: 50 },
  { name: "Ipad", price: 750 },
  { name: "HP Monitor 22", price: 350 },
];

for (let i = 0; i < shoppAmazon.length; i++) {
  console.log(`${shoppAmazon[i].name} price: ${shoppAmazon[i].price}`);
}

//foreach
shoppAmazon.forEach((product) =>
  console.log(`${product.name} price: ${product.price}`)
);

//map
const newShopp = shoppAmazon.map(
  (product) => `${product.name} price: ${product.price}`
);

console.log(newShopp);

const playerArrow = {
  play: (id) => console.log(`playing the song ${id}...`),
  pause: (id) => console.log(`pause the song ${id}...`),
  deletefunction: (id) => console.log(`deleting the song ${id}...`),
  createPlayList: (name1) => console.log(`${name1} play list create...`),
  deletePlayList: (name1) => console.log(`${name1} play list deleted...`),

  set newSong(song) {
    this.song = song;
    console.log(`Adding song: ${song}`)
  },

  get songName(){
    console.log(`${this.song}`)
  }
};

playerArrow.newSong = 'Echoes'
playerArrow.songName;

playerArrow.play("1");
playerArrow.pause("1");
playerArrow.deletefunction("1");
playerArrow.createPlayList("Rock");
playerArrow.deletePlayList("Pop");
