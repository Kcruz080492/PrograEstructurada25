// ========================================================================
// EJERCICIO PRÁCTICO: DESTRUCTURING EN JAVASCRIPT ES6+
// Sistema de Gestión de Empleados - Empresa TechSolutions
// ========================================================================

console.log(" DESTRUCTURING EN JAVASCRIPT MODERNO - ES6+");
console.log("=".repeat(60));

// 1. DATOS DE EJEMPLO - EMPRESA TECHSOLUTIONS
const empresa = { //-->Objeto Principal 
    nombre: "TechSolutions El Salvador",
    fundacion: 2018,
    ubicacion: {
        pais: "El Salvador",
        ciudad: "San Salvador",
        direccion: {
            avenida: "Av. Masferrer Norte",
            numero: 1234,
            colonia: "Escalón"
        }
    },
    empleados: [ // --> Esto es una propiedad que contiene un array
        {//--> pero contiene objetos dentro de esté
           id: "EMP001",
            nombre: "María Elena Rodríguez",
            puesto: "Desarrolladora Senior",
            departamento: "Desarrollo",
            salario: 1800,
            tecnologias: ["JavaScript", "React", "Node.js", "PostgreSQL"],
            
            contacto: { //Objeto anidado
                email: "maria.rodriguez@techsolutions.com",
                telefono: "+503 7890-1234",
                
                emergencia: { //objeto anidad 
                    nombre: "Carlos Rodríguez",
                    relacion: "Esposo",
                    telefono: "+503 7890-5678"
                }
            },
            fechaIngreso: "2022-03-15",
            activo: true
        },
        {
            id: "EMP002",
            nombre: "Roberto Carlos Mendoza",
            puesto: "Diseñador UX/UI",
            departamento: "Diseño",
            salario: 1500,
            tecnologias: ["Figma", "Adobe XD", "Sketch", "HTML/CSS"],
            contacto: {
                email: "roberto.mendoza@techsolutions.com",
                telefono: "+503 7123-4567",
                emergencia: {
                    nombre: "Ana Mendoza",
                    relacion: "Madre",
                    telefono: "+503 7123-9876"
                }
            },
            fechaIngreso: "2021-11-20",
            activo: true
        },
        {
            id: "EMP003",
            nombre: "Sandra Patricia López",
            puesto: "Project Manager",
            departamento: "Gestión",
            salario: 2200,
            tecnologias: ["Jira", "Trello", "Slack", "Microsoft Project"],
            contacto: {
                email: "sandra.lopez@techsolutions.com",
                telefono: "+503 7555-0123",
                emergencia: {
                    nombre: "Luis López",
                    relacion: "Padre",
                    telefono: "+503 7555-9999"
                }
            },
            fechaIngreso: "2020-08-10",
            activo: true
        }
    ],
    proyectos: {
        activos: 12,
        completados: 48,
        presupuestoTotal: 250000,
        clientesPrincipales: ["Banco Nacional", "Hospital San Rafael", "Universidad Centroamericana"]
    }
};

// 2. DESTRUCTURING BÁSICO - EXTRAER PROPIEDADES SIMPLES

console.log("\n 1. DESTRUCTURING BÁSICO");
console.log("-".repeat(40));

// Forma tradicional (ES5) --- > Es como lo hemos trabajado
const nombreEmpresaTradicional = empresa.nombre;
const fundacionTradicional = empresa.fundacion;

console.log(" Forma tradicional (ES5):");
console.log(`Empresa: ${nombreEmpresaTradicional}, Fundada en: ${fundacionTradicional}`);

// Forma moderna con destructuring (ES6+) --- > como lo vamos hacer ahora 
//Una forma más elegante de extraer propiedades de un objeto. 
const { nombre, fundacion } = empresa;

console.log("\n Forma moderna con destructuring (ES6+):");
console.log(`Empresa: ${nombre}, Fundada en: ${fundacion}`);

// 3. DESTRUCTURING CON RENOMBRADO DE VARIABLES

console.log("\n 2. DESTRUCTURING CON RENOMBRADO");
console.log("-".repeat(40));

