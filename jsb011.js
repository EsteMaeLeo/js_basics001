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
    return `Nombre: ${this._nombe} Sueldo: ${this._sueldo} Departamento: ${this._departamento}`;
  }
}

let gerente1 = new Gerente("Charlie Skywalker", "5000", "Ventas");
console.log(gerente1.obtenerDetalle());
