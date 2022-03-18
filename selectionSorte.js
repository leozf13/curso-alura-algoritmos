const livros = require('./arrayLivros');
const menorValor = require('./menorValor');

for(let i = 0; i < livros.length; i++) {
    let menor = menorValor(livros, i)

    let livroAtual = livros[i];
    let livroMenorPreco = livros[menor];

    livros[i] = livroMenorPreco;
    livros[menor] = livroAtual;
}

console.table(`
A lista de livros ordenada por preços ficou assim:
${livros}
`)