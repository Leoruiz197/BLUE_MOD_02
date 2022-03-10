window.onload = function() {
    alert("Olá mundo do JavaScript para Web");
};

const btn_acao = document.querySelector("#btn_acao"); // Captura o botão no DOM pelo id

btn_acao.addEventListener("click", function () { // Adiciona um evento de click no botão capturado e assim que for clicado, executa a função.
  const tagH1 = document.createElement("h1"); // Cria uma tag h1 e adiciona a let tagH1
  const h1Text = document.createTextNode("Texto criado no JS"); // Cria um texto e adiciona a let h1Text

  tagH1.appendChild(h1Text); // Adiciona a tag H1 o texto criado acima

  document.body.appendChild(tagH1);
});


const btn_enviar = document.querySelector("#btn_enviar"); // Captura o botão no DOM pelo id

btn_enviar.addEventListener("click", function () { 
  const texto = document.getElementById("texto");
  const areatexto = document.getElementById("areatexto");

  areatexto.value = texto.value;
});

const titulo = document.querySelector("h1");

titulo.addEventListener("mouseover", function () {
  titulo.style.color = "rgb(197, 86, 86)";
});

titulo.addEventListener("mouseout", function () {
  titulo.style.color = "white";
});

const god = document.querySelector("#godWar");
let aberto = false;

god.addEventListener("mouseover", function () {
    const gameGod = document.getElementById("gameGod");
    if(aberto){
        gameGod.style.maxWidth = "260px"; 
        aberto = false;
    }else{
        gameGod.style.maxWidth = "600px";
        aberto = true;
    }
});