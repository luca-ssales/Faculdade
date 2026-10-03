let a;
let saida = document.getElementById("saida");
//a=parseInt(prompt("Digite um número"));//100
a=100;
saida.innerHTML="a ="+ (a++);//100
saida.innerHTML+="<br>a final ="+ a;//101
a=10;
saida.innerHTML+="<br>a = "+a;//
a++;
a++;
++a;
++a;
saida.innerHTML+="<br>a = "+a;//
a--;
a--;
--a;
saida.innerHTML+="<br>a = "+a;//
