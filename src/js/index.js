const frequencias = document.querySelectorAll(".filter__button");

frequencias.forEach((botao) => {
    botao.addEventListener('click', () => {
        frequencias.forEach(b => b.classList.remove('active'));
        
        botao.classList.add('active');
    });
});


const btnAbrir = document.querySelector('.add');
const btnFechar = document.querySelector('#teste');
const btnCreate = document.querySelector('.createItem');
const card = document.querySelector('.inputItem');
const grid = document.querySelector('.itemReviw');
const item = document.querySelector('.itemReviw__card')

const inputTitulo = document.querySelector('#titulo');
const inputCada = document.querySelector('#cada');
const inputLast = document.querySelector('#ultima');
const checkbox = document.querySelector('#frequencyFilter');

const clearInputs = () => {
    inputTitulo.value = '';
    inputCada.value = '';
    inputLast.value = '';
    checkbox.checked = '';
};

const openCreate = () => {
    card.classList.remove('hidden');
    inputTitulo.focus();
};

const closeCreate = () => {
    card.classList.add('hidden');
    clearInputs();
};

btnAbrir.addEventListener('click', openCreate);
btnFechar.addEventListener('click', closeCreate);

// CRIAÇÃO DO ITEM
btnCreate.addEventListener('click', () => {
    const tituloValue = inputTitulo.value.trim();
    const cadaValue = inputCada.value.trim();
    const lastValue = inputLast.value.trim();

    // Validação básica: impede a criação se algum campo estiver vazio
    if (!tituloValue || !cadaValue || !lastValue) {
        alert("Por favor, preencha todos os campos antes de continuar.");
        return; 
    }

    const isImportant = checkbox.checked;

    createItem(tituloValue, cadaValue, lastValue, isImportant);
    closeCreate();
});

//FUNÇÃO DE RENDERIZAÇÃO
const createItem = (tituloValue, cadaValue, lastValue, isImportant) => {
    const template = `
        <div class="itemReviw__card ${isImportant ? 'important' : ''}">
            <header class="itemReviw__header">
                <i class="itemReviw__icon fa-solid fa-screwdriver-wrench"></i>
                <div class="itemReviw__titleGroup">
                    <h2 class="itemReviw__name">${tituloValue}</h2>
                    <p class="itemReviw__interval">A cada ${cadaValue} KM</p>
                </div>
            </header>
        
            <div class="itemReviw__status">
                <div class="itemReviw__textGroup">
                    <p class="itemReviw__mudeStatus">Em bom estado</p>
                    <p class="itemReviw__remaining">Faltam 1.800 KM</p> 
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


