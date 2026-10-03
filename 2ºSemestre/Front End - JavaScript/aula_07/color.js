/*criar um campo onde digita a cor e logo altera a cor do fundo da pagina*/

let saida = document.getElementById("saida");
let cor = prompt("Digite uma cor (em inglês ou hexadecimal): ");
document.body.style.backgroundColor = cor;
saida.innerHTML = `A cor de fundo foi alterada para: ${cor}.`;