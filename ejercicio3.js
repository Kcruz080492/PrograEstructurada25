/*Enunciado
El departamento de registro académico de una universidad necesita almacenar 
la información de los estudiantes. Se requiere crear un objeto que 
contenga: número de carnet, nombre del estudiante, carrera, año de 
ingreso y estado académico. Además, se debe implementar la funcionalidad 
para extraer el nombre y la carrera en variables separadas, calcular los 
años de estudio transcurridos y actualizar el estado académico según corresponda.
Tareas a realizar:

Crear un objeto estudiante con las propiedades mencionadas
Extraer el nombre y la carrera en variables separadas
Calcular los años transcurridos desde el ingreso
Agregar una propiedad añosTranscurridos con el cálculo realizado
Actualizar el estado académico si han transcurrido más de 4 años
Mostrar toda la información del estudiante*/

// Crear objetos
const alumno = {
    carnet: "M20220056", 
    nombre: "Karla Cecilia Cruz", 
    carrera: "Maestria en Docencia", 
    ingreso: 2025,
    estado: "Activo"
}
 //Estraer el nommbre y carrera en variables separadas
 const nombreAlumno = alumno.nombre;
 const carreraEstudiante= alumno.carreraEstudiante;

 console.log("=== Datos extraidos ===");
 console.log("Nombre del Estudiante:", nombreAlumno);
 console.log("Carrera de estudio:", carreraEstudiante);
 
// 3. Calcular años transcurridos
const añoActual = new Date().getFullYear();
const añosTranscurridos = añoActual - estudiante.añoIngreso;

console.log("\n=== CÁLCULO DE AÑOS ===");
console.log("Año actual:", añoActual);
console.log("Año de ingreso:", estudiante.añoIngreso);
console.log("Años transcurridos:", añosTranscurridos);

// 4. Agregar propiedad años transcurridos
estudiante.añosTranscurridos = añosTranscurridos;

// 5. Actualizar estado académico si han transcurrido más de 4 años
if (añosTranscurridos > 4) {
    estudiante.estadoAcademico = "Próximo a graduarse";
    console.log("\n=== ACTUALIZACIÓN DE ESTADO ===");
    console.log("Estado actualizado:", estudiante.estadoAcademico);
}

// 6. Mostrar información completa
console.log("\n=== INFORMACIÓN COMPLETA DEL ESTUDIANTE ===");
console.log("Carnet:", estudiante.carnet);
console.log("Nombre:", estudiante.nombre);
console.log("Carrera:", estudiante.carrera);
console.log("Año de ingreso:", estudiante.añoIngreso);
console.log("Años transcurridos:", estudiante.añosTranscurridos);
console.log("Estado académico:", estudiante.estadoAcademico);


