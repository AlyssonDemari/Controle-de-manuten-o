import {filtrarAoCarregar} from './filter.js'

const btnAbrir = document.querySelector('.add');
const btnFechar = document.querySelector('#teste');
const btnCreate = document.querySelector('.inputItem__createItem');
const card = document.querySelector('.inputItem');
const grid = document.querySelector('.itemReviw');
const item = document.querySelector('.itemReviw__card')

const titleImput = document.querySelector('#titleItem');
const IntervalInput = document.querySelector('#titleInterval');
const lastInput = document.querySelector('#titleLast');
const checkbox = document.querySelector('#frequencyFilter');


//! Vai ser alterado com o banco de dados 
        let odometer = document.querySelector('.control__status-field');
        const valorSalvo = localStorage.getItem('leituraOdometro');

        if (valorSalvo) {
        odometer.value = valorSalvo;
        }

        odometer.addEventListener('change', function(event) {
        const valorFinal = event.target.value;
        localStorage.setItem('leituraOdometro', valorFinal);
        });
//! Final


//? Função que limpa os inputs
const clearInputs = () => {
    titleImput.value = '';
    IntervalInput.value = '';
    lastInput.value = '';
    checkbox.checked = '';
};

//? Função que abre o card para criar o item
const openCreate = () => {
    card.classList.remove('hidden');
    titleImput.focus();
};

//? Função que fecha o card para criar o item
const closeCreate = () => {
    card.classList.add('hidden');
    clearInputs();
};

btnAbrir.addEventListener('click', openCreate);
btnFechar.addEventListener('click', closeCreate);

//? Função que realmente cria o item
btnCreate.addEventListener('click', () => {
    const titleValue = titleImput.value.trim();
    const intervalValue = IntervalInput.value.trim();
    const lastValue = lastInput.value.trim();

    //! teste
    let faltam = Number(intervalValue) + Number(lastValue) - Number(valorSalvo)

    if (!titleValue || !intervalValue || !lastValue || !faltam) {
        alert("Por favor, preencha todos os campos antes de continuar.");
        return; 
    }

    const isImportant = checkbox.checked;

    createItem(titleValue, intervalValue, lastValue, isImportant, faltam);
    filtrarAoCarregar()
    closeCreate();
});



//? Função quer renderiza o item
const createItem = (titleValue, intervalValue, lastValue, isImportant, faltam) => {
    const template = `
        <div class="itemReviw__card ${isImportant ? 'important' : ''}">
            <header class="itemReviw__header">
                <i class="itemReviw__icon fa-solid fa-screwdriver-wrench"></i>
                <div class="itemReviw__titleGroup">
                    <h2 class="itemReviw__name">${titleValue}</h2>
                    <p class="itemReviw__interval">A cada ${intervalValue} KM</p>
                </div>
            </header>
        
            <div class="itemReviw__status">
                <div class="itemReviw__textGroup">
                    <p class="itemReviw__mudeStatus">Em bom estado</p>
                    <p class="itemReviw__remaining">Faltam ${faltam} KM</p> 
                </div>

                <div class="progress-container">
                    <div class="progress-bar"></div>
                </div>
            </div>

            <footer class="itemReviw__footer">
                <p class="itemReviw__lastChange">Última troca: ${lastValue} KM</p>
                <button class="itemReviw__button">Atualizar <i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button>
            </footer>
        </div>
    `;

    grid.insertAdjacentHTML('beforeend', template);
};


