

//Template Strings

//Conceito: é uma maneira mais otimizada de concatenar ou unir dados para formar uma expressão.

let nome = 'Guilherme';
let sobrenome ='Moreira';
let idade = 19;

//let mensagem = "Meu nome é " + nome + " "+ sobrenome + " e eu tenho " + idade + " anos de idade";

let mensagem = `Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} de idade`

console.log(mensagem);