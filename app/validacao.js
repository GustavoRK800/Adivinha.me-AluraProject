function verificaSeOChutePossuiValorValido(chute) {
    const numero = parseInt(+chute);

    // função de validação
    validacao(numero);
}

// Aqui eu preferir separar as funções só para manter um padrão, já que podemos separar cada coisa com uma função, mas não precisava
function validacao(numero) {

    // Validação para caso o chute não seja um número
    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += `
        <div class = "italico">Valor inválido: Não é um número</div>
        `;
        return
    }

    // Validação para caso o número de chute esteja fora dos parametros
    if (numeroMaiorQueOLimite(numero)) {
        elementoChute.innerHTML += (`
        <div class = "italico">Valor inválido: O chute deve está entre ${valorMinimo} e ${valorMaximo}.</div>
        `);
        return
    }

    // Validação do acerto
    if (acertouMiseravel(numero)) {
        document.body.innerHTML = `
            <h2>Acertou miserável!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id = "jogar-novamente">Click para jogar novamente</button
        `
    }else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div class="italico">O número secreto é menor<i class="fa-solid fa-angle-down ARROW"></i></div>`
    } else {
        elementoChute.innerHTML += `<div class="italico">O número secreto é maior<i class="fa-solid fa-angle-up ARROW"></i></div>`
    }
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})


// Aqui são as funções terceiras para facilitar a leitura das funções acima.
function acertouMiseravel(numero) {
    return numero === numeroSecreto;
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorQueOLimite(numero) {
    return numero > valorMaximo || numero < valorMinimo;
}