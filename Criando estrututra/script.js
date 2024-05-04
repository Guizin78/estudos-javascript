
//Base Geral do codigo
let listElement = document.querySelector("#app ul");
let buttonElement = document.querySelector("#app button");
let inputElement = document.querySelector("#app input");

let tarefas = JSON.parse(localStorage.getItem("listaTarefas")) ||  [];

//LISTANDO AS TAREFAS
function renderTarefas(){
listElement.innerHTML = "";

tarefas.map((todo) =>{
    let liElement = document.createElement("li");
    let tarefaText = document.createTextNode (todo);

//REMOVENDO ITENS DA LISTA

let linkElement = document.createElement("a");
linkElement.setAttribute("href", "#");

let linkText = document.createTextNode(" Excluir");
linkElement.appendChild(linkText);

let posicao = tarefas.indexOf(todo);

linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`);

    liElement.appendChild(tarefaText);
    liElement.appendChild(linkElement);
    listElement.appendChild(liElement);
})

}

renderTarefas();
//FUNCIONAMENTO DA LISTA
function adicionarTarefas(){

    if(inputElement.value === ''){
        alert("Digite algo!");
        return false;
      }

    else{
        let novaTarefa = inputElement.value;
        tarefas.push(novaTarefa);
        inputElement.value = '';
    }

renderTarefas();
dadosSalvos();

}

buttonElement.onclick = adicionarTarefas;

function deletarTarefa(posicao){
    tarefas.splice(posicao, 1);
    renderTarefas();
    dadosSalvos();
}

//LOCAL STORAGE

function dadosSalvos(){
localStorage.setItem("listaTarefas", JSON.stringify(tarefas) )
}