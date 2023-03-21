class Productos {
  static contadorProducto = 0;
  constructor(nombre, precio) {
    this._nombre = nombre;
    this._precio = precio;
    this._idProducto = ++Productos.contadorProducto;
  }

  get idProductor() {
    return this._idProducto;
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get precio() {
    return this._precio;
  }
  set precio(precio) {
    this._precio = precio;
  }

  toString(){
    return `ID Prod: ${this._idProducto} Nombre: ${this._nombre} Precio: ${this._precio}`;
  }
}

let producto1 = new Productos("Pants", 80);
let producto2 = new Productos("Star Wars Tshirt", 15);
console.log(producto1.toString());
console.log(producto2.toString());