// Renombrar variables al extraer
const { nombre: nombreCompania, fundacion: añoFundacion } = empresa;

console.log(" Variables renombradas:");
console.log(`Compañía: ${nombreCompania}`);
console.log(`Año de fundación: ${añoFundacion}`);

// 4. DESTRUCTURING ANIDADO - OBJETOS DENTRO DE OBJETOS
console.log("\n 3. DESTRUCTURING ANIDADO");
console.log("-".repeat(40));

// Extraer propiedades anidadas
const {
    ubicacion: {
        pais,
        ciudad,
        direccion: { avenida, numero, colonia }
    }
} = empresa;

console.log(" Información de ubicación extraída:");
console.log(`País: ${pais}`);
console.log(`Ciudad: ${ciudad}`);
console.log(`Dirección completa: ${avenida} # ${numero}, Col. ${colonia}`);

// 5. DESTRUCTURING CON VALORES POR DEFECTO

console.log("\n 4. DESTRUCTURING CON VALORES POR DEFECTO");
console.log("-".repeat(40));

// Si una propiedad no existe, usar valor por defecto
const { nombre: empresaNombre, sitioWeb = "https://techsolutions.com.sv", empleadosTotal = 0 } = empresa;

console.log("\n Usando valores por defecto:");
console.log(`Empresa: ${empresaNombre}`);
console.log(`Sitio web: ${sitioWeb} (valor por defecto)`);
console.log(`Total empleados: ${empleadosTotal} (valor por defecto)`);

// 6. DESTRUCTURING AVANZADO - COMBINANDO OBJETOS Y ARRAY
console.log("\n 6. DESTRUCTURING AVANZADO");
console.log("-".repeat(40));

// Extraer información compleja de un empleado
const [{
    nombre: nombreDev,
    contacto: {
        email,
        emergencia: { nombre: contactoEmergencia, relacion }
    },
    tecnologias: [tech1, tech2, ...otherTechs]
}] = empresa.empleados;

console.log("\n Destructuring avanzado del primer empleado:");
console.log(`Nombre: ${nombreDev}`);
console.log(`Email: ${email}`);
console.log(`Contacto emergencia: ${contactoEmergencia} (${relacion})`);
console.log(`Tecnología principal: ${tech1}`);
console.log(`Segunda tecnología: ${tech2}`);
console.log(`Otras tecnologías: ${otherTechs.join(", ")}`); 
//El método .join() convierte un array en un string, 
// uniendo todos los elementos con el separador que le especifiques.

//Llememos al empleado 2 
const [, { //---> Saltamos una posicion del array 
    nombre: nombreDesigner,//--> renombramos variables y xq si no lo hacemos nos daria error ya estatrias redeclarando una variable 
    contacto: {
        email: emailDesigner,
        emergencia: { nombre: contactoEmergenciaDesigner, relacion: relacionDesigner }
    },
    tecnologias: [tech1Designer, tech2Designer, ...otherTechsDesigner]
}] = empresa.empleados;

console.log(" \n Destructuring avanzado del segundo empleado:");
console.log(`Nombre: ${nombreDesigner}`);
console.log(`Email: ${emailDesigner}`);
console.log(`Contacto emergencia: ${contactoEmergenciaDesigner} (${relacionDesigner})`);
console.log(`Tecnología principal: ${tech1Designer}`);
console.log(`Segunda tecnología: ${tech2Designer}`);
console.log(`Otras tecnologías: ${otherTechsDesigner.join(", ")}`); 
//El método .join() convierte un array en un string, 
// uniendo todos los elementos con el separador que le especifiques.

// 7. REST OPERATOR (...) EN DESTRUCTURING
console.log("\n 7. REST OPERATOR EN DESTRUCTURING");
console.log("-".repeat(40));

// Extraer algunas propiedades y agrupar el resto
//Dame todo lo que no sea proyectos ni empleados 
const { proyectos, empleados, ...infoBasica } = empresa;

console.log(" Información básica de la empresa:");
console.log(infoBasica);

console.log("\n Información de proyectos:");
console.log(`Proyectos activos: ${proyectos.activos}`);
console.log(`Proyectos completados: ${proyectos.completados}`);
