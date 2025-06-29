function crearFicha(nombre, edad, ciudad) {
  return {
    nombre: nombre,
    edad: edad,
    ciudad: ciudad
  };
}
function mostrarFicha(ficha) {
  return `Nombre: ${ficha.nombre}\nEdad: ${ficha.edad}\nCiudad: ${ficha.ciudad}`;
}
let nombre = prompt("Nombre:");
let edad = parseInt(prompt("Edad:"));
let ciudad = prompt("Ciudad:");

let fichaUsuario = crearFicha(nombre, edad, ciudad);
alert(mostrarFicha(fichaUsuario));
console.log(mostrarFicha(fichaUsuario));
