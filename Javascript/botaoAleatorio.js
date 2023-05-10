function mudarPosicao() {
    var botao = document.getElementById("botao");
    botao.innerHTML = 'VC É A GABIE SIM!';
    var alturaJanela = window.innerHeight;
    var larguraJanela = window.innerWidth;
    var novaPosicaoTop = Math.floor(Math.random() * (alturaJanela - botao.offsetHeight));
    var novaPosicaoLeft = Math.floor(Math.random() * (larguraJanela - botao.offsetWidth));
    botao.style.top = novaPosicaoTop + "px";
    botao.style.left = novaPosicaoLeft + "px";
  }
  function adicionarImagem() {
    var body = document.getElementsByTagName("body")[0];
    var imagem = document.createElement("img");
    imagem.src = "ft-perfil.jpg";
    body.appendChild(imagem);
    var botao = document.getElementsById("botao1")[0];
    var video = document.createElement("iframe");
    video.src = "https://www.youtube.com/watch?v=fLexgOxsZu0";
    video.autoplay = true;
        video.controls = true;
    video.width = 560;
    video.height = 315;
    botao.parentNode.replaceChild(video, botao);
  }