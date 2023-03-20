//strings
var name = "Carl";
var lastname = "Marxs";

var fullname = name + " " + lastname;
console.log(fullname);

var full2 =  "Carl"+ " " + "Marxs";
console.log(full2);

var x1 = name + 2 + 19;
console.log(x1);

//using parentesis add the values
x1 = name + (2 + 19);
console.log(x1);
//JS evaluate first from left to rigth if there is number evaluate first the numbers
x1 = 2 + 19 + name;
console.log(x1);

/***************************************************************************************/
//new practice LET and CONST
let name_new = "Charlie";
console.log(name_new);

const last_new = "Brown";

//Best practice
let nameUser = "William Marxs";
console.log(nameUser);

//not same case sensitive 
let nameuser = "April Marxs";
console.log(nameuser);

//variable can have number at first character or reserve names
let a1nameUser;
let $nameUser;
let _1nameUser;

let x, y;
x = 10; y = 20;
let z = x + y;
console.log(z);