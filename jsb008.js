/*****clases */
// Not possible hosting on classes

class Persona {
  //se asocia solo con la clase
  static contadorObjetosPersona = 0; //atribute for the class

  //se asocia con los objetos a crear
  email = "email@default.com"; // atributte for the objects

  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    //access static use the class
    Persona.contadorObjetosPersona++;
    console.log("se incrementa contador: " + Persona.contadorObjetosPersona);
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
  toString() {
    //poliformismo multiples formas en tiempo de ejecucion el metodo
    //que se ejecuta depende si es una referencia de tipo padre o hijo
    return this.nombreCompleto();
  }

  //static method
  static saludar() {
    console.log("Hello Persona from method static");
  }

  static saludar2(persona) {
    console.log(persona.nombre + " " + persona.apellido);
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
  nombreCompleto() {
    return super.nombreCompleto() + " " + this._departamento;
  }
}

let persona1 = new Persona("john", "Willson");
let empleado1 = new Empleado("Yisus", "Fisherman", "Sales");

console.log(persona1.email);
console.log(empleado1.email);

//is not posible from the object persona1.saludar();
Persona.saludar();
Persona.saludar2(persona1);

console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

Empleado.saludar();
Empleado.saludar2(empleado1);

/** STATIC ANOTHER EXAMPLE*/
console.log("/** STATIC ANOTHER EXAMPLE*/");
class PersonaNew {
  //se asocia solo con la clase
  static contadorObjetosPersonas = 0; //atribute for the class

  static get MAX_OBJ() {
    return 5;
  }

  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    //access static use the class
    if (PersonaNew.contadorObjetosPersonas < PersonaNew.MAX_OBJ) {
      this.idPersona = ++PersonaNew.contadorObjetosPersonas;
    } else {
      console.log("Superado el maximo de objetos permitidos");
    }
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
    return "ID: " + this.idPersona + " " + this._nombre + " " + this._apellido;
  }
  //overwrite toString
  toString() {
    //poliformismo multiples formas en tiempo de ejecucion el metodo
    //que se ejecuta depende si es una referencia de tipo padre o hijo
    return this.nombreCompleto();
  }

  //static method
  static saludar() {
    console.log("Hello Persona from method static");
  }

  static saludar2(persona) {
    console.log(persona.nombre + " " + persona.apellido);
  }
}

let persona2 = new PersonaNew("Juanes", "Willson");
console.log(persona2.nombreCompleto());
console.log(persona2.toString());

let persona3 = new PersonaNew("Charlie2", "Brown");
console.log(persona3.toString());

console.log(PersonaNew.MAX_OBJ);

let persona4 = new PersonaNew("Charlie3", "Brown");
console.log(persona4.toString());

let persona5 = new PersonaNew("Charlie4", "Brown");
console.log(persona5.toString());

let persona6 = new PersonaNew("Charlie45", "Brown");
console.log(persona6.toString());

let persona7 = new PersonaNew("Charlie6", "Brown");
console.log(persona7.toString());