// Prueba unitaria
if (2 + 3 !== 5) throw new Error("Error en la suma");

// Prueba de integración básica (simulada)
const pagina = "<h1>¡Hola Mundo desde GitHub Actions!</h1>";
if (!pagina.includes("Hola Mundo")) throw new Error("Texto no encontrado");

console.log("✅ Todas las pruebas pasaron correctamente");
