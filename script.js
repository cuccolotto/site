// Array para armazenar os itens do carrinho
let carrinho = [];

// Função para adicionar um item ao carrinho
function adicionarAoCarrinho(event) {
    const botao = event.target;
    const produto = botao.parentElement;
    const id = produto.getAttribute('data-id');
    const nome = produto.getAttribute('data-nome');
    const preco = parseFloat(produto.getAttribute('data-preco'));

    // Verifica se o item já está no carrinho
    const itemExistente = carrinho.find(item => item.id === id);

    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        carrinho.push({ id, nome, preco, quantidade: 1 });
    }

    atualizarCarrinho();
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
    const listaItens = document.getElementById('itens-carrinho');
    const totalElemento = document.getElementById('total');

    // Limpa a lista de itens
    listaItens.innerHTML = '';

    // Calcula o total
    let total = 0;

    // Adiciona cada item ao carrinho
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.nome} (${item.quantidade}x)</span>
            <span>R$ ${(item.preco * item.quantidade).toFixed(2)}</span>
        `;
        listaItens.appendChild(li);

        total += item.preco * item.quantidade;
    });

    // Atualiza o total
    totalElemento.textContent = total.toFixed(2);
}

// Adiciona evento de clique aos botões "Adicionar ao Carrinho"
document.querySelectorAll('.adicionar').forEach(botao => {
    botao.addEventListener('click', adicionarAoCarrinho);
});
