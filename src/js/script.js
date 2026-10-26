// sistema de avaliação de estoque - Vinheria Agnello
// Checkpoint 02: funções, escopo de variáveis e laços

// CONSTANTES 
const ANO_ATUAL = 2026;
const ESTOQUE_MINIMO = 5;
const LIMITE_JOVEM = 3;
const LIMITE_AMADURECIDO = 10;

// VALIDAÇÃO DE ENTRADAS

function validarTexto(mensagem) {
    let entrada = prompt(mensagem);

    while (entrada == null || entrada == "") {
        alert("Entrada inválida. Digite um valor.")
        entrada = prompt(mensagem);
    }

    return entrada;
}

function validarNumero(mensagem, minimo, maximo) {
    let numero = parseInt(prompt(mensagem));

    while (isNaN(numero) || numero < minimo || numero > maximo) {
        alert("Digite um número entre " + minimo + " e " + maximo + ".");
        numero = parseInt(prompt(mensagem));
    }

    return numero;
}


function validarTipo(mensagem) {
    let tipo = validarTexto(mensagem);
    let tipoPadronizado = "";

    while (tipoPadronizado == "") {
        if (tipo == "Tinto" || tipo == "tinto") {
            tipoPadronizado = "Tinto";
        } else if (tipo == "Branco" || tipo == "branco") {
            tipoPadronizado = "Branco";
        } else if (tipo == "Rosé" || tipo == "rosé" || tipo == "Rose" || tipo == "rose") {
            tipoPadronizado = "Rosé";
        } else {
            alert("Tipo inválido. Digite Tinto, Branco ou Rosé");
            tipo = validarTexto(mensagem);
        }
    }

    return tipoPadronizado
}

// ESTOQUE BAIXO 

function estoqueBaixo(quantidade) {
    return quantidade < ESTOQUE_MINIMO;
}

// CLASSIFICAÇÃO DO VINHO

function classificarVinho(safra) {
    let idade = ANO_ATUAL - safra;

    if (idade <= LIMITE_JOVEM) {
        return "jovem";
    }
    if (idade <= LIMITE_AMADURECIDO) {
        return "amadurecido";
    }
    return "antigo";
}

// EXIBIR OS DADOS

function mostrarDados(nome, tipo, safra, quantidade, classificacao) {
    console.log("---------- Vinho Cadastrado ----------");
    console.log("Nome: " + nome);
    console.log("Tipo: " + tipo);
    console.log("Safra: " + safra);
    console.log("Quantidade em estoque: " + quantidade);
    console.log("Classificação: " + classificacao);

    if (estoqueBaixo(quantidade)) {
        console.log("ATENÇÃO: estoque baixo!");
        alert("Cadastro realizado! ATENÇÃO: o estoque de " + nome + " está baixo.\nDetalhes no console (F12).");
    } else {
        alert("Cadastro realizado! Detalhes de " + nome + " no console (F12)");
    }
}



