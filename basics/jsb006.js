// objects
// function constructor type persona
function Persona(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.nombreCompleto = function () {
    return this.nombre + " " + this.apellido;
  };
}

//Prototype
Persona.prototype.tel = "443322";

let padre = new Persona("Peter", "Parker", "spidy@gmail.com");
console.log(padre);
console.log(padre.tel);
padre.tel = "22335566";
console.log(padre.tel);
console.log(padre.nombreCompleto());
let madre = new Persona("Mary", "Parker", "maryparker@gmail.com");
console.log(madre);
console.log(madre.tel);
console.log(madre.nombreCompleto());

/**********************/
//ways to create objects
let miObjeto = new Object();
//recommend way to create
let miObjeto2 = {};

let miCadena1 = new String("Hola");
let miCadena2 = "Hola";

let miNumero1 = new Number(1);
let miNumero2 = 1;

let miBoolean1 = new Boolean(false);
let miBoolean2 = false;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFunction1 = new Function();
let miFunction2 = function () {};

/**********************/
let persona = {
  nombre: "John",
  apellido: "Rod",
  email: "hnojdor@email.com",
  edad: 28,
  idioma: "es",
  get langu() {
    return this.idioma.toUpperCase();
  },
  set langu(langu) {
    this.idioma = langu.toUpperCase();
  },
  //get method
  get nombreCompleto() {
    return this.nombre + " " + this.apellido;
  },
};

console.log(persona.langu);
persona.langu = "en";
console.log(persona.langu);

console.log(persona.nombreCompleto);

//create object dynamically can assign the properties
let persona2 = new Object();
persona2.nombre = "Jaime";
persona2.direccion = "California";
persona2.tel = 153009988;
console.log(persona2);

/*/**Another way to access the properties */
console.log(persona["apellido"]);

//for in
for (nombrePropiedad in persona) {
  console.log(nombrePropiedad);
  console.log(persona[nombrePropiedad]);
}

//add and eliminate
persona.tel = "22222";
console.log(persona);

delete persona.tel;
console.log(persona);

//ways to print
console.log(persona.nombre + " " + persona.apellido + " " + persona.email);
//for in
for (nombrePropiedad in persona) {
  console.log(persona[nombrePropiedad]);
}

let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);

//call

let persona_1 = {
  nombre: "Juan",
  apellido: "Perez",
  nombreCompleto: function (titulo, telefono) {
    return titulo + ": " + this.nombre + " " + this.apellido + " " + telefono;
  },
};

let persona_2 = {
  nombre: "John",
  apellido: "Carpenter",
};

console.log(persona_1.nombreCompleto("Dr", "554433"));

//call function from another object
console.log(persona_1.nombreCompleto.call(persona_2, "Eng.", "6490909"));

//***********************apply
let persona_3 = {
  nombre: "Juan",
  apellido: "Perez",
  nombreCompleto: function (titulo, telefono) {
    //  return this.nombre + " " + this.apellido ;
    return titulo + ": " + this.nombre + " " + this.apellido + " " + telefono;
  },
};

let persona_4 = {
  nombre: "John",
  apellido: "Carpenter",
};

console.log(persona_3.nombreCompleto("Lic.", "909090"));
//call function from another object USING APPLY
let arrelgo = ["Ing", "323456"];
console.log(persona_3.nombreCompleto.apply(persona_4, arrelgo));
