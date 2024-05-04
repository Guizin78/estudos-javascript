
// Trabalhando com datas

//CRIANDO NOVA DATA: var data = new Date() "Mostra a data atual d seu PC"

//Desembrunhando: Horas: data.getHours();  Minutos: data.getMinutes  Segundos: data.getSeconds();

//CRIANDO DATA ESPECIFICA: var datanova = new Date("november 27, 1997")

//PEGANDO DATA EM MILLISEGUNDOS: Date.parse(datanova ou a var denominada);

//alterando o datanova: datanova.getDate()+"/"+getDay()+"/"+datanova.getMonth()+"/"+datanova.getFullYear();

//Acrescentando dias: datanova.setDay(datanova.getDay()+5); da ms forma com horas, minutos meses e etc.

//Adicionando dias da semana: var dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
//dias[datanova.getDay()];
