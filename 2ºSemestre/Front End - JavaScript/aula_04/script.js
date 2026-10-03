/*
explícito
let nome;
nome = "lucas"; //quando eu ainda nao sei, e preencho posteirormente 

implícito
let idade = "19";  // quando eu sei o valor do daddo

let dia, mes, ano; // declarar mais de um dado dentro de uma variavel
dia ="11"; mes = "Setembro"; ano = "2026";
*/

let saida = document.getElementById("saida");

let estudante = "Lucas";
let curso = "ADS";
let materia = "FrontEnd - JavaScript";
let conteudo = "Variáveis, tipos de dados e operadores";

saida.innerHTML = "👤Aluno: " + estudante;
saida.innerHTML += "<br>💣Curso: " + curso;
saida.innerHTML += "<br>📚Matéria: " + materia;
saida.innerHTML += "<br>📖Conteúdo: " + conteudo;



let oct = 0b10;
let bin = 0b10;
let hexa = 0x10;
let dia, nota;
dia = 10;
mes = 9;
ano = 2026;
nota = 9.74;
barra = "/";
let cep = "12345678";
const PI = 3.14;
let calc;
calc = PI + 2;
saida.innerHTML="nota: "+nota;
saida.innerHTML+="<br>nota formatada: "+nota.toFixed
(1);
saida.innerHTML+="<br>dia: "+dia;
saida.innerHTML+="<br>oct: "+oct;
saida.innerHTML+="<br>bin: "+bin;
saida.innerHTML+="<br>hexa: "+hexa;
saida.innerHTML+="<br>cep: "+cep;
saida.innerHTML+="<br>Data: "+dia+barra+mes+barra+ano;
saida.innerHTML+="<hr>Calc: "+calc;  // hr separa com uma linha horizontal
// todo numero que começa com 0 é octal, ou seja, temos que tratar como string