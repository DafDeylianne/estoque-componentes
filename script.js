const menulateral = document.querySelector(".menu-lateral");
const botaoRecolher = document.querySelector("#botao-menu");
const pesquisar = document.querySelector(".pesquisa");
const corpoTabela = document.querySelector(".corpo-tabela");
const linhasTabela = document.querySelectorAll(".corpo-tabela tr");
const filtro = document.querySelector(".filtro");

botaoRecolher.addEventListener("click", function () {
    menulateral.classList.toggle("recolhido");
});

pesquisar.addEventListener("input", function () {
    const textoPesquisado = pesquisar.value.toLowerCase();

    linhasTabela.forEach(function (linha) {
        const textoLinha = linha.textContent.toLowerCase();

        if (textoLinha.includes(textoPesquisado)) {
            linha.style.display = "table-row";
        } else {
            linha.style.display = "none";
        }
    });
});