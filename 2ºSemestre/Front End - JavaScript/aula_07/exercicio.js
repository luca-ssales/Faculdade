/*
Digitar um numero inteiro
mostrar o valor digitado
ao lado do valor apresentar se 
numero pe PAR ou IMPAR
direcionar a saida para o teste
usando ternario
*/

let saida = document.getElementById("saida");
let n1 = prompt("Digite um número inteiro: ");
let resultado = (n1 % 2 === 0) ? "PAR" : "IMPAR";
saida.innerHTML = `O número ${n1} é ${resultado}.`;
