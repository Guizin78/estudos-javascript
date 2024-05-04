//Includes, startsWith, endsWith

/*
Includes = verificar se inclue em algo que queremos buscar.
Exemplo: 
*/


let nomes = ["Matheus", "Lucas", "Jose"];

console.log(nomes.includes("Matheus")); //Volta true, de forma boolean.

console.log(nomes.includes("Guilherme")); //Volta false, de forma boolean.

//Outro exemplo utilizando as codicionais:

if(nomes.includes("Lucas")){
    console.log("Está presente na lista!");
} else{
    console.log("Não está presente na lista!")
}

//OBS: É SENSITIVEL, Matheus e matheus se tornam valores diferentes.



/*
StartsWith = Verifica se algum texto começa com oq você passar.
Exemplo:
*/

let nome = "Matheus";

console.log(nome.startsWith("Mat"));//Volta true, de forma boolean.

/*
endsWith = Verifica se algum texto termina com oq você passar.
Exemplo:
*/

console.log(nome.endsWith("ius"));//Volta false, de forma boolean.