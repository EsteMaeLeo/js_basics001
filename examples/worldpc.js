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
    return `Dispositivo: ${this._tipoEntrada} ${this._marca}`
  }
}

class Raton extends DispositivoEntrada {
  static contadorRatones = 0;
  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca)
    this._idRaton = ++Raton.contadorRatones;
  }

  toString() {
    return `Id Raton: ${this._idRaton} Tipo Entrada: ${this._tipoEntrada} Marca: ${this._marca}`
  }

}

class Teclado extends DispositivoEntrada {
    static contadorTeclados= 0;
    constructor(tipoEntrada, marca) {
      super(tipoEntrada, marca)
      this._idTeclado = ++Teclado.contadorTeclados;
    }
  
    toString() {
      return `Id Teclado: ${this._idTeclado} Tipo Entrada: ${this._tipoEntrada} Marca: ${this._marca}`
    }
}

class monitor {}

class computadora {}

class Orden {}

/**************************Testing dispositivo **************************/
let usb1 = new DispositivoEntrada("USB", "MSI");
let usb2 = new DispositivoEntrada("USB", "HP");
let usb3 = new DispositivoEntrada("USB", "Logitech");
let blue1 = new DispositivoEntrada("BlueTooth", "DELL");
let blue2 = new DispositivoEntrada("BlueTooth", "Corsair");
console.log(usb1.toString(), usb2.toString(), usb3.toString())
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