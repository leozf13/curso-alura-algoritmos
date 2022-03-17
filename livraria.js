//Aula I

const livros = {
    javaScript : {
        nome: "javaScript",
        preco: 25
    },

     php : {
        nome: "PHP",
        preco: 15
    },

    java : {
        nome: "Java",
        preco: 30
    },

    elixir : {
        nome: "Elixir",
        preco: 50
    },

    go : {
        nome: "Go",
        preco: 45
    },

    phyton : {
        nome: "Phyton",
        preco: 20
    }
}

const precosLivros = [25, 15, 30, 50, 45, 20];

function menorPreco(array) {

    let precoMinimo = 0; //índice

    for(let i = 0; i < array.length; i++){
        if(array[i] < array[precoMinimo]){
            precoMinimo = i; //guarda o índice da onde está o número mais baixo
        }else{
            continue;
        }
    }

    return array[precoMinimo]; //retorna o menor número do array 
}

console.log(menorPreco(precosLivros))


//console.log(livros)

// function ordenaPreco(objeto){
//     let temp = [];
//      console.log("Ola")
//     for (let i = 0; i < objeto.length; i++) {
//         for (let j = 1; j <= objeto.length; j++){
//             if(objeto[i].preco > objeto[j].preco && objeto[j].preco < objeto[i].preco){
//                 temp = objeto[j];
//                 objeto[j] = objeto[i];
//                 objeto[i] = temp;
//                 console.log("Olá")
//             }else{
//                 continue;
//             }
//         }
//     }
//     return objeto;
// }


