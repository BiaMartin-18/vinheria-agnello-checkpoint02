# 🍷 Vinheria Agnello — Checkpoint 02

## Sobre o projeto

O Checkpoint 02 da disciplina de Desenvolvimento Web consiste no desenvolvimento de um sistema de cadastro e avaliação de estoque de vinhos para a **Vinheria Agnello**, uma empresa familiar de São Paulo.

O sistema permite cadastrar vários vinhos em sequência, informando nome, tipo, safra e quantidade em estoque. Cada vinho é classificado de acordo com o ano da safra, e os produtos com estoque baixo são identificados. Ao final, o sistema apresenta um resumo dos cadastros realizados, dos vinhos com estoque baixo e do vinho com a safra mais antiga.

O projeto foi desenvolvido em HTML, CSS e JavaScript, com foco em **funções e reutilização de código**, **escopo de variáveis** e **laços de repetição**. A interação com o usuário é feita por `prompt()` e `alert()`, e os detalhes de cada cadastro são exibidos no `console.log()`.

---

## Como funciona

1. Ao abrir a página, o sistema pede, com `prompt()`, o **nome**, o **tipo** (Tinto, Branco ou Rosé), a **safra** e a **quantidade em estoque** do vinho.
2. Cada entrada é validada: textos não podem ficar vazios, o tipo precisa ser válido e a safra e a quantidade precisam ser números dentro de um intervalo aceito. Se o dado for inválido, a pergunta é repetida.
3. O vinho é classificado pela idade (ano atual menos a safra) e os dados são mostrados no console, com um `alert()` de aviso. Se o estoque for baixo, o aviso aparece também.
4. O sistema pergunta se o usuário deseja cadastrar outro vinho. Enquanto a resposta for "sim", o cadastro se repete.
5. Ao final, é exibido o resumo: total de cadastros, quantidade de vinhos com estoque baixo e o vinho com a safra mais antiga.

> Para ver os detalhes de cada vinho cadastrado, abra o console do navegador com **F12**.

### Regras do sistema

| Regra | Critério |
|---|---|
| Estoque baixo | Quantidade menor que 5 |
| Vinho jovem | Até 3 anos de idade |
| Vinho amadurecido | De 4 a 10 anos de idade |
| Vinho antigo | Mais de 10 anos de idade |

---

## Funções criadas

| Função | O que faz |
|---|---|
| `validarTexto(mensagem)` | Pede um texto e repete a pergunta até receber um valor preenchido |
| `validarNumero(mensagem, minimo, maximo)` | Pede um número e repete a pergunta até ele estar dentro do intervalo |
| `validarTipo(mensagem)` | Aceita apenas Tinto, Branco ou Rosé e devolve o tipo padronizado |
| `estoqueBaixo(quantidade)` | Verifica se o estoque é menor que 5 |
| `classificarVinho(safra)` | Classifica o vinho como jovem, amadurecido ou antigo |
| `mostrarDados(...)` | Mostra os dados do vinho no console e avisa com `alert()` |
| `mostrarResumo(...)` | Mostra o resumo final dos cadastros |

### Escopo e restrições

- As variáveis declaradas dentro das funções são usadas apenas localmente.
- Os contadores do resumo (`totalCadastros`, `totalEstoqueBaixo`, `safraMaisAntiga` e `nomeMaisAntigo`) ficam no fluxo principal e são atualizados a cada repetição do laço `do...while`.
- Conforme o enunciado, **não foram usados arrays nem objetos**: todas as informações são manipuladas por variáveis simples.

---

## Estrutura do projeto

```
vinheria-agnello-checkpoint02/
│
├── index.html
├── README.md
│
└── src/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── assets/
        └── imgs/
            └── entrada_vinheria_flat.png
```

---

## Tecnologias

- HTML5
- CSS
- JavaScript
- Git e GitHub

---

## Integrantes

- Maria Eduarda Basilio
- Beatriz Martin da Paz

---

## Links

- **GitHub Pages:** https://biamartin-18.github.io/vinheria-agnello-checkpoint02/
- **Repositório:** https://github.com/BiaMartin-18/vinheria-agnello-checkpoint02