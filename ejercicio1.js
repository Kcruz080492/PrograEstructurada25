//Creacion de Objeto
const empleado = {
nombreCompleto: "Karla Cecilia Cruz", 
edad: 25,
cargo: "Desarrollador Web", 
salarioMensual: 1000, 
email: "kcruz080492@gmil.com"
}; 

//Imprimir todo el objeto
//console.log(empleado);

//Acceder a cada propiedad
console.log("=== Información del Empleado===");
console.log("Nombre:", empleado.nombreCompleto); 
console.log("Edad:", empleado.edad + " años");
console.log("Cargo:", empleado.cargo);
console.log("Salario:", empleado.salarioMensual); 
console.log("Correo Electronico:", empleado.email);

//Calcular y mostrar el salario anual
let salarioAnual = empleado.salarioMensual * 12;
console.log("Salario Anual:", salarioAnual); 

//Agregar una nueva propiedad "Departamento"
empleado.departamento = "Desarrollo"; 

//Mostrar la informacion Completa del empleado: 
console.log("\n=== Información del Empleado===");
console.log("Nombre:", empleado.nombreCompleto); 
console.log("Edad:", empleado.edad + " años");
console.log("Departamento:", empleado.departamento);
console.log("Cargo:", empleado.cargo);
console.log("Salario:", empleado.salarioMensual); 
console.log("Salario Anual: $", salarioAnual)
console.log("Correo Electronico:", empleado.email);
