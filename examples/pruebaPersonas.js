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
  
    //overwrite toString
    toString() {
      //poliformismo multiples formas en tiempo de ejecucion el metodo
      //que se ejecuta depende si es una referencia de tipo padre o hijo
      /*return (
        "ID: " +
        this._idPersona +
        " " +
        this._nombre +
        " " +
        this._apellido +
        " " +
        this._edad
      );*/
      return `ID: ${this.idPersona} ${this._nombre} ${this._apellido} ${this._edad}`
    }
  }
  
  class Empleado extends Persona {
    
    static idEmpleado = 0;

    constructor(nombre, apellido, edad, sueldo) {
      super(nombre, apellido, edad);
      this._sueldo = sueldo;
      this._idEmpleado = ++Empleado.idEmpleado;
    }
    get idEmpleado() {
      return this._idEmpleado;
    }
    get sueldo() {
      return this._sueldo;
    }
    set sueldo(sueldo) {
      this._sueldo = sueldo;
    }
    toString() {
      return `${super.toString()} ${this._sueldo} ID empleado: ${this._idEmpleado}`;
    }
  }
  
  class Cliente extends Persona {
    static idCliente = 0;

    constructor(nombre, apellido, edad, fechaRegistro) {
      super(nombre, apellido, edad);
      this._fechaRegistro = fechaRegistro;
      this._idCliente = ++Cliente.idCliente;
    }
    get idCliente() {
      return this._idCliente;
    }
    get fechaRegistro() {
      return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro) {
      this._fechaRegistro = fechaRegistro;
    }
    toString() {
        return `${super.toString()} ${this._fechaRegistro} ID cliente: ${this._idCliente}`;
    }
  }
  
  //Testing Persona
  let nPersona1 = new Persona("Walter", "White", "33");
  console.log(nPersona1.toString());
  console.log(nPersona1.nombre);
  console.log(nPersona1.apellido);
  console.log(nPersona1.edad);
  console.log(nPersona1.idPersona);
  //update values
  nPersona1.nombre = "Waltito";
  console.log(nPersona1.toString());
  let nPersona2 = new Persona("Carlitos", "White", "20");
  console.log(nPersona2.toString());
  
  //Testing Empleado
  let nEmpleado1 = new Empleado("Duck", "White", "22", "2300");
  console.log(nEmpleado1.toString());
  console.log(nEmpleado1.sueldo);

  let nEmpleado2 = new Empleado("Lugi", "White", "42", "5300");
  console.log(nEmpleado2.toString());
  console.log(nEmpleado2.sueldo);
  
  //testing Cliente
  fechaRegistro = new Date();
  console.log(fechaRegistro);
  
  let nCliente1 = new Cliente("Peper", "White", "45", fechaRegistro);
  console.log(nCliente1.toString());
  console.log(nCliente1.fechaRegistro);
  