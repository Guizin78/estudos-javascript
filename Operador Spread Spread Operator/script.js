//Spread Operator

//---------------------------------------------------------------------------------------------------------------

//Spread Operator para arrays:

//let primeiros = [1, 2, 3];
//let numeros = [4 , 5, 10];

//oq fazer para adicionar a var primeiros contida no numeros, com que cada item seja 1 item na array:

//let numeros = [...primeiros, 4 , 5, 10];
//console.log(numeros);

//----------------------------------------------------------------------------------------------------------------

//da mesma forma para objetos:

//let pessoa ={
   // nome: "Guilherme" ,
    //cargo: "Developer FullStack",
    //idade: 19
//};

//let novaPessoa ={
  //  ...pessoa,
//status: "ATIVO" , 
//cidade: "Salvador",
//telefone: "7198860-0145"
//};

//console.log(novaPessoa);

//--------------------------------------------------------------------------------------------------------------------

// outro exemplo:

function novoUsuario(info){
    let dados = {
        ...info,
        status:"ATIVO",
        admissao: "25-01-2023" ,
        codigo:"8262"
       };
    
       console.log(dados);
}

novoUsuario({nome: "Guilherme", sobrenome: "Moreira", idade: 19, cargo: "Developer FullStack"});