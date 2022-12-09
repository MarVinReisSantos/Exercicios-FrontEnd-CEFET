
function trocaNome(){
    let labelAvatarNomeEl = document.querySelector("#nome");
    let pAvatarNomeEl = document.querySelector("#avatar-nome");
    
    pAvatarNomeEl.innerHTML = labelAvatarNomeEl.value;
}

function trocaPele(){
    let labelAvatarCorPeleEl = document.querySelector("#corPele");
    let imgAvatarCorPeleEl = document.querySelector("#avatar-corpo");
    let imgAvatarCorCabecaEl = document.querySelector('#avatar-cabeca');

    imgAvatarCorPeleEl.style.backgroundColor = labelAvatarCorPeleEl.value;
    imgAvatarCorCabecaEl.style.backgroundColor = labelAvatarCorPeleEl.value;
}

function trocaCabelo(){
    let imgAvatarTipoCabeloEl = document.querySelector("#avatar-cabelo");
    let labelAvatarTipoCabeloEl = document.querySelector("#tiposCabelo");

    imgAvatarTipoCabeloEl.src = labelAvatarTipoCabeloEl.value;
}

function trocaOculos(){
    let labelAvatarOculosEl = document.querySelector("#oculos");
    let imgAvatarOculosEl = document.querySelector("#avatar-oculos");

    if(labelAvatarOculosEl.checked){
        imgAvatarOculosEl.classList.add("visivel");
    }else{
        imgAvatarOculosEl.classList.remove("visivel");
    }
}

function trocaLacinho(){
    let labelAvatarLacinhoEl = document.querySelector("#lacinho");
    let imgAvatarLacinhoEl = document.querySelector("#avatar-lacinhos");

    if(labelAvatarLacinhoEl.checked){
        imgAvatarLacinhoEl.classList.add("visivel");
    }else{
        imgAvatarLacinhoEl.classList.remove("visivel");
    }
}

function trocaBandana(){
    let labelAvatarBandanaEl = document.querySelector("#bandana");
    let imgAvatarBandanaEl = document.querySelector("#avatar-bandana");

    if(labelAvatarBandanaEl.checked){
        imgAvatarBandanaEl.classList.add("visivel");
    }else{
        imgAvatarBandanaEl.classList.remove("visivel");
    }
}

