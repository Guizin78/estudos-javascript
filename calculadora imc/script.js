/* 
Abaixo de 17 Muito abaixo do peso
Entre 17 e 18,49 Abaixo do peso
Entre 18,50 e 24,99 Peso Normal
Entre 25 e 29,99 Acima do peso
*/

//  peso / (altura*altura)

// O "EVENT" TEM UM EFEITO DE REFRESH NA PAG.

var peso;
var altura;
var resultado;
var imc;

function calcular(event){
event.preventDefault();

peso = document.getElementById('peso').value;
altura = document.getElementById('altura').value;

imc = peso / (altura*altura);

resultado = document.getElementById('resultado');

if(imc <17){
    resultado.innerHTML = '<br/> seu resultado foi: ' + imc.toFixed(2) + '</br> CUIDADO, você está muito abaixo do peso'
}

else if(imc > 17 && imc <= 18.49){
    resultado.innerHTML = '<br/> seu resultado foi: ' + imc.toFixed(2) + '</br> CUIDADO, você está abaixo do peso'
}

else if(imc > 18.50 && imc <= 24.99){
    resultado.innerHTML = '<br/> seu resultado foi: ' + imc.toFixed(2) + '</br> Você está com o peso Normal'
}

else if(imc > 25 && imc <= 29.99){
    resultado.innerHTML = '<br/> seu resultado foi: ' + imc.toFixed(2) + '</br> Você está acima do peso'
}

else if(imc >= 30){
    resultado.innerHTML = '<br/> seu resultado foi: ' + imc.toFixed(2) + '</br> CUIDADO THAIS CARLA'
}

document.getElementById('altura').value = '';
document.getElementById('peso').value = '';

}