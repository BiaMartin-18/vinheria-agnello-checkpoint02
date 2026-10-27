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

    while (entrada === null || entrada.trim() === "") {
        alert("Entrada inválida. Digite um valor.");
        entrada = prompt(mensagem);
    }

    return entrada.trim();
}

function validarNumero(mensagem, minimo, maximo) {
    let entrada = prompt(mensagem);
    let numero = Number(entrada);

    while (
        entrada === null ||
        entrada.trim() === "" ||
        !Number.isInteger(numero) ||
        numero < minimo ||
        numero > maximo
    ) {
        alert(
            "Digite um número inteiro entre " +
            minimo + " e " + maximo + "."
        );

        entrada = prompt(mensagem);
        numero = Number(entrada);
    }

    return numero;
}



function validarTipo(mensagem) {
    let tipo = validarTexto(mensagem).toLowerCase();

    while (
        tipo !== "tinto" &&
        tipo !== "branco" &&
        tipo !== "rose" &&
        tipo !== "rosé"
    ) {
        alert("Tipo inválido. Digite Tinto, Branco ou Rosé.");
        tipo = validarTexto(mensagem).toLowerCase();
    }

    if (tipo === "rose") {
        return "Rosé";
    }

    return tipo.charAt(0).toUpperCase() + tipo.slice(1);
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

// EXIBIR O RESUMO FINAL 

function mostrarResumo(totalCadastros, totalEstoqueBaixo, safraMaisAntiga, nomeMaisAntigo) {
    if (totalCadastros == 0) {
        alert("Nenhum vinho foi cadastrado");
        return;
    }

    console.log("---------- Resumo Final ----------");
    console.log("Total de cadastros: " + totalCadastros);
    console.log("Vinhos com estoque baixo: " + totalEstoqueBaixo);
    console.log("Vinho com a safra mais antiga: " + nomeMaisAntigo + " (" + safraMaisAntiga + ")");

    alert("Resumo final\nCadastros: " + totalCadastros + "\nEstoque baixo: " + totalEstoqueBaixo + "\nSafra mais antiga: " + nomeMaisAntigo + " (" + safraMaisAntiga + ")")
}


// FLUXO PRINCIPAL

// Inicializar os contadores e as infos da safra mais antiga
let totalCadastros = 0;
let totalEstoqueBaixo = 0;
let safraMaisAntiga = 0;
let nomeMaisAntigo = "";

let continuar;

do {
    // solicitacao dos dados do vinho
    let nome = validarTexto("Digite o nome do vinho:");
    let tipo = validarTipo("Digite o tipo do vinho (Tinto, Branco ou Rosé):");
    let safra = validarNumero("Digite o ano da safra:", 1900, ANO_ATUAL);
    let quantidade = validarNumero("Digite a quantidade em estoque:", 0, 100000);

    // classificacao do vinho conforme sua safra
    let classificacao = classificarVinho(safra);

    // exibe os dados do vinho cadastrado
    mostrarDados(nome, tipo, safra, quantidade, classificacao);

    // atualiza o total de cadastros
    totalCadastros++;

    // contar vinhos com estoque baixo
    if (estoqueBaixo(quantidade)) {
        totalEstoqueBaixo++;
    }

    if (totalCadastros === 1 || safra < safraMaisAntiga) {
        safraMaisAntiga = safra;
        nomeMaisAntigo = nome;
    }
    continuar = validarTexto("Deseja cadastrar outro vinho? (sim/não)");

} while (
    continuar.toLowerCase() === "sim" ||
    continuar.toLowerCase() === "s"
);

mostrarResumo(
    totalCadastros,
    totalEstoqueBaixo,
    safraMaisAntiga,
    nomeMaisAntigo
);