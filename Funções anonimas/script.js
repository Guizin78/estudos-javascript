
//Funções anonimas

/* as 3 etapas de uma arrow function () => {}

1- Os parenteses, que é por onde a função recebe os argumentos (assim como nas funções tradicionais)

2-  "seta" => responsavel pelo nome "arrow"

3-E as chaves: o bloco que representa o corpo da função
*/ 

function somar(a, b){
    let total = a+b;
return console.log(total);
}

somar(10, 30);

let subtrair = (valor1, valor2) => {
    let total = valor1 - valor2;
    console.log(total);
}

subtrair(70, 8);

let numeros = [1, 3, 5, 10];

numeros.map((item) => {
    //aqui vai toda a logica do map
console.log(item);
});
