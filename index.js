//Insira o total de vitórias:
let vitorias = 578

//Insira o total de derrotas:
let derrotas = 480

let resultado = totalDeVitorias(vitorias,derrotas)

if (resultado <= 10) {
  ranking = "Ferro";
} else if (resultado >= 11 && resultado <= 20) {
  ranking = "Bronze";
} else if (resultado >= 21 && resultado <= 50) {
  ranking = "Prata";
} else if (resultado >= 51 && resultado <= 80) {
  ranking = "Ouro";
} else if (resultado >= 81 && resultado <= 90) {
  ranking = "Diamante";
} else if (resultado >= 91 && resultado <= 100) {
  ranking = "Lendário";
} else {
  ranking = "Imortal";
}

//Resultado:
console.log("O Herói tem de saldo de " + resultado + " vitórias e está no nível " + ranking + ".")
  function totalDeVitorias (numA, numB){
    return numA - numB
}