// 1. Crear el objeto perfilUsuario con objetos anidados
const perfilUsuario = {
    informacionPersonal: {
        nombre: "Roberto Carlos Mendoza",
        edad: 32,
        email: "roberto.mendoza@email.com"
    },
    preferencias: {
        idioma: "español",
        notificaciones: true,
        tema: "oscuro",
        autoGuardado: true
    },
    estadisticasUso: {
        fechaRegistro: "2024-01-15",
        ultimoAcceso: "2024-08-18",
        numeroSesiones: 145
    }
};

// 2. Mostrar cada sección por separado
console.log("=== INFORMACIÓN PERSONAL ===");
console.log("Nombre:", perfilUsuario.informacionPersonal.nombre);
console.log("Edad:", perfilUsuario.informacionPersonal.edad);
console.log("Email:", perfilUsuario.informacionPersonal.email);

console.log("\n=== PREFERENCIAS ===");
console.log("Idioma:", perfilUsuario.preferencias.idioma);
console.log("Notificaciones:", perfilUsuario.preferencias.notificaciones ? "Activadas" : "Desactivadas");
console.log("Tema:", perfilUsuario.preferencias.tema);
console.log("Auto-guardado:", perfilUsuario.preferencias.autoGuardado ? "Activado" : "Desactivado");

console.log("\n=== ESTADÍSTICAS DE USO ===");
console.log("Fecha de registro:", perfilUsuario.estadisticasUso.fechaRegistro);
console.log("Último acceso:", perfilUsuario.estadisticasUso.ultimoAcceso);
console.log("Número de sesiones:", perfilUsuario.estadisticasUso.numeroSesiones);

// 3. Cambiar idioma
const idiomaAnterior = perfilUsuario.preferencias.idioma;
perfilUsuario.preferencias.idioma = "inglés";

console.log("\n=== CAMBIO DE IDIOMA ===");
console.log("Idioma anterior:", idiomaAnterior);
console.log("Idioma nuevo:", perfilUsuario.preferencias.idioma);

// 4. Actualizar último acceso
const fechaActual = new Date();
//Convierte la fecha a un formato estándar internacional (ISO 8601) en UTC
const fechaFormateada = fechaActual.toISOString().split('T')[0];
perfilUsuario.estadisticasUso.ultimoAcceso = fechaFormateada;

console.log("\n=== ACTUALIZACIÓN DE ÚLTIMO ACCESO ===");
console.log("Nuevo último acceso:", perfilUsuario.estadisticasUso.ultimoAcceso);

// 5. Calcular días desde el registro
const fechaRegistro = new Date(perfilUsuario.estadisticasUso.fechaRegistro);
const diferenciaDias = Math.floor((fechaActual - fechaRegistro) / (1000 * 60 * 60 * 24));
perfilUsuario.estadisticasUso.diasDesdeRegistro = diferenciaDias;

console.log("\n=== CÁLCULO DE DÍAS ===");
console.log("Días desde el registro:", diferenciaDias);

// 6. Eliminar preferencia innecesaria
delete perfilUsuario.preferencias.autoGuardado;

console.log("\n=== ELIMINACIÓN DE PREFERENCIA ===");
console.log("Preferencia 'autoGuardado' eliminada");

// 7. Extraer email e idioma en variables separadas
const emailUsuario = perfilUsuario.informacionPersonal.email;
const idiomaUsuario = perfilUsuario.preferencias.idioma;

console.log("\n=== DATOS EXTRAÍDOS ===");
console.log("Email extraído:", emailUsuario);
console.log("Idioma extraído:", idiomaUsuario);

// 8. Mostrar perfil completo actualizado
console.log("\n=== PERFIL COMPLETO ACTUALIZADO ===");
console.log("--- Información Personal ---");
console.log("Nombre:", perfilUsuario.informacionPersonal.nombre);
console.log("Edad:", perfilUsuario.informacionPersonal.edad);
console.log("Email:", perfilUsuario.informacionPersonal.email);

console.log("\n--- Preferencias ---");
console.log("Idioma:", perfilUsuario.preferencias.idioma);
console.log("Notificaciones:", perfilUsuario.preferencias.notificaciones ? "Activadas" : "Desactivadas");
console.log("Tema:", perfilUsuario.preferencias.tema);

console.log("\n--- Estadísticas ---");
console.log("Fecha de registro:", perfilUsuario.estadisticasUso.fechaRegistro);
console.log("Último acceso:", perfilUsuario.estadisticasUso.ultimoAcceso);
console.log("Sesiones:", perfilUsuario.estadisticasUso.numeroSesiones);
console.log("Días desde registro:", perfilUsuario.estadisticasUso.diasDesdeRegistro);