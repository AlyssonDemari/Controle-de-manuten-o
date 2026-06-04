import {filtrarAoCarregar} from './filter.js'

const btnAbrir = document.querySelector('.add');
const btnFechar = document.querySelector('#teste');
const btnCreate = document.querySelector('.inputItem__createItem');
const card = document.querySelector('.inputItem');
const grid = document.querySelector('.itemReviw');

const titleImput = document.querySelector('#titleItem');
const IntervalInput = document.querySelector('#titleInterval');
const lastInput = document.querySelector('#titleLast');
const checkbox = document.querySelector('#frequencyFilter');

//! Alterado com o banco de dados futuramente
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
    checkbox.checked = false;
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

    if (!titleValue || !intervalValue || !lastValue || !valorSalvo) {
        alert("Por favor, preencha todos os campos e defina o odômetro antes de continuar.");
        return; 
    }

    let kmAtual = Number(valorSalvo);
    let kmUltimaTroca = Number(lastValue);
    let kmIntervalo = Number(intervalValue);
    
    let proximaTroca = kmUltimaTroca + kmIntervalo
    let faltam = proximaTroca - kmAtual;
    
    let porcentagem = 0;
    let mudeStatus = "Faltam"
    
    if (faltam > 0) {
        porcentagem = (faltam / kmIntervalo) * 100;
    } else {
        mudeStatus = "Atrasado"
    }

    let kmVisuais = Math.abs(faltam);
    
    // Limita entre 0 e 100
    porcentagem = Math.max(0, Math.min(100, porcentagem));

    const valorPuro = Number(porcentagem.toString().replace('%', ''));
    const corBarra = valorPuro <= 40 ? '#ef4444' : '#10b981';

    const isImportant = checkbox.checked;

    createItem(titleValue, intervalValue, lastValue, isImportant, kmVisuais, porcentagem, corBarra, mudeStatus);
    filtrarAoCarregar();
    closeCreate();
});


//? Função quer renderiza o item - Adicionado parâmetro corBarra
const createItem = (titleValue, intervalValue, lastValue, isImportant, kmVisuais, porcentagem, corBarra, mudeStatus) => {
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
                    <p class="itemReviw__mudeStatus" style="color: ${corBarra};">
                        ${kmVisuais > 0 ? 'Em bom estado' : 'Troca necessária'}
                    </p>
                    <p class="itemReviw__remaining" style= "color: ${corBarra};">${mudeStatus} ${kmVisuais} KM</p> 
                </div>

                <div class="progress-container">
                    <div class="progress-bar" style="width: ${porcentagem}%; color: ${corBarra};"></div>
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