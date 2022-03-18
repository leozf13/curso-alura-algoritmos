const livros = require('./arrayLivros'); // importa o objeto livros do arquivo arrayLivros

console.table(livros)

function menorPreco(objeto) {

    let menor = 0;

    for(let i = 0; i < objeto.length; i++){
        if(objeto[i].preco < objeto[menor].preco){
            menor = i;
        }else {
            continue;
        }
    }

    return objeto[menor];
}

// function ordenaLivros(objeto) {

//     let temp = {};

//     for(let i = 0; i < objeto.length; i++) {
//         for(let j = 1; j <= objeto.length; j++) {
//             if((objeto[i].preco) > (objeto[j].preco)) {
//                 temp = objeto[j];
//                 objeto[j] = objeto[i];
//                 objeto[i] = temp;
//             }else {
//                 continue;
//             }
//         }
//     }

//     return objeto;
// }

console.table(menorPreco(livros))
