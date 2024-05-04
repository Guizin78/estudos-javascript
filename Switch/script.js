
//Switch

function pedir(){

    var valor = prompt("Digite o valor de 1 a 4");

switch(Number(valor)){

case 1: 
alert("Você escolher 1 = Suco");
break;

case 2: 
alert("Você escolher 2 = Água Gelada");
break;

case 3: 
alert("Você escolher 3 = Sorvete");
break;

case 4: 
alert("Você escolher 4 = Chamar Garçom");
break;

default:
    alert("Escolha uma opcão entre 1 a 4!!");
    break;
}

}