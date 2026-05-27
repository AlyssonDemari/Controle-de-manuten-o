const frequencias = document.querySelectorAll(".filter__button");

frequencias.forEach((botao) => {
    botao.addEventListener('click', () => {
        frequencias.forEach(b => b.classList.remove('active'));
        
        botao.classList.add('active');
    });
});


const btnAbrir = document.querySelector('.add');
const btnFechar = document.querySelector('#teste');
const card = document.querySelector('.inputItem');
const inputTitulo = document.querySelector('#titulo');

btnAbrir.addEventListener('click', () => {
  card.classList.remove('hidden');
  inputTitulo.focus();
});


btnFechar.addEventListener('click', () => {
  card.classList.add('hidden');
});