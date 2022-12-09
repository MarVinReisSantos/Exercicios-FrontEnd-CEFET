let btnEl = document.querySelector('#calcula');

btnEl.addEventListener('click', calcula);

let a, b, c, delta, x1, x2;

function calcula() {
    lerDados();
    if(a==0){
        alert("Não é uma equaçao do segundo grau!");
        return -1;
    }
    delta.value = (Math.pow(b, 2))-(4*a*c);
    
    let raiz = Math.sqrt(parseInt(delta.value));
    if(delta.value<0){
        alert("Não tem raiz real, delta= " + delta.value);
        return -1;
    }else if(delta.value==0){
        alert("Tem duas raizes real e igual");
    }else{
        alert("Tem duas raizes real e diferentes");
    }
    
    x1.value = (-b+raiz)/(2*a);
    x2.value = (-b-raiz)/(2*a);
}

function lerDados(){
    a = document.querySelector("#coeficiente-a").value;
    b = document.querySelector('#coeficiente-b').value;
    c = document.querySelector('#coeficiente-c').value;
    
    delta = document.querySelector('#resultado-delta');
    x1 = document.querySelector('#resultado-x1');
    x2 = document.querySelector('#resultado-x2');
}
