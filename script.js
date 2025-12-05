function aceptar() {
  const nombre = document.getElementById("nombre").value.trim();
  const resultado = document.getElementById("resultado");

  if (nombre === "") {
    resultado.innerHTML = "Por favor escribe tu nombre, mi amor.";
    resultado.classList.remove("oculto");
    return;
  }

  resultado.innerHTML = `
    <h2>Contrato Aceptado ❤️</h2>
    <p>Yo, <strong>${nombre}</strong>, acepto seguir construyendo este amor contigo.</p>
    <p>Prometo:</p>
    <ul style="text-align:left;">
      <li>Apoyarte siempre.</li>
      <li>Amarte con honestidad.</li>
      <li>Celebrar cada mes juntos.</li>
      <li>Ser tu lugar seguro.</li>
    </ul>
    <p>Firmado: Erik 💜</p>
  `;
  resultado.classList.remove("oculto");
}
