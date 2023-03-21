/**Ejercicio */

class Persona {
  //se asocia solo con la clase
  static contadorPersonas = 0; //atribute for the class

  constructor(nombre, apellido, edad) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
    this._idPersona = ++Persona.contadorPersonas;
  }
  get idPersona() {
    return this._idPersona;
  }
  get nombre() {
    return this._nombre;
  }
  get apellido() {
    return this._apellido;
  }

  get edad() {
    return this._edad;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }

  set edad(edad) {
    this._edad = edad;
  }

  nombreCompleto() {
    return (
      "ID: " +
      this._idPersona +
      " " +
      this._nombre +
      " " +
      this._apellido +
      " " +
      this._edad
    );
  }
  //overwrite toString
  toString() {
    //poliformismo multiples formas en tiempo de ejecucion el metodo
    //que se ejecuta depende si es una referencia de tipo padre o hijo
    return this.nombreCompleto();
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, edad, sueldo) {
    super(nombre, apellido, edad, sueldo);
    this._sueldo = sueldo;
    this._idEmpleado = Persona.idPersona;
  }
  get idEmpleado(){
    return this._idEmpleado;
  }
  get sueldo(){
    return this._sueldo
  }
  set sueldo(sueldo){
    this._sueldo = sueldo;
  }
  toString(){
    return super.toString() + " " + this._sueldo;
  }
}

//Testing Persona
let nPersona1 = new Persona("Walter","White","33");
console.log(nPersona1.toString());
console.log(nPersona1.nombre);
console.log(nPersona1.apellido);
console.log(nPersona1.edad);
console.log(nPersona1.idPersona);
//update values
nPersona1.nombre = "Waltito"
console.log(nPersona1.toString());
let nPersona2 = new Persona("Carlitos","White","20");
console.log(nPersona2.toString());

//Testing Empleado
let nEmpleado1 = new Empleado("Duck","White","22", "2300");
console.log(nEmpleado1.toString());
console.log(nEmpleado1.sueldo);
