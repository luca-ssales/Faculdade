let a,b,c,d,e,f;
let saida = document.getElementById("saida");
a=50;
b=120;
c=200;
d=!(a>=b);//False, o ! inverte o resultado da comparação, que seria False, para True
saida.innerHTML = `<br>d = ${d}`;//True
e=(a<b) && (c<a);
saida.innerHTML += `<br>e = ${e}`;//False, pois a segunda comparação é False

