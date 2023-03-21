/*****clases */
// Not possible hosting on classes

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

  nombreCompleto() {
    return this._nombre + " " + this._apellido;
  }
  //overwrite toString
  toString(){
    //poliformismo multiples formas en tiempo de ejecucion el metodo
    //que se ejecuta depende si es una referencia de tipo padre o hijo
    return this.nombreCompleto();
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido); //constructor from the super class
    this._departamento = departamento;
  }
  get departamento() {
    return this._departamento;
  }
  set departamento(departamento) {
    this._departamento = departamento;
  }
  //overwrite
  nombreCompleto(){
    return super.nombreCompleto() + " " + this._departamento;
  }

}

let persona1 = new Persona("John", "Carpenter");
console.log(persona1);
console.log(persona1.toString());

let empleado1 = new Empleado("Yisus", "Fisherman", "Sales");

console.log(empleado1.nombreCompleto());

console.log(empleado1.toString());

//calling the method get
console.log(persona1.nombre);
console.log(persona1.apellido);

persona1.nombre = "Cristopher";
console.log(persona1.nombre);

let person2 = new Persona("William", "Carpenter");
console.log(person2);
