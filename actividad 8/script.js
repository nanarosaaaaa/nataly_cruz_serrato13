function calcular(a, b, operacion) {
  if (operacion === "+") return a + b;
  else if (operacion === "-") return a - b;
  else if (operacion === "*") return a * b;
  else if (operacion === "/") return b !== 0 ? a / b : "No se puede dividir entre cero";
  else return "Operación no válida";
}

let num1 = parseFloat(prompt("Primer número:"));
let num2 = parseFloat(prompt("Segundo número:"));
let op = prompt("Operación (+, -, *, /):");

let resultado = calcular(num1, num2, op);
alert(`Resultado: ${resultado}`);
console.log(`Calculadora: ${num1} ${op} ${num2} = ${resultado}`);
