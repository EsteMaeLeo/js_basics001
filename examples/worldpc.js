class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }

  get tipoEntrada() {
    return this._tipoEntrada;
  }
  set tipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }

  get marca() {
    return this._marca;
  }

  set marca(marca) {
    this._marca = marca;
  }

  toString() {
    return `Dispositivo: ${this._tipoEntrada} ${this._marca}`;
  }
}

class Raton extends DispositivoEntrada {
  static contadorRatones = 0;
  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRatones;
  }

  toString() {
    return `IdRaton: ${this._idRaton}, Tipo Entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
  }
}

class Teclado extends DispositivoEntrada {
  static contadorTeclados = 0;
  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclados;
  }

  toString() {
    return `IdTeclado: ${this._idTeclado}, Tipo Entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
  }
}

class Monitor {
  static contadorMonitores = 0;
  constructor(marca, tamano) {
    this._marca = marca;
    this._tamano = tamano;
    this._idMonitor = ++Monitor.contadorMonitores;
  }
  get marca() {
    return this._marca;
  }
  set marca(marca) {
    this._marca = marca;
  }
  get tamano() {
    return this._tamano;
  }
  set tamano(tamano) {
    this._tamano = tamano;
  }
  toString() {
    return `IdMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamano}`;
  }
}

class Computadora {
  static contadorComputadoras = 0;
  constructor(nombre, raton, teclado, monitor) {
    /*this._nombre = nombre;
    this.teclado.push(teclado);
    this._raton.push(raton);
    this._monitor.push(monitor);*/
    this._nombre = nombre;
    this._teclado = teclado;
    this._raton = raton;
    this._monitor = monitor;
    this._idComputadora = ++Computadora.contadorComputadoras;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get teclado() {
    return this._teclado;
  }
  set teclado(teclado) {
    this._teclado = teclado;
  }
  get raton() {
    return this._raton;
  }
  set raton(raton) {
    this._raton = raton;
  }
  get monitor() {
    return this._monitor;
  }
  set monitor(monitor) {
    this._monitor = monitor;
  }
  toString() {
    return `Computadora: ${
      this._idComputadora
    } \nMonitor [${this._monitor.toString()}] \nTeclado[${this.teclado.toString()}] \nRaton[${this.raton.toString()}]`;
  }
}

class Orden {
  static contadorOrdenes = 0;
  constructor(computadora) {
    this._computadoras = [];
    this._idOrden = ++this._contadorOrdenes;
  }
  agregarComputadora(computadora) {
    this._computadoras.push(computadora);
  }
  mostrarOrden() {
    let computadoraDetalle = "";
    for (let computadora of this._computadoras) {
      computadoraDetalle += "\n" + computadora.toString() + " ";
    }
    console.log(computadoraDetalle);
  }
}

/**************************Testing dispositivo **************************/
let usb1 = new DispositivoEntrada("USB", "MSI");
let usb2 = new DispositivoEntrada("USB", "HP");
let usb3 = new DispositivoEntrada("USB", "Logitech");
let blue1 = new DispositivoEntrada("BlueTooth", "DELL");
let blue2 = new DispositivoEntrada("BlueTooth", "Corsair");
console.log(usb1.toString(), usb2.toString(), usb3.toString());
console.log(blue1.toString(), blue2.toString());

/**************************Testing mouse **************************/
let mou1 = new Raton("USB", "MSI");
console.log(mou1.toString());
let mou2 = new Raton("USB", "Logitech");
console.log(mou2.toString());
/**************************Testing teclados **************************/
let tec1 = new Teclado("USB", "MSI");
console.log(tec1.toString());
let tec2 = new Teclado("USB", "HP");
console.log(tec2.toString());

/**************************Testing Monitor **************************/
let moni1 = new Monitor("HP", "15");
console.log(moni1.toString());
let moni2 = new Monitor("Dell", "18");
console.log(moni2.toString());
let moni3 = new Monitor("MSI", "25");
console.log(moni3.toString());

/**************************Testing Computadora **************************/
let comp1 = new Computadora("DELL", mou1, tec1, moni2);
console.log(comp1.raton.toString());
console.log(comp1.teclado.toString());
console.log(comp1.monitor.toString());
console.log(comp1.monitor.toString());
console.log(comp1.toString());

let comp2 = new Computadora("HP", mou2, tec2, moni1);
/**************************Testing Ordenes **************************/
let ord1 = new Orden();
ord1.agregarComputadora(comp1);
ord1.agregarComputadora(comp2);
ord1.mostrarOrden();
