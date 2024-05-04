//PRIMEIRO DESAFIO : Criar uma lista de produtos.

//Primeiro passo: a lista deve conter os seguintes itens: computador, telefone, mouse, teclado. Exibir essa lista no console quandor abrir o index.html

let listaPc = ["Computador", "Telefone", "Mouse", "Teclado"];

console.log(listaPc);

//Segundo passo: mostre no console quantos itens tem nessa lista.

console.log(listaPc.length);

//Terceiro passo: retirar o produto mouse e retornar a lista no console.

listaPc.splice(2,1);// ao passar 2 quero deixar os 2 primeiros itens, e ao passar o 1 quero deixar o ultimo item.

console.log(listaPc);

// ou tambem pode ser executado assim:
console.log(listaPc.filter(p => p !== "Mouse"));

//Quarto passo: Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso exista esse produto na sua lista exiba um console falando que este produto existe e mostre tambem o nome deste produto caso não exista mostre uma mensagem avisando que o produto não foi encontrado.
const procurar = listaPc.find(p => p === 'Computador');

if (procurar){
    console.log(`Produto encontrado: ${procurar}`);
} else{
    console.log("Produto não encontrado!")
};

//Quinto passo:  Remova o segundo item da sua lista.

listaPc.splice(1,1);
console.log(listaPc);

//AGORA PROXIMO DESAFIO:

//------------------------------------------------------------------------------------

//Crie uma lista de apenas numeros 1,3,5,7,0,9

const listanumeros = [1, 3, 5 , 7, 0, 9];

//Primeiro passo:  Ordene essa lista do menor para o maior.

listanumeros.sort();
console.log(listanumeros);

//Segundo passo:  Retire o primeiro numero desta lista.

listanumeros.shift();
console.log(listanumeros);

//Terceiro passo: Inverta toda ordem da sua lista por exemplo: [1,3,5,7,9] para [9,7,5,3,1]

listanumeros.sort((a,b)=> b - a);
console.log(listanumeros);

// ou também pode ser utilizado o reverse:

console.log('Nova ordem: ' + listanumeros.reverse());

//AGORA PROXIMO DESAFIO:

//------------------------------------------------------------------------------------

//Crie uma string que contenha o dia de hoje:

let hoje1 = "08/04/2024";

//Primeiro passo: Separe essa data em variaveis dia onde contenha apenas o dia, mes onde contenha apenas o mes, e ano onde contenha apenas o ano.

let dia1 = "08";
let mes1 = "04";
let ano1 = "2024";

console.log(dia1 + " " + mes1 + " " + ano1);

// da forma do professor:

let hoje = '17/07/2019';
const [dia, mes, ano] = hoje.split('/');

console.log('Dia: ' + dia);
console.log('Mes: ' + mes);
console.log('Ano: ' + ano);