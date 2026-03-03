
export async function carregarRevisoes() {
    try {
        const resposta = await fetch('./src/json/index.json'); 
        const dados = await resposta.json();
        return dados;
    } catch (erro) {
        console.error('Erro ao carregar o JSON:', erro);
    }
}

carregarRevisoes().then(dados => {
    const teste = document.querySelector(".itemReviw");

    teste.innerHTML = ""
    dados.forEach(item => {
        const card = `
      <div class="itemReviw__card">
        <header class="itemReviw__header">
            ${item.icon}
            <div class="itemReviw__titleGroup">
                <h2 class="itemReviw__name">${item.title}</h2>
                <p class="itemReviw__interval">A cada 3.000 KM</p>
            </div>
        </header>
    
        <div class="itemReviw__status">
            <div class="itemReviw__textGroup">
                <p class="itemReviw__mudeStatus">Em bom estado</p>
                <p class="itemReviw__remaining">Faltam 1.800 KM</p>
            </div>

            <!--! vai ser trocado por um JS -->
            <div class="progress-container">
                <div class="progress-bar"></div>
            </div>
        </div>

        <footer class="itemReviw__footer">
            
            <p class="itemReviw__lastChange">
                ${item.lastChange === "null" ? "" : `Última troca: ${item.lastChange} KM`}
            </p>

            <button class="itemReviw__button">Atualizar <i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button>

        </footer>
        </div>
        `

        teste.insertAdjacentHTML('beforeend', card);
    });
});
