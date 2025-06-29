let frutas = ["Manzana", "Banana", "Pera", "Uva"];

let nuevaFruta = prompt("Ingresa una fruta para añadir a la lista:");
if (nuevaFruta) {
  frutas.push(nuevaFruta);
  console.log(`Fruta añadida: ${nuevaFruta}`);
}
frutas.forEach((fruta, index) => {
  console.log(`Fruta ${index + 1}: ${fruta}`);
});
