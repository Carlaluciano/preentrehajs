let cookies;

class producto {
    constructor (nombre, precio, stock,){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.descripcion = descripcion;
    }
   
   variedadProducto(nombre){
       return this.producto == nombre;
   }

}

const cookies1 = new cookies ("Vainilla",50,100,"cookies con sabor vainilla");
const cookies2 = new cookies ("Chocolate",45,70,"cookies sabor chocolate");
const cookies3 = new cookies ("Chispitas",75,150,"cookies sabor vainilla con chips de chocolate");
const cookies4 = new cookies ("brownie",100,80,"cookies con base de brownie");

for (let index = 0; index < 5; index++) {
    let entrada = prompt("Ingresar la cookie que desea comprar");
    if (cookies1.variedadProducto(entrada)){
        alert(entrada + " La cookie ingresada es " + cookies1.nombre + "hay stock");
    }
    if (cookies2.variedadProducto(entrada)){
        alert(entrada + " La cookie ingresada es" + cookies2.nombre + "hay stock");
    }
    if (cookies3.variedadProducto(entrada)){
        alert(entrada + " La galletita ingresada es " + cookies3.nombre + "hay stock");
    }
    if (cookies4.variedadProducto(entrada)){
        alert(entrada + "La galletita ingresada es" + cookies4.nombre + "Hay stock");
    }
}




