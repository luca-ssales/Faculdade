let a,b;
let saida = document.getElementById("saida");
a="10";//10 string
b="10";//10 string

saida.innerHTML = ` 
Igualdade = ${(a==b)}<br>
Idêntico = ${(a===b)}<br>
Não igual = ${(a!=b)}<br>
Não Idêntico = ${(a!==b)}<br>

`