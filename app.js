let numeroLimite = 100;
let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1 ;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
};

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Yan');
    exibirTextoNaTela('p', `escolha um numero de 1 a ${numeroLimite}`);
};
 
exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'ACERTOUU!!!');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
            let mensagemTentativas = `você precisou de ${tentativas} ${palavraTentativa} para a resposta`
                exibirTextoNaTela('p', mensagemTentativas );
                    document.getElementById ('reiniciar').removeAttribute('disabled');
                    
    } else {
        if( chute > numeroSecreto) {
            exibirTextoNaTela('h1', 'ERROU');
                exibirTextoNaTela('p', `tente um numero menor que ${chute}`);
    } else {
        exibirTextoNaTela('h1', 'ERROU');
            exibirTextoNaTela('p', `tente um numero maior que ${chute}`);
    };
tentativas++
limparInput();
};
};


function gerarNumeroSecreto() {
    let numeroSorteado = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length

    if (quantidadeDeNumerosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroSorteado))  {
        return gerarNumeroSecreto();
    } else {
        listaDeNumerosSorteados.push(numeroSorteado);
        console.log(listaDeNumerosSorteados);
        return numeroSorteado;
    }
};
function limparInput() {
    chute = document.querySelector('input');
        chute.value = '';
};

function reiniciarJogoSecreto() {

    numeroSecreto = gerarNumeroSecreto();
    tentativas = 1; 
    limparInput();
    exibirMensagemInicial();
    document.getElementById ('reiniciar').setAttribute('disabled', true);
};