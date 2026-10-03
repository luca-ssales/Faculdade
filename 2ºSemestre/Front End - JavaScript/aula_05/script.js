let saida = document.querySelector("#saida");
saida.innerText = "Funciona aula5";


const num1 = parseInt(prompt("1️⃣Digite a primeira nota: "));
const num2 = parseInt(prompt("2️⃣Digite a segunda nota: "));
const num3 = parseInt(prompt("3️⃣Digite a terceira nota: "));
let media = (num1 + num2 + num3) / 3;

saida.innerHTML = "Média: " + media.toFixed(2);

const body = document.body;

if (media >= 7) {
    saida.innerHTML += "<br>Você foi aprovado!✔️";
    body.style.backgroundColor = "#00ff08";
}
else if (media >= 5) {
    saida.innerHTML += "<br>Você esta de recuperação!🤔";
    body.style.backgroundColor = "#ffff08";
}
else {
    saida.innerHTML += "<br>Você foi reprovado!❌";
    body.style.backgroundColor = "#ff0000";
}













/*
==========================
       COMENTARIOS
==========================

parseInt(valor ou variavel) -> converte para inteiro
parseFloat(valor ou variavel) -> converte para float
Number(valor ou variavel) -> converte para number
typeof(valor ou variavel) -> mostra o tipo da variavel

.toFixed(1) -> converte para float com 1 casa decimal
*/

