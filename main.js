const botoes = document.querySelectorAll(".botao");
const texto = document.querySelectorAll(".aba-conteudo");

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
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo01 = new Date ("2024-12-31t00:00:00");
const tempoObjetivo02 = new Date ("2024-07-01t00:00:00");
const tempoObjetivo03 = new Date ("2024-11-01t00:00:00");
const tempoObjetivo04 = new Date ("2024-12-01t00:00:00");
const tempoObjetivo05 = new Date ("2024-12-31t00:00:00");


contadores[0]. textContent = calculaTempo (tempoObjetivo01);

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
 
 return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
}

function atualizaCronometro(){
    //laço de repetição para interagir com todos os objetivos
    for (let i = 0; i < contadores.length; i++){
        contadores[i].textContent = calculaTempo(tempos[i]); //textContent mostra na tela a meta
    }
}

function comecaCronometro(){
    atualizaCronometro(); //chamada da função criada anteriormente dentro desta função
    setInterval(atualizaCronometro, 1000); //função que faz a contagem do tempo a cada seg.
}
comecaCronometro(); //chamada da função que mostra o cronômetro
