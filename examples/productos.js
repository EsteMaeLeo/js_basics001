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

  toString() {
    return `ID Prod: ${this._idProducto} Nombre: ${this._nombre} Precio: ${this._precio}`;
  }
}

class Orden {
  static contadorOrdenes = 0;

  static get MAX_PRODUCTOS() {
    return 5;
  }

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._productos = [];
    this._contadorProductosAgregados = 0;
  }

  get idOrden() {
    return this._idOrden;
  }

  agregarProducto(producto) {
    if (this._productos.length < Orden.MAX_PRODUCTOS) {
      this._productos.push(producto);

      //otra formas this._productos[this._contadorProductosAgregados++] = producto;
    } else {
      console.log("No se puede agregar mas productos");
    }
  }

  calcularTotal() {
    let totalVenta = 0;
    for (let producto of this._productos) {
      totalVenta += producto.precio; //totalVenta = totalVenta + producto.precio
    }
    return totalVenta;
  }

  mostrarOrden() {
    let productosOrden = "";
    for (let producto of this._productos) {
      productosOrden += "\n{" + producto.toString() + "} ";
    }
    console.log(
      `Orden: ${
        this._idOrden
      } Total: ${this.calcularTotal()}, Productos: ${productosOrden}`
    );
  }
}

let producto1 = new Productos("Pants", 80);
let producto2 = new Productos("Star Wars Tshirt", 15);
let producto3 = new Productos("Real Madrid Jersey", 95);
let producto4 = new Productos("Levis Jeans", 59);
console.log(producto1.toString());
console.log(producto2.toString());

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto4);
orden2.agregarProducto(producto3);
orden2.mostrarOrden();