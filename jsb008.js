/*****clases */
// Not possible hosting on classes

class Persona {
  static contadorObjetosPersona = 0;
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
//is not posible from the object persona1.saludar();
Persona.saludar();
Persona.saludar2(persona1);

console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

Empleado.saludar();
Empleado.saludar2(empleado1);
