let secreto = Math.floor(Math.random() * 10) + 1;
let intento;
let intentos = 0;
while (intento !== secreto) {
  intento = parseInt(prompt("Adivina un número del 1 al 10"));
  intentos++;

  if (intento === secreto) {
    alert(`¡Correcto! El número era ${secreto}. Intentos: ${intentos}`);
    console.log(`El usuario adivinó el número ${secreto} en ${intentos} intento(s).`);
    break;
  } else {
    alert("Incorrecto, intenta de nuevo.");
  }
}
