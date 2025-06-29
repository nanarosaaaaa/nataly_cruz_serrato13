let votos = {
  instagram: 0,
  tiktok: 0,
  youtube: 0
};

let cantidad = 3;

for (let i = 0; i < cantidad; i++) {
  let respuesta = prompt(`¿Cuál es tu red social favorita? (escriba su número) 
1 = Instagram
2 = TikTok
3 = YouTube`);

  if (respuesta === "1") {
    votos.instagram++;
  } else if (respuesta === "2") {
    votos.tiktok++;
  } else if (respuesta === "3") {
    votos.youtube++;
  } else {
    alert("Opción no válida. No se registra el voto.");
  }
}

function mostrarResultados(votos) {
  let total = votos.instagram + votos.tiktok + votos.youtube;

  console.log(`Resultados de la encuesta:`);
  console.log(`Instagram: ${((votos.instagram / total) * 100).toFixed(1)}% (${votos.instagram} voto(s))`);
  console.log(`TikTok: ${((votos.tiktok / total) * 100).toFixed(1)}% (${votos.tiktok} voto(s))`);
  console.log(`YouTube: ${((votos.youtube / total) * 100).toFixed(1)}% (${votos.youtube} voto(s))`);

  let maxVotos = Math.max(votos.instagram, votos.tiktok, votos.youtube);
  let ganadores = [];

  for (let red in votos) {
    if (votos[red] === maxVotos) {
      ganadores.push(red);
    }
  }

  if (ganadores.length === 1) {
    console.log(`La red ganadora es: ${ganadores[0]}`);
  } else {
    console.log(`Hay un empate entre: ${ganadores.join(", ")}`);
  }
}

mostrarResultados(votos);
alert("Encuesta finalizada. Mira la consola (F12) para los resultados.");
