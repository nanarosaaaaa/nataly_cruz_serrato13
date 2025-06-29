
let nombre = prompt("Ingresa tu nombre completo");
let profesion = prompt("¿Cuál es tu profesión?");
let correo = prompt("Correo electrónico");
let tarjeta = {
  nombre: nombre,
  profesion: profesion,
  correo: correo
};
function generarTarjeta(usuario) {
  return `------- Tarjeta de Presentación -------
Nombre: ${usuario.nombre}
Profesión: ${usuario.profesion}
Correo: ${usuario.correo}
----------------------------------------`;
}
console.log(generarTarjeta(tarjeta));
alert("Tu tarjeta se ha generado. Ábrela en la consola (F12).");
