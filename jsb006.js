// objects

let persona = {
  nombre: "John",
  apellido: "Rod",
  email: "hnojdor@email.com",
  edad: 28,
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
};

console.log(persona.nombre);

console.log(persona.nombreCompleto());

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