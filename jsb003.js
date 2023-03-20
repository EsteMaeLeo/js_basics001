//basics in JS for aritmetic operations
let a = 3;
let b = 2;
let z = a + b;
console.log("resultado de la suma: ", z);

z = a - b;
console.log("resultado de la resta: ", z);

z = a * b;
console.log("resultado de la multiplicacion: ", z);

z = a / b;
console.log("resultado de la division: ", z);

z = a % b;
console.log("resultado de la operacion modulo: ", z);

z = a ** b;
console.log("resultado de la exponencia: ", z);

//decrement and increment
z = a + b;
//preincrement operator ++ before variable
z = ++a;
console.log(a);
console.log(z);

//postincrement operator ++ after variable move the value
//variable then increment the varible
z = b++;
console.log(b);
console.log(z);

//decremento
z = --a;
console.log(a);
console.log(z);

z = b--;
console.log(b);
console.log(z);

/*********************************************/
let c = 1,
  d = 4;
a = 3;
b - 2;
z = a * b + c / 4;
console.log(z);

z = c + (a * b) / d;
console.log(z);

z = ((c + a) * b) / c;
console.log(z);

let x = 1;
x += 3; // x = x + 1
console.log(x);

x -= 2; // x = x - 2
console.log(x);
x = 6;
x *= x;
console.log(x);
x /= x;
console.log(x);
x %= x;
console.log(x);
x = 6;
x **= x;
console.log(x);

/**************************************************/
a = 3;
b = 2;
c = "3";

z = a == b; //check the value not matter the type
console.log(z);
z = a == c; //check the value not matter the type
console.log(z);

z = a === c; // check value and the types
console.log(z);

/**************************************************/

z = a != b; //check the value not matter the type
console.log(z);
z = a != c; //check the value not matter the type
console.log(z);
z = a !== c; // check value and the types because are equal and diferent type return true
console.log(z);

/**************************************************/
z = a < b;
console.log(z);
b = 3;
z = a <= b;
console.log(z);
b = 2;
z = a > b;
console.log(z);
b = 2;
z = a >= b;
console.log(z);

/**************************************************/
let par = 10;

if (par % 2 == 0) {
  console.log("Bingo is pair");
} else {
  console.log("NOPE is not pair");
}

let edad = 28;
adulto = 18;
if (edad >= adulto) {
  console.log("Yeap is an adult you can drink now");
} else {
  console.log("Dude nope you are not an adult");
}

/*****************AND*****************************/
let a1 = 5;
let valMin = 0;
let valMax = 10;

if (a1 >= valMin && a1 <= valMax) {
  console.log("value is in the range");
} else {
  console.log("values is not in the range");
}

/*****************OR*****************************/

let vacaciones = true, diaDescanso = false;
if(vacaciones || diaDescanso){
    console.log("Puede asistir al juego");
}else{
    console.log("NO! Puede asistir al juego");
}