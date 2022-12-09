// vetor com todas as marcações na foto
let marcacoes = document.querySelectorAll('.marcacao');
// elemento com o balãozinho
let balaozinhoEl = document.querySelector('#balaozinho');


// para cada marcação na foto, coloca eventos para quando o mouse entra, sai
// e se movimenta
// EM JQUERY, podemos colocar eventos em uma coleção de elementos de uma vez,
//            sem ter que percorrer o vetor! Eventos de mouse:
//            http://api.jquery.com/category/events/mouse-events/
for (let marcacaoEl of marcacoes) {

  marcacaoEl.addEventListener('mouseover', (e) => {
    let marcacaoAtualEl = e.currentTarget;

    // pega data-titulo="..." e data-conteudo="..." da marcação para colocar
    // no balãozinho
    // EM JQUERY, existe o método
    //            $elemento.data(nomeDoAtributo): http://api.jquery.com/data/
    let titulo = marcacaoAtualEl.dataset.titulo;
    let conteudo = marcacaoAtualEl.dataset.conteudo;

    // define o conteúdo do balãozinho de acordo com a marcação
    // EM JQUERY, podemos *definir* o conteúdo HTML de um elemento
    //            com $elemento.html(novoConteudo)
    //            e podemos *pegar* o conteúdo chamando o mesmo método,
    //            mas sem passar parâmetros: $elemento.html() // retorna o cont.
    balaozinhoEl.innerHTML = `<h2>${titulo}</h2>`;
    balaozinhoEl.innerHTML += `<p>${conteudo}</p>`;
  });

  marcacaoEl.addEventListener('mouseout', (e) => {
    // limpa o conteúdo do balãozinho porque o mouse saiu da marcação
    balaozinhoEl.innerHTML = '';
  });

  marcacaoEl.addEventListener('mousemove', (e) => {
    // define a posição do balãozinho de acordo com a posição do mouse
    // EM JQUERY, definimos propriedades CSS dos elementos usando
    //            $elemento.css(nome, valor): http://api.jquery.com/css/
    balaozinhoEl.style.left = e.pageX + 'px';
    balaozinhoEl.style.top = e.pageY + 'px';
  });
};

// permite o usuário mudar a posição/tamanho da primeira marcação
let botaoDefinirMarcacaoEl = document.querySelector('#definir-marcacao');
botaoDefinirMarcacaoEl.addEventListener('click', (e) => {
  // pega os valores digitados para a nova posição/tamanho da marcação
  // EM JQUERY, usamos $elemento.val() para *pegar* o value de um input e o
  //            mesmo método para *definir* o valor, mas passando um parâmetro:
  //            $elemento.val(novoValor)
  let x = document.querySelector('#marcacao-x').value;
  let y = document.querySelector('#marcacao-y').value;
  let largura = document.querySelector('#marcacao-largura').value;
  let altura = document.querySelector('#marcacao-altura').value;

  let marcacaoEl = marcacoes[0];
  // define a nova posição/tamanho da marcação
  marcacaoEl.style.left = x + 'px';
  marcacaoEl.style.top = y + 'px';
  marcacaoEl.style.width = largura + 'px';
  marcacaoEl.style.height = altura + 'px';
});
