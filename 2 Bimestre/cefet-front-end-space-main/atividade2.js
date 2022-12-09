// Faça o exercício DOS PARÁGRAFOS neste arquivo
// Este arquivo AINDA NÃO está incluído no arquivo HTML

let btnAnterior = document.querySelector("#anterior");
let btnProximo = document.querySelector("#proximo");
let slide = document.querySelector("#slide");

let vetorImages = ["01-philae-parts.jpg","02-philae-rosetta.jpg","03-philae-separation.jpg","04-philae-67-picture.jpg","05-philae-collecting.jpg"];
let CaminhoImages = "https://github.com/fegemo/cefet-front-end/blob/master/images/";

let posicaoDaFotoAtual=0;

// btnAnterior.addEventListener('click', function(e){
//     if(posicaoDaFotoAtual<=0){
//         posicaoDaFotoAtual=5;
//     }
    
//     trocaImg(--posicaoDaFotoAtual);
    
// });


// btnProximo.addEventListener('click', function(e){
//     if(posicaoDaFotoAtual>=4){
//         posicaoDaFotoAtual=-1;
//     }

//     trocaImg(++posicaoDaFotoAtual);
// });

// function trocaImg(posicaoDaFotoAtual){
//     slide.src = CaminhoImages + vetorImages[posicaoDaFotoAtual] + '?raw=true';
//     console.log(posicaoDaFotoAtual);
// }

btnAnterior.addEventListener('click', function(e){
    if(posicaoDaFotoAtual<=0){
        posicaoDaFotoAtual=5;
    }
    
    trocaImg(-1);
    
});


btnProximo.addEventListener('click', function(e){
    if(posicaoDaFotoAtual>=4){
        posicaoDaFotoAtual=-1;
    }

    trocaImg(1);
});

function trocaImg(aux){
    slide.src = CaminhoImages + vetorImages[posicaoDaFotoAtual+=aux] + '?raw=true';
    //console.log(posicaoDaFotoAtual);
}