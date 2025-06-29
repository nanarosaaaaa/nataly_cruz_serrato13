function saludar(nombre) {
  let hora = new Date().getHours();
  let momento;

  if (hora >= 6 && hora < 12) {
    momento = "Buenos días";
  } else if (hora >= 12 && hora < 18) {
    momento = "Buenas tardes";
  } else {
    momento = "Buenas noches";
  }

  return `${momento}, ${nombre}. ¡Bienvenido a JavaScript!`;
}

let usuario = prompt("¿Cómo te llamas amiguit@?");

console.log(saludar(usuario));

alert(saludar(usuario));
