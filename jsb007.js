/*****clases */
class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }
  get nombre() {
    return this._nombre;
  }
  get apellido() {
    return this._apellido;
  }

  set apellido(apellido) {
    this._apellido = apellido;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
}

let persona1 = new Persona("John", "Carpenter");
//calling the method get
console.log(persona1.nombre);
console.log(persona1.apellido);

persona1.nombre = "Cristopher";
console.log(persona1.nombre);

let person2 = new Persona("William", "Carpenter");
console.log(person2);
