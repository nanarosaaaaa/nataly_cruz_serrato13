let nombre = prompt("¿Cómo te llamas?");
alert("Hola, " + nombre + ". Bienvenido a JavaScript.");
console.log(`Usuario: ${nombre}`);

let edad = prompt("¿Cuántos años tienes?");
edad = Number(edad);

if (edad >= 18) {
  alert("Eres mayor de edad.");
  console.log(`${nombre} es mayor de edad con ${edad} años.`);
} else {
  alert("Eres menor de edad.");
  console.log(`${nombre} es menor de edad con ${edad} años.`);
}
