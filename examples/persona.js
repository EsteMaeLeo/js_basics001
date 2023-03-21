
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
  }
  