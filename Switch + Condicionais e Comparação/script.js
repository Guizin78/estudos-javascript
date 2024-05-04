
//Switch

function pedir(){
    var valor = prompt("Digite um valor de 1 à 4.")

switch(Number(valor)){

case 1:

    alert("Você escolher o Suco!");
    break;

    case 2:

        alert("Você escolheu a Àgua gelada");
        break;

        case 3:

            alert("Você escolher o Sorvete");
break;

case 4:

    alert("Você Chamou o Garçom");

break;

default:

alert("Escolha um número entre 1 à 4");

break;

}

}

//CONDICIONAIS!

var valor = 20;

if(valor === 30){
    console.log("Sim o valor é igual a 30!!") 
}

else{
console.log("Numero diferente de 30!!")
} 

// === -> valor e tipo da variavel
// == -> apenaso valor da variavel
// if = se | ?
// else = se não | :

var nome = "Guilherme"
var userOnline = true;

if(userOnline === true){
    console.log("Usurario está online!")
}

else{
    console.log("Usuario está offline!!")
}

var numero = 90

numero === 10 ? console.log("Numero igual a 10 ") : console.log("Numero não é 10")
