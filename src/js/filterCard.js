export function inicializarFiltros() {
    const buttons = document.querySelectorAll(".filter__button");

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe de todos
            buttons.forEach(btn => btn.classList.remove('active'));
            // Adiciona apenas no clicado
            button.classList.add('active');
            
            console.log(`Filtro selecionado: ${button.textContent}`);
        });
    });
}