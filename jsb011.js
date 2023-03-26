/**************************POO **************************/
class Empleado {
  constructor(nombre, sueldo) {
    this._nombe = nombre;
    this._sueldo = sueldo;
  }

  obtenerDetalle() {
    return `Nombre: ${this._nombe} Sueldo: ${this._sueldo}`;
  }
}

class Gerente extends Empleado {
  constructor(nombre, sueldo, departemento) {
    super(nombre, sueldo);
    this._departamento = departemento;
  }

  obtenerDetalle() {
    //return `Nombre: ${this._nombe} Sueldo: ${this._sueldo} Departamento: ${this._departamento}`;
    return `Gerente: ${super.obtenerDetalle()} Departamento: ${this._departamento}`;
  }
}

function imprimir(tipo){
    console.log(tipo.obtenerDetalle());
}

let empleado1 = new Empleado('Juam', 2000)

let gerente1 = new Gerente("Charlie Skywalker", "5000", "Ventas");
//console.log(gerente1.obtenerDetalle());
// polimorfismo

imprimir(empleado1);
imprimir(gerente1);
