document.write("Externo"); // Escreve o texto diretamente na página

alert("Alertando..."); // Exibe uma caixa de alerta no navegador

console.log("Oi lucas"); // Exibe a mensagem no console do navegador

document.getElementById("saida").innerHTML = "Falou nada!!!"; // Adiciona o texto no elemento com o ID "saida"

document.getElementById("saida").innerHTML += "<hr>Lucas Sales"; // Acrescenta uma linha e o nome sem apagar o conteúdo anterior

document.querySelector(".teste").innerHTML = "Classe"; // Altera o conteúdo do primeiro elemento com a classe "teste"

document.querySelector("#saida").innerHTML = "ID"; // Substitui todo o conteúdo do elemento com o ID "saida" por "ID"

document.querySelector("h1").innerText += " - JavaScript"; // Acrescenta " - JavaScript" ao texto que já existe no primeiro h1

document.querySelector("h1").style.color = "yellow"; //altera a cor do h1 para amarelo

document.querySelector("#saida").style.color = "red"; //altera a cor do "saida" para vermelho



