//? Função que altera qual botão esta ativo
const frequencias = document.querySelectorAll(".filter__button");

frequencias.forEach((botao) => {
    botao.addEventListener('click', () => {
        frequencias.forEach(b => b.classList.remove('active'));
        
        botao.classList.add('active');
    });
});


//? Lógica para filtrar
const todosCartoes = document.querySelectorAll('.itemReviw__card');
const botaoAtualizar = document.querySelector('.moreFrequency')
const botaoAtualizar2 = document.querySelector('.noFrequency');

//? Filtra todos frequentes ao carregar a página
function filtrarAoCarregar() {
    todosCartoes.forEach(cartao => {
        if (cartao.classList.contains('important')) {
            clickNoFrequency()
        } else {
            clickMoreFrequency()
        }
    });
}

//? Função que filtra os mais frequentes
const clickMoreFrequency = () => {
  const todosCartoes = document.querySelectorAll('.itemReviw__card');
  
  todosCartoes.forEach(cartao => {
    if (cartao.classList.contains('important')) {
      cartao.style.display = 'flex';
    } else {
      cartao.style.display = 'none';
    }
    
  });
}

//? Função que filtra os menos frequentes
const clickNoFrequency = () => {
  const todosCartoes = document.querySelectorAll('.itemReviw__card');
  
  todosCartoes.forEach(cartao => {
    
    if (cartao.classList.contains('important')) {
      cartao.style.display = 'none';
    } else {
      cartao.style.display = 'flex';
    }
    
  });
  
}

document.addEventListener('DOMContentLoaded', filtrarAoCarregar);
botaoAtualizar.addEventListener('click', clickMoreFrequency);
botaoAtualizar2.addEventListener('click', clickNoFrequency);