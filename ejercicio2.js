/*Ejercicio 2: 
Una tienda de electrónicos requiere un sistema para gestionar su catálogo de productos.
 Se necesita crear un objeto que represente un producto específico con las siguientes 
 características: código de producto, nombre, marca, precio, cantidad en stock y 
 estado de disponibilidad. El sistema debe permitir actualizar el precio del producto y 
 modificar la cantidad en stock cuando se realice una venta.

Tareas a realizar:

Crear un objeto producto con las propiedades especificadas
Mostrar la información inicial del producto
Simular una venta de 3 unidades (reducir el stock)
Actualizar el precio del producto (aumentar 10%)
Agregar una propiedad categoria con el valor correspondiente
Mostrar la información actualizada del producto*/

//Crear objeto Producto
const producto = {
    codigoProducto: "N1",
    nombre: "Computadora",
    marca: "Dell",
    precio: 850.75,
    stock: 10,
    disponible: false
}

//Mostrar informacion inicial
console.log("=== Información Inicial===")
console.log("Codigo:", producto.codigoProducto);
console.log("Nombre:", producto.nombre);
console.log("Marca:", producto.precio);
console.log("Cantidad Dispnible:", producto.stock + "unidades");
console.log("Disponible:", producto.disponible ? "Si" : "No" );

//Procesando una venta y reducir 3 unidades de stock 
console.log("\n=== Procesando una Venta ===")
console.log("Cantidad de articulos a comprar: 3")
producto.stock -=3;
console.log("Cantidad Dispnible:", producto.stock + " unidades"); 

//Actualizar el precio del poducto (aumentar 10%)
console.log("\n=== Precio aumentado en el 10% ===")
const precioAnterior = producto.precio;
let porcentaje = 0.10;
Aumento = producto.precio * porcentaje;
producto.precio = producto.precio + Aumento
console.log("El precio anterior: ", precioAnterior )
console.log("El precio actualizado:" , producto.precio.toFixed(2));

//Agregar una propiedad categoria con el valor correspondiente
producto.categoria = "Electonicos"; 

//Mostrar la informacion actualizada del producto 
console.log("\n=== Información Actualizada ===")
console.log("Codigo:", producto.codigoProducto);
console.log("Categoria:", producto.categoria);
console.log("Nombre:", producto.nombre);
console.log("Marca:", producto.precio.toFixed(2));
console.log("Cantidad Dispnible:", producto.stock + " unidades");
console.log("Disponible:", producto.disponible ? "Si" : "No" );
