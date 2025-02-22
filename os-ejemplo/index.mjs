import os from 'os';

// Obtener la arquitectura del Sistema
console.log('Arquitectura:', os.arch());

// Obtener el tipo de Sistema Operativo
console.log('Plataforma:', os.platform());

// Obtener la cantidad total de memoria
console.log('Memoria total:', os.totalmem());

// Obtener la memoria libre
console.log('Memoria libre:', os.freemem());

// Obtener la información de la CPU
console.log('Información de la CPU:', os.cpus());
