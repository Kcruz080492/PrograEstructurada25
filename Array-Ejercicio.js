//PASO 1: Crear un array con nombres de asistentes

console.log("--- Sistema de Control de Asistentes---")
let asistentes = [
    "Maria Elena Vasquez",
    "Roberto Carlos Méndez",
    "Ana Sofia Rodriguez", 
    "Carmen Isabel Flores",
    "Diego Alejandro Morales"
]; 
console.log("\n---Lista completa de asistentes---");
console.log(asistentes);
console.log("\n---Total de asistentes registrados---");
console.log("Confirmacion de Asistentes: ", asistentes.length);

//Paso 2: Acceder a ciertos asistentes por su posición:
console.log("\n--- Acceder a ciertos asistentes por su posicion---");

//Primer asistente confirmado
console.log(`Primer asistente: ${asistentes[0]}`);

//Ultimo asistente confirmado
console.log(`Ultimo asistente: ${asistentes[asistentes.length-1]}`);

// Paso 3: Recorrer el array usando for...of
//Crear mensajes personalizados: 

console.log("\n--- Crear mensajes personalizados---");
for (let asistente of asistentes){
//Crear un mensaje personalizado concatenando strings 
let mensaje = (`Hola, ${asistente}, gracias por registrarte al evento.`); 
console.log(mensaje);
} 

console.log("\n--- Recorrido con for tradicional (con numeración) ---");

for (let i = 0; i < asistentes.length; i++) {
    let numeroAsistente = i + 1; // Empezar desde 1 en lugar de 0
    let nombre = asistentes[i];
    
    // Mensaje más elaborado con número de registro
    console.log(`Asistente #${numeroAsistente}: ${nombre.toUpperCase()}`);
    
    // Aplicar lógica condicional basada en la posición
    if (i === 0) {
        console.log("¡Primer registrado! felicidades, recibiras una placa conmemorativa.");
    } else if (i === asistentes.length - 1) {
        console.log("Último en registrarse, sera presentado como nuestro invitado de honor en la ceremonia.");
    }
}

//Generar codigos de identificación: 
console.log("\n--- Códigos de indentificación ---");
for (let i=0; i<asistentes.length; i++){
    let codigo = (`VIP2024-${(i+1).toString().padStart(4,0)}`);
    console.log(`${asistentes[i]} -> Código: ${codigo}`);
}
