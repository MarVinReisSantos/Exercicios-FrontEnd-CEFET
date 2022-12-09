let balaozinho = document.querySelectorAll('.marcacao');
let balaoEl = document.querySelector('#balaozinho');

let btn = document.querySelector('#definir-marcacao');

balaoEl.style.display = 'none';

btn.addEventListener('click', movimentar)

function movimentar(){
    let marcacaoX = document.querySelector('#marcacao-x').value;
    let marcacaoY = document.querySelector('#marcacao-y').value;
    let marcacaoAltura = document.querySelector('#marcacao-altura').value;
    let marcacaoLargura = document.querySelector('#marcacao-largura').value;

    balaozinho[0].style.left = `${marcacaoX}px`;
    balaozinho[0].style.top = `${marcacaoY}px`;
    balaozinho[0].style.height = `${marcacaoAltura}px`;
    balaozinho[0].style.width = `${marcacaoLargura}px` 
}


for(let balao of balaozinho){
    balao.addEventListener('mouseover', function(e){

        balaoEl.style.display = 'block';
        balaoEl.style.cursor = "pointer";

        balaoEl.innerHTML = "<div id='balaozinho' style='left=100px'>" + "<h2>" + balao.dataset.titulo + "<h2>" + "<p>" + balao.dataset.conteudo + "<p>" + "</div>";
    });
    
    balao.addEventListener('mousemove', function(e){
        balaoEl.style.display = 'block';
        balaoEl.style.cursor = "help";
    
        balaoEl.style.left = `${e.pageX}px`;
        balaoEl.style.top = `${e.pageY}px`;
    
        balaoEl.innerHTML = "<div id='balaozinho' style='left=100px'>" + "<h2>" + balao.dataset.titulo + "<h2>" + "<p>" + balao.dataset.conteudo + "<p>" + "</div>";
      
    });      

    balao.addEventListener('mouseout', function(e){
        balaoEl.style.display = 'none'
        balaoEl.innerHTML = "<div id='balaozinho'>"+"</div>";
        
    });      
}
