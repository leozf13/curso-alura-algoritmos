const livros = require('./arrayLivros');
const menorValor = require('./menorValor');

for(let i = 0; i < livros.length; i++) {
    let menor = menorValor(livros, i);

    console.log(`Menor é: ${menor}`)

    let livroAtual = livros[i];

    console.log(`O livro atual é: ${livroAtual.nome}`)

    let livroMenorPreco = livros[menor];

    console.log(`O livro de menor preço é: ${livroMenorPreco.nome}`)

    livros[i] = livroMenorPreco;
    livros[menor] = livroAtual;
}

console.table(livros)