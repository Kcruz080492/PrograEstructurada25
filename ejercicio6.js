// 1. Crear el objeto proyecto con objetos anidados
const proyecto = {
    informacionBasica: {
        nombre: "Sistema de Gestión Hospitalaria",
        descripcion: "Plataforma web para gestión integral de hospitales",
        cliente: "Hospital Nacional San Salvador"
    },
    detallesTecnicos: {
        tecnologias: ["JavaScript", "Node.js", "MySQL", "React"],
        estado: "En desarrollo",
        prioridad: "Alta"
    },
    equipo: {
        liderProyecto: "Ing. Patricia Vásquez",
        numeroDevelador: 4,
        presupuesto: 85000
    }
};

// 2. Mostrar información básica
console.log("=== INFORMACIÓN BÁSICA DEL PROYECTO ===");
console.log("Nombre:", proyecto.informacionBasica.nombre);
console.log("Descripción:", proyecto.informacionBasica.descripcion);
console.log("Cliente:", proyecto.informacionBasica.cliente);

// 3. Agregar nueva tecnología
proyecto.detallesTecnicos.tecnologias.push("Docker");

console.log("\n=== TECNOLOGÍAS ACTUALIZADAS ===");
console.log("Tecnologías:", proyecto.detallesTecnicos.tecnologias.join(", "));

// 4. Cambiar estado del proyecto
const estadoAnterior = proyecto.detallesTecnicos.estado;
proyecto.detallesTecnicos.estado = "En pruebas";

console.log("\n=== CAMBIO DE ESTADO ===");
console.log("Estado anterior:", estadoAnterior);
console.log("Estado actual:", proyecto.detallesTecnicos.estado);

// 5. Calcular costo promedio por desarrollador
const costoPromedioPorDev = proyecto.equipo.presupuesto / proyecto.equipo.numeroDevelador;
proyecto.equipo.costoPromedioPorDesarrollador = costoPromedioPorDev;

console.log("\n=== CÁLCULO DE COSTOS ===");
console.log("Presupuesto total: $" + proyecto.equipo.presupuesto.toLocaleString());
console.log("Número de desarrolladores:", proyecto.equipo.numeroDevelador);
console.log("Costo promedio por desarrollador: $" + costoPromedioPorDev.toLocaleString());

// 6. Eliminar propiedad prioridad
delete proyecto.detallesTecnicos.prioridad;

console.log("\n=== ELIMINACIÓN DE PROPIEDAD ===");
console.log("Propiedad 'prioridad' eliminada de detalles técnicos");

// 7. Extraer nombre del cliente y líder del proyecto
const nombreCliente = proyecto.informacionBasica.cliente;
const liderDelProyecto = proyecto.equipo.liderProyecto;

console.log("\n=== DATOS EXTRAÍDOS ===");
console.log("Cliente:", nombreCliente);
console.log("Líder del proyecto:", liderDelProyecto);

// 8. Mostrar reporte completo
console.log("\n=== REPORTE COMPLETO DEL PROYECTO ===");
console.log("--- Información Básica ---");
console.log("Proyecto:", proyecto.informacionBasica.nombre);
console.log("Cliente:", proyecto.informacionBasica.cliente);
console.log("Descripción:", proyecto.informacionBasica.descripcion);

console.log("--- Detalles Técnicos ---");
console.log("Estado:", proyecto.detallesTecnicos.estado);
console.log("Tecnologías:", proyecto.detallesTecnicos.tecnologias.join(", "));

console.log("--- Equipo y Presupuesto ---");
console.log("Líder:", proyecto.equipo.liderProyecto);
console.log("Desarrolladores:", proyecto.equipo.numeroDevelador);
console.log("Presupuesto total: $" + proyecto.equipo.presupuesto.toLocaleString());
console.log("Costo por desarrollador: $" + proyecto.equipo.costoPromedioPorDesarrollador.toLocaleString());
