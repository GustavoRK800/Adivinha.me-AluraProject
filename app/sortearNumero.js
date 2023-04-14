// Código que gerar um número pseudo-aleatório

const valorMaximo = 999;
const valorMinimo = 0;
const numeroSecreto = numeroPseudoAleatorio();

function numeroPseudoAleatorio() {
    return parseInt(Math.random() * valorMaximo + 1);
}

console.log("Olá, seja bem vindo a este modesto jogo de adivinhação, este jogo foi criado para fins de estudos na alura, caso você veja isso é por que vossa pessoa quer a resposta mais fácil né! Ok, toma ai.")

console.log("Número secreto:",numeroSecreto);

// Mudando o valor da página pelo javaScript

const elementoMenorValor = document.getElementById('menor-valor');
const elementoMaiorValor = document.getElementById('maior-valor');

elementoMaiorValor.innerHTML = valorMaximo;
elementoMenorValor.innerHTML = valorMinimo;