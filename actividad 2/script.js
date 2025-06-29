
function sumar(a, b) {
  return a + b;
}
let num1 = parseFloat(prompt("Ingresa el primer número"));
let num2 = parseFloat(prompt("Ingresa el segundo número"));

let resultado = sumar(num1, num2);
alert(`La suma es: ${resultado}`);
console.log(`La suma de ${num1} + ${num2} es: ${resultado}`);
