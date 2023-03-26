//promise o promesas

let miPromsa = new Promise((resolved, rejected) => {
  let expresion = true;
  if (expresion) resolved("resolved correctly");
  else {
    rejected("rejected");
  }
});

miPromsa.then(
  (valor) => console.log(valor),
  (error) => console.log(error)
);

//using catch
miPromsa
  .then((valor) => console.log(valor))
  .catch((error) => console.log(error));

let promesa = new Promise((resolved) => {
  console.log("inicio de promesa");
  setTimeout(() => resolved("saludos con promesa y timeout"), 3000)
  console.log("fin de promesa");
});

promesa.then((valor) => console.log(valor));

//async una funcion va retornar una promesa

async function miFunctionConPromesa(){
  return 'Saludos con promesa y ASYNC'
}

miFunctionConPromesa().then(valor => console.log(valor))