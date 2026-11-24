const menulateral = document.querySelector(".menu-lateral");// Seleciona o menu lateral
const botaoRecolher = document.querySelector("#botao-menu");// Seleciona o botão de recolher o menu
const pesquisar = document.querySelector(".pesquisa");// Seleciona o campo de pesquisa
const filtro = document.querySelector(".filtro");// Seleciona o filtro de componentes
const linhasTabela = document.querySelectorAll(".corpo-tabela tr");// Seleciona todas as linhas da tabela
const botaoNovoComponente = document.querySelector(".botao-componente-cadastro");// Seleciona o botão de novo componente
const modalComponente = document.querySelector("#modal-componente");// Seleciona o modal de cadastro
const botaoCancelar = document.querySelector(".botao-cancelar-cadastro");// Seleciona o botão de cancelar
const botaoFechar = document.querySelector(".fechar-modal");// Seleciona o botão X do modal
const formComponente = document.querySelector("#form-componente"); // Seleciona o formulário de cadastro
const corpoTabela = document.querySelector(".corpo-tabela");

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
formComponente.addEventListener("submit", function (event) {
    event.preventDefault();

    // Captura os valores do formulário
    const nomeComponente = document.querySelector("#nome").value;
    const quantidadeComponente = document.querySelector("#quantidade").value;
    const marcaComponente = document.querySelector("#marca").value;
    const tamanhoComponente = document.querySelector("#tamanho").value;

    // Conta os componentes existentes na tabela
    const totalComponentes = corpoTabela.querySelectorAll("tr").length;

    // Calcula o próximo número
    const proximoNumero = totalComponentes + 1;

    // Transforma o número em texto
    const texto = proximoNumero.toString();

    // Formata o número com zeros à esquerda
    const numeroFormatado = texto.padStart(3, "0");

    const codigoComponente = "COMP-" + numeroFormatado;

    console.log(codigoComponente);


    // Aqui vamos calcular o próximo número

    // Cria o objeto do componente
    const componente = {
        codigo: codigoComponente,
        nome: nomeComponente,
        quantidade: quantidadeComponente,
        marca: marcaComponente,
        tamanho: tamanhoComponente
    };

    console.log(componente);

    const novaLinha = document.createElement("tr");
    const celulaCodigo = document.createElement("td");
    celulaCodigo.textContent = componente.codigo;
    const celulaNome = document.createElement("td");
    celulaNome.textContent = componente.nome;
    const celulaQuantidade = document.createElement("td");
    celulaQuantidade.textContent = componente.quantidade;
    const celulaMarca = document.createElement("td");
    celulaMarca.textContent = componente.marca;
    const celulaTamanho = document.createElement("td");
    celulaTamanho.textContent = componente.tamanho;

    novaLinha.appendChild(celulaCodigo)
    novaLinha.appendChild(celulaNome);
    novaLinha.appendChild(celulaMarca);
    novaLinha.appendChild(celulaTamanho);
    novaLinha.appendChild(celulaQuantidade);
    

    // Adiciona a nova linha ao corpo da tabela
    corpoTabela.appendChild(novaLinha);
    // Limpa os campos do formulário
    formComponente.reset();
    // Fecha o modal após cadastrar o componente
    modalComponente.classList.remove("ativo");

});