// Faça o exercício da GALERIA de IMAGENS neste arquivo
// Este arquivo AINDA NÃO está incluído no arquivo HTML

// caminho para onde as imagens estão hospedadas
const servidorDasImagens = 'https://fegemo.github.io/cefet-front-end/images/',
  // array com o nome das 5 imagens da galeria
  nomesDasImagens = [
    '01-philae-parts.jpg',
    '02-philae-rosetta.jpg',
    '03-philae-separation.jpg',
    '04-philae-67-picture.jpg',
    '05-philae-collecting.jpg'
  ];

// o índice da imagem sendo mostrada
// (inicialmente, é a imagem 0: '01-philae-parts.jpg')
let indiceDaFotoAtual = 0;

// ...COMECE a implementar aqui <--------------------------------------------
let btnEl = document.querySelectorAll(".botao-expandir-retrair");

for(botao of btnEl){
  botao.addEventListener('click', function(e){
    let el = e.currentTarget;
    el.parentNode.classList.toggle('expandido');
    el.innerHTML == '-' ? el.innerHTML = '+': el.innerHTML = '-';
  });
}

/*
// percorre a lista de 'boo's
for (let i = 0; i < boos.length; i++) {
	// atribui um evento para o 'boo' atual
	boos[i].addEventListener('click', function(e) {
  
  	// remove a classe 'selecionado' de todos os 'boos'
    for (let j = 0; j < boos.length; j++) {
    	boos[j].parentNode.classList.remove('expandido');
    };
    
    // recoloca a classe 'selecionado' no 'boo' que foi clicado
  	let booEl = e.currentTarget;
  	booEl.parentNode.classList.add('expandido');
  });
};*/