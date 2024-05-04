

//Desconstrução de um objeto:

let pessoa = {
nome: "Guilherme",
sobrenome: "Moreira",
empresa : "GOOGLE", 
cargo: "Programador FullStack"
};

//Normalmente ao querer chamar apenas um dos objetos se faz isso:

//console.log(pessoa.nome);
//console.log(pessoa.cargo);

//Fazendo isso de uma forma muito mais pratica e facil:

//const{nome, cargo, empresa, sobrenome} = pessoa

//console.log(nome);
//console.log(cargo);
//console.log(empresa);
//console.log(sobrenome);

//Mais facil do que ficar chamando pessoa.nome
//Caso ja exista uma variavel como por exemplo "nome" alem dessa utilizada é só um nome diferente atraves do: const{nome: nomePessoa};
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Desconstrução de um array:

let nomes = ["Matheus", "Guilherme", "Lucas", "Fernando"];

//0 = localização da array + matheus que é o nome dado para essa array
//let {0:PrimeiraPessoa, 2:TerceiraPessoa, 1:SegundaPessoa, 3: QuartaPessoa } = nomes;

//console.log(matheus);
//console.log(lucas);
//console.log(guilherme);
//console.log(QuartaPessoa);

//Usando a posição atraves da ordem dos itens

let [primeiroNome, segundoNome, terceiroNome, quartoNome ] = nomes;

console.log(primeiroNome);
console.log(terceiroNome);
console.log(segundoNome);
console.log(quartoNome);
