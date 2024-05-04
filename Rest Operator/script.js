
//Rest Operator: modo de usar bem parecido com o spread, entretanto ele é mais para functions/funções. Tendo por função permitir representar um número indefinido de argumentos na forma de um Array.

//EX: uma function que passe uma lista de convidados.

//function convidados(...nomes){
    //console.log("TODOS OS CONVIDADOS, SEJAM BEM-VINDOS!!!!")
  //  console.log(nomes);
//}

//convidados("Guilherme", "Matheus", "Lucas", "Rebeca", "Salomão");

//Desse modo entretanto vai aparecer no console somente guilherme, por conta de que cada um é um argumento. para isso teria que na function convidados(primeironome, segundonome, terceironome); e passar cada console.log para cada um deles!! ao inves de fazer isso basta colocar somente o ... que pega esse parametro e transforma em uma array para que cada argumento apareça no console.

//Outro exemplo, um sorteador de numero: 

function sorteador(...numeros){
console.log(numeros);

const numeroGerado = Math.floor(Math.random() * numeros.length);

console.log(numeros[numeroGerado]);
};

sorteador(1, 4, 5, 60, 670, 1000, 777, 123);