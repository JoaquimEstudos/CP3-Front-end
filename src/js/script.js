const imagens = [
  "./src/assets/placa_video.png",
  "./src/assets/memoria.png",
  "./src/assets/processador.png"
];

let imagemAtual = 0;

function passarImagem() {
  imagemAtual++;

  if (imagemAtual >= imagens.length) {
    imagemAtual = 0;
  }

  document.getElementById("imagemDestaque").src = imagens[imagemAtual];
}

function voltarImagem() {
  imagemAtual--;

  if (imagemAtual < 0) {
    imagemAtual = imagens.length - 1;
  }

  document.getElementById("imagemDestaque").src = imagens[imagemAtual];
}