var altura = 0
var largura = 0
var vida = 1
var tempo = 50
var tempoMosquito = 1500

var nivel = window.location.search
nivel = nivel.replace("?", '')

if(nivel === 'Easy'){
    tempoMosquito = 2000
} else if (nivel === 'Normal'){
    tempoMosquito = 1500
} else if (nivel === 'Hard'){
    tempoMosquito = 1000
} else if (nivel === 'Demon'){
    tempoMosquito = 500
}

//Definindo tamanho da tela
function ajusteTelaJogo() {
    altura = window.innerHeight
    largura = window.innerWidth 
    console.log(largura, altura)
}
ajusteTelaJogo()

var cronometro = setInterval(function(){
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'Vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

//Define a estrutura em que o mosquito vai aparecer
function posicaoRandomica(){

    //Condicional para o elemento ser removido caso aja um click sobre ele
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        //Condicional caso as vidas cheguem a 0
        if (vida > 3){
            window.location.href = 'Game Over.html'
        } else{
            document.getElementById('v' + vida).src="imagens/coracao_vazio.png"
            vida++
        }
    }

    //Definindo uma posicao aleatoria
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90 
    posicaoX = posicaoX < 0 ? 0 : posicaoX 
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    // Criando o elemento mosquito
    var mosquito = document.createElement('img') 
    mosquito.src = 'imagens/mosca.png' 

    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio() 
    mosquito.style.left = posicaoX + 'px' 
    mosquito.style.top = posicaoY + 'px' 
    mosquito.style.position = 'absolute' 
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito) 

    console.log(tamanhoAleatorio())
}

    //Definindo uma classe aleatoria do elemento mosquito criado
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

    //Definindo um lado aleatorio que o mosquito vai ser criado
function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}