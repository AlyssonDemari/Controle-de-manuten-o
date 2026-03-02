const buttons = document.querySelectorAll(".filter__button");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // 1. Primeiro, removemos a classe 'active' de TODOS os botões
        buttons.forEach(btn => btn.classList.remove('active'));

        // 2. Depois, adicionamos a classe 'active' apenas no que foi clicado
        button.classList.add('active');
    });
});