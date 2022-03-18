const livros = require('./arrayLivros'); // importa o objeto livros do arquivo arrayLivros

function menorValor(arrayProdutos, posicaoInicial) {

    let maisBarato = posicaoInicial;

    for(let i = 0; i < arrayProdutos.length; i++){
        if(arrayProdutos[i].preco < arrayProdutos[maisBarato].preco){
            maisBarato = i;
        }else {
            continue;
        }
    }

    return maisBarato;
}

module.exports = menorValor;