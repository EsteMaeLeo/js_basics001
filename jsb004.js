/****************Conditions***************************/
let condicion = true;

if (condicion) {
  console.log("condicion verdadera");
} else {
  console.log("Falso");
}

let numero = 3;

if (numero == 1) {
  console.log("numero uno");
} else if (numero == 2) {
  console.log("numero dos");
} else if (numero == 3) {
  console.log("numero tres");
} else if (numero == 4) {
  console.log("numero cuatro");
} else {
  console.log("numero desconocido");
}

// Seasons most comment are in spanish
let mes = 9;
let estacion;
if (mes == 1 || mes == 2 || mes == 12) {
  estacion = "invierno";
} else if (mes == 3 || mes == 4 || mes === 5) {
  estacion = "primavera";
} else if (mes == 6 || mes == 7 || mes == 8) {
  estacion = "verano";
} else if (mes == 9 || mes == 10 || mes == 11) {
  estacion = "otoño";
} else {
  estacion = "valor incorrecto";
}

console.log(estacion);

// Message depends of the hour
let hour = 19;
let msg;
if (hour >= 6 && hour <= 11) {
  msg = "buenos dias";
} else if (hour >= 12 && hour <= 18) {
  msg = "buenas tardes";
} else if (hour >= 19 && hour <= 24) {
  msg = "buenas noches";
} else if (hour >= 0 && hour <= 6) {
  msg = "durmiendo";
} else {
  msg = "valor incorrecto";
}

console.log(msg);

// Switch
numero = 4;

let numeroTexto = "valor desconocido";

switch (numero) {
  case 1:
    numeroTexto = "Numero uno";
    break;
  case 2:
    numeroTexto = "numero dos";
    break;
  case 3:
    numeroTexto = "numero tres";
    break;
  case 4:
    numeroTexto = "numero cuatro";
    break;
  default:
    numeroTexto = "numero no encontrado";
}
console.log(numeroTexto);

// switch season

mes = 11;
estacion = "estacion desconocida";
switch (mes) {
  case 1:
  case 2:
  case 12:
    estacion = "invierno";
    break;
  case 3:
  case 4:
  case 5:
    estacion = "primavera";
    break;
  case 6:
  case 7:
  case 8:
    estacion = "verano";
    break;
  case 9:
  case 10:
  case 11:
    estacion = "otoño";
    break;
  default:
    estacion = "valor incorrecto";
    break;
}
console.log(estacion);
