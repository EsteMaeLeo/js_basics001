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

// cycles
//while
let contador = 0;
while (contador < 3) {
  console.log(contador);
  contador++;
}
console.log("--End--");

//do while
contador = 0;
do {
  console.log(contador);
  contador++;
} while (contador < 3);
console.log("--End--");

//FOR
for (let i = 0; i < 3; i++) {
  console.log(i);
}
console.log("--End--");

//BREAK
for (let cont = 0; cont <= 10; cont++) {
  if (cont % 2 == 0) {
    console.log(cont);
    break;
  }
}
console.log("--End--");

//CONTINUE
for (let cont2 = 0; cont2 <= 10; cont2++) {
  if (cont2 % 2 !== 0) {
    continue;
  }
  console.log(cont2);
}
console.log("--End--");

//labels but not recommended usage
start:
for (let cont3 = 0; cont3 <= 10; cont3++) {
    if (cont3 % 2 !== 0) {
      continue start;
    }
    console.log(cont3);
  }
  console.log("--End--");