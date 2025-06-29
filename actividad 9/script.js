function esMayorDeEdad(edad) {
  return edad >= 18;
}

let edad = parseInt(prompt("¿Cuál es tu edad?"));

if (esMayorDeEdad(edad)) {
  alert("Puedes ingresar al sitio.");
  console.log(`Edad ${edad}: acceso permitido`);
} else {
  alert("Debes ser mayor de edad para ingresar.");
  console.log(`Edad ${edad}: acceso denegado`);
}
