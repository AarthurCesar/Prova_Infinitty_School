// [JSIA-A04]  Crie um programa em JavaScript que permita ao usuário gerenciar uma lista de compras utilizando arrays. O programa deve permitir a adição de itens, a remoção de itens e a exibição de todos os itens da lista.

// Requisitos do Projeto:
// * Adicionar Itens:
//  - Utilize o método push() para permitir que o usuário adicione novos itens à lista de compras.

// * Remover Itens:
//  - Permita que o usuário remova um item específico utilizando o método splice().
//  - O programa deve solicitar o índice do item a ser removido.

// * Exibir Lista:
//  - Use um loop for...of para percorrer e exibir os itens da lista. Cada item deve ser mostrado com seu respectivo índice.

// * Atualizar Itens:
//  - Permita que o usuário atualize um item da lista ao fornecer o índice e o novo valor.




let listaDeCompras = ['Chá', 'Café', 'Lasanha'];

function adicionarItem(item) {
    listaDeCompras.push(item);
    console.log(`Item "${item}" adicionado à lista.`);
}

function removerItem(indice) {
    if (indice >= 0 && indice < listaDeCompras.length) {
        let itemRemovido = listaDeCompras.splice(indice, 1);
        console.log(`Item "${itemRemovido}" removido da lista.`);
    } else {
        console.log("Índice inválido.");
    }
}

function exibirLista() {
    if (listaDeCompras.length === 0) {
        console.log("A lista de compras está vazia.");
    } else {
        console.log("Lista de Compras:");
        for (let i = 0; i < listaDeCompras.length; i++) {
            console.log(`${i + 1}. ${listaDeCompras[i]}`);
        }
    }
}

function atualizarItem(indice, novoItem) {
    if (indice >= 0 && indice < listaDeCompras.length) {
        listaDeCompras[indice] = novoItem;
        console.log(`Item na posição ${indice + 1} atualizado para "${novoItem}".`);
    } else {
        console.log("Índice inválido.");
    }
}


adicionarItem("Arroz");
adicionarItem("Feijão");
adicionarItem("Macarrão");

exibirLista();

atualizarItem(1, "Feijão Preto");

exibirLista();

removerItem(0);

exibirLista();
