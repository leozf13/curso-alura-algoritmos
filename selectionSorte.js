const livros = require('./arrayLivros'); //Chama o array de objeto livros do código arrayLivros
const menorValor = require('./menorValor'); //Chama a função que encontra o menor valor do array livros no código menorValor

for(let i = 0; i < livros.length; i++) {
    let menor = menorValor(livros, i); //A variável menor vai receber o índice da onde está o menor preço que a função menorValor retornou

    console.log(`Menor é: ${menor}`)

    let livroAtual = livros[i]; // Variavel temporaria livroAtual recebe o objeto livros na posição atual do for

    console.log(`O livro atual é: ${livroAtual.nome}`)

    let livroMenorPreco = livros[menor];  // A variável temporaria livroMenorPreco recebe o objeto livros no indice que a função menorValor retornou

    console.log(`O livro de menor preço é: ${livroMenorPreco.nome}`)

    livros[i] = livroMenorPreco; // Livros na posição atual recebe o objeto Livro de menor preço
    livros[menor] = livroAtual; // E o objeto livros na posição menor recebe o livro da posição atual
}

console.table(livros) // exibe o array de objeto livros ordenado por preço