import readlineSync from "readline-sync"

const lista = [];
let resposta = "";

const adicionarNaLista = (prop) =>{
    lista.push(prop);
};

const ordenar = () => {
    lista.sort();
};

const listar = () => {
    lista.forEach((elemento)=> {console.log(elemento);});
};

while (true){
    resposta = readlineSync.question("Digite a propriedade CSS ou 'SAIR' para exibir a listagem e encerrar: ");

    if(resposta.toLocaleLowerCase() == "sair"){
        ordenar();
        listar();
        break;
    } else if (resposta.toLowerCase() !== "sair" && resposta !=="") {
        adicionarNaLista(resposta);
      }
    }