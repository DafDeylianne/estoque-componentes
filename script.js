const menulateral = document.querySelector(".menu-lateral");// Seleciona o menu lateral
const botaoRecolher = document.querySelector("#botao-menu");// Seleciona o botão de recolher o menu
const pesquisar = document.querySelector(".pesquisa");// Seleciona o campo de pesquisa
const filtro = document.querySelector(".filtro");// Seleciona o filtro de componentes
const linhasTabela = document.querySelectorAll(".corpo-tabela tr");// Seleciona todas as linhas da tabela
const botaoNovoComponente = document.querySelector(".botao-componente-cadastro");// Seleciona o botão de novo componente
const modalComponente = document.querySelector("#modal-componente");// Seleciona o modal de cadastro
const botaoCancelar = document.querySelector(".botao-cancelar-cadastro");// Seleciona o botão de cancelar
const botaoFechar = document.querySelector(".fechar-modal");// Seleciona o botão X do modal

// MENU LATERAL

// Recolhe ou expande o menu lateral ao clicar no botão
botaoRecolher.addEventListener("click", function () {
    // Adiciona ou remove a classe recolhido
    menulateral.classList.toggle("recolhido");

});

// PESQUISA E FILTRO DE COMPONENTES

// Função para atualizar a tabela de acordo com a pesquisa e o filtro
function atualizarTabela() {
    // Pega o texto digitado e transforma em letras minúsculas
    const textoPesquisado = pesquisar.value.toLowerCase();
    // Pega o valor selecionado no filtro
    const valorSelecionado = filtro.value;
    // Percorre todas as linhas da tabela
    linhasTabela.forEach(function (linha) {
        // Pega o texto da linha e transforma em letras minúsculas
        const textoLinha = linha.textContent.toLowerCase();
        // Verifica se a linha corresponde à pesquisa e ao filtro
        if (
            // Verifica se a linha contém o texto pesquisado
            textoLinha.includes(textoPesquisado) &&
            (
                // Verifica se o filtro está selecionado como Todos
                valorSelecionado === "Todos" ||
                // Verifica se a linha contém o valor do filtro
                textoLinha.includes(valorSelecionado.toLowerCase())
            )
        ) {
            // Mostra a linha se atender às condições
            linha.style.display = "table-row";
        } else {
            // Esconde a linha se não atender às condições
            linha.style.display = "none";
        }
    });
}

// Atualiza a tabela sempre que digitar ou apagar algo na pesquisa
pesquisar.addEventListener("input", function () {
    atualizarTabela();
});

// Atualiza a tabela quando mudar a opção do filtro
filtro.addEventListener("change", function () {
    atualizarTabela();
});

// MODAL DE CADASTRO DE COMPONENTES

// Abre o modal ao clicar no botão Novo Componente
botaoNovoComponente.addEventListener("click", function () {
    // Adiciona a classe ativo para mostrar o modal
    modalComponente.classList.add("ativo");

});

// Fecha o modal ao clicar no botão Cancelar
botaoCancelar.addEventListener("click", function () {
    // Remove a classe ativo para esconder o modal
    modalComponente.classList.remove("ativo");
});

// Fecha o modal ao clicar no botão X
botaoFechar.addEventListener("click", function () {
    // Remove a classe ativo para esconder o modal
    modalComponente.classList.remove("ativo");
});

// CADASTRO DE COMPONENTES
