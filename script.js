
const menulateral = document.querySelector(".menu-lateral");
const botaoRecolher = document.querySelector("#botao-menu");
const pesquisar = document.querySelector(".pesquisa");
const filtro = document.querySelector(".filtro");
const linhasTabela = document.querySelectorAll(".corpo-tabela tr");
const botaoNovoComponente = document.querySelector(".botao-componente-cadastro");
const modalComponente = document.querySelector("#modal-componente");
const botaoCancelar = document.querySelector(".botao-cancelar-cadastro");

botaoRecolher.addEventListener("click", function () {
    menulateral.classList.toggle("recolhido");
});

function atualizarTabela() {
    const textoPesquisado = pesquisar.value.toLowerCase();
    const valorSelecionado = filtro.value;

    linhasTabela.forEach(function (linha) {
        const textoLinha = linha.textContent.toLowerCase();

        if (
            textoLinha.includes(textoPesquisado) &&
            (
                valorSelecionado === "Todos" ||
                textoLinha.includes(valorSelecionado.toLowerCase())
            )
        ) {
            linha.style.display = "table-row";
        } else {
            linha.style.display = "none";
        }
    });
}

pesquisar.addEventListener("input", function () {
    atualizarTabela();
});

filtro.addEventListener("change", function () {
    atualizarTabela();
});

botaoNovoComponente.addEventListener("click", function() {
    modalComponente.classList.add("ativo");
})

botaoCancelar.addEventListener("click", function() {
    modalComponente.classList.remove("ativo");
})