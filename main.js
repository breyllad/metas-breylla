const botoes = document.querySelectorAll(".botao");
for(let i=0; i<botoes.length; i++){
    botoes[i].onclick = function(){
        for(let j=0; j<botoes.length; j++)
            botoes [j]. classList.remove("ativo");


        }
    botoes [i].classList.add("ativo");
    }
const botoes = document.querySelectorAll(".botao");
const texto = document.querySelectorAll(."aba-conteudo")

for(let i=0; i <botoes.lenght; i++){
    botoes[i].onclick = function(){
        for(let j=0; j<botoes.length; j++){
            botoes[j].classList.remove ("ativo");
            texto[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        testo[i].classList.add("ativo");
    }
}

