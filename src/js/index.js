import { carregarRevisoes } from './json.js';
import { inicializarFiltros } from '../js/filterCard.js'; 

inicializarFiltros();

carregarRevisoes().then(dados => {
    if (dados) {
        console.log("Sucesso! Dados recebidos:", dados);
    }
});


