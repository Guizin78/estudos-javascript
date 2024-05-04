
// URL: https://sujeitoprogramador.com/rn-api/?api=posts

let listElement = document.querySelector("#app");

let posts = [];

function nutriApp(){

    //API EXTERNA
fetch("https://sujeitoprogramador.com/rn-api/?api=posts")

//THEN = SE DER CERTO!

//JSON = JSON O JSON (JavaScript Object Notation) é um formato de arquivo para manter e trocar informações legíveis pelas pessoa.

.then((response) => response.json())
.then((json)=> {
    posts = json;

    posts.map((item)=>{

//Elementos da API

let liElement = document.createElement("li");
let titleElement = document.createElement("strong");
let imgElement = document.createElement("img");
let descriptionElement = document.createElement("a");

//TITULOS DA API
let titleText = document.createTextNode(item.titulo);
titleElement.appendChild(titleText);
liElement.appendChild(titleElement);

//IMAGENS DA API
imgElement.src = item.capa;
liElement.appendChild(imgElement);

//SUBTITULO DA API
let descriptionText = document.createTextNode(item.subtitulo);

descriptionElement.appendChild(descriptionText);
liElement.appendChild(descriptionElement);

//PASSANDO AS ARRAYS/LI DA API PARA A UL DO HTML

listElement.appendChild(liElement);

    });

})

//CATCH = SE DER ERRADO!!

.catch(() => {
console.log("DEU ALGUM ERRO!!");
})

};

nutriApp();