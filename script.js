const menulateral = document.querySelector(".menu-lateral");
const botaoRecolher = document.querySelector('#botao-menu');

botaoRecolher.addEventListener('click', function (evento){
    menulateral.classList.toggle("recolhido");
});

