import './create.js';


const frequencias = document.querySelectorAll(".filter__button");

frequencias.forEach((botao) => {
    botao.addEventListener('click', () => {
        frequencias.forEach(b => b.classList.remove('active'));
        
        botao.classList.add('active');
    });
});


