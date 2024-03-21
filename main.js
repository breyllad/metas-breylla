const botoes = document.querySelectorAll(".botao");
const texto = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll("contador");

for(let i=0; i <botoes.lenght; i++){
    botoes[i].onclick = function(){
        for(let j=0; j<botoes.length; j++){
            botoes[j].classList.remove ("ativo");
            texto[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        texto[i].classList.add("ativo");
    }
}
const tempoObjetivo1= new Date ("2025T00:00:00");
let tempoAtual = new Date ();
contadores[0].textContent = "contagem regressiva";
