let listaDeCompras = [];

function exibirLista() {
  console.log("Lista de Compras:");
  listaDeCompras.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
}

function adicionarItem(item) {
  listaDeCompras.push(item);
  console.log(`${item} adicionado à lista.`);
  exibirLista();
}

function removerItem(itemOuPosicao) {
  if (typeof itemOuPosicao === "number") {
    if (itemOuPosicao > 0 && itemOuPosicao <= listaDeCompras.length) {
      const itemRemovido = listaDeCompras.splice(itemOuPosicao - 1, 1)[0];
      console.log(`${itemRemovido} removido da lista.`);
    } else {
      console.log("Posição inválida.");
    }
  } else {
    const index = listaDeCompras.indexOf(itemOuPosicao);
    if (index !== -1) {
      listaDeCompras.splice(index, 1);
      console.log(`${itemOuPosicao} removido da lista.`);
    } else {
      console.log(`${itemOuPosicao} não encontrado na lista.`);
    }
  }
  exibirLista();
}

function pesquisarItem(itemOuPosicao) {
  if (typeof itemOuPosicao === "number") {
    if (itemOuPosicao > 0 && itemOuPosicao <= listaDeCompras.length) {
      console.log(
        `Item na posição ${itemOuPosicao}: ${listaDeCompras[itemOuPosicao - 1]}`
      );
    } else {
      console.log("Posição inválida.");
    }
  } else {
    const index = listaDeCompras.indexOf(itemOuPosicao);
    if (index !== -1) {
      console.log(`${itemOuPosicao} encontrado na posição ${index + 1}.`);
    } else {
      console.log(`${itemOuPosicao} não encontrado na lista.`);
    }
  }
}

// Exemplos de uso:
adicionarItem("Arroz");
adicionarItem("Feijão");
adicionarItem("Macarrão");

removerItem(2);
removerItem("Arroz");

pesquisarItem("Macarrão");
pesquisarItem(1);
pesquisarItem("Frango");
