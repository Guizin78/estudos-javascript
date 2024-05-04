//setInterval : basicamente vai executar de tempos em tempos infinitamente

//function acao(){
//  document.write("Executando... <br/> ")
// }
 //podendo forar tb um setInterval com uma função fantasma:

// var timer = setInterval(() => {
   // document.write("Executando.. <br/>");
 //   }, 1000)

//========================================================================================================================


//setTimeout : Executa apenas uma vez

//function acao(){
  //  document.write("Executando... <br/>")
//}

//setTimeout(acao, 3000)

//Função anonima

setTimeout(() =>{
console.log("EXECUTOU NOSSO TIMEOUT")
}, 3000);