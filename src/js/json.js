
export async function carregarRevisoes() {
    try {
        const resposta = await fetch('../src/json/index.json'); 
        const dados = await resposta.json();
        return dados;
    } catch (erro) {
        console.error('Erro ao carregar o JSON:', erro);
    }
}