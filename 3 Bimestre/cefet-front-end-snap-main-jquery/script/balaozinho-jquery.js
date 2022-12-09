// Sugestão: mantenha este arquivo e o balaozinho-vanilla.js abertos
//           lado a lado e vá "traduzindo" o código para usar jQuery


let $marcacoes = $('.marcacao');
let $balaozinho = $('#balaozinho');

// let $marcacaoAtual = $($marcacoes[0]);
let $marcacao1 = $($marcacoes[0]);
let $marcacao2 = $($marcacoes[1]);

// let $btnMarcacao = $('#definir-marcacao');
// $btnMarcacao.click((e) =>{
    
//     $('#marcado1').css('left', marcacaoX+'px');
//     $('#marcado1').css('top', marcacaoY+'px');
//     $('#marcado1').css('width', marcacaoLargura+'px');
//     $('#marcado1').css('height', marcacaoAltura+'px')
// });

function atualiza($marcacao){
    let marcacaoX = $('#marcacao-x').val();
    let marcacaoY = $('#marcacao-y').val()
    let marcacaoAltura = $('#marcacao-altura').val();
    let marcacaoLargura = $('#marcacao-largura').val();

    // $('#marcado1').css('left', marcacaoX+'px');
    // $('#marcado1').css('top', marcacaoY+'px');
    // $('#marcado1').css('width', marcacaoLargura+'px');
    // $('#marcado1').css('height', marcacaoAltura+'px')
    $($marcacao).css('left', marcacaoX+'px');
    $($marcacao).css('top', marcacaoY+'px');
    $($marcacao).css('width', marcacaoLargura+'px');
    $($marcacao).css('height', marcacaoAltura+'px')
}
$marcacao1.click((e) => {
    $marcacao1.toggleClass('selecionada');
    console.log('aui')
    atualiza($marcacao1);
})

$marcacao2.click((e) => {
    $marcacao2.toggleClass('selecionada');
    console.log('ola')
    atualiza($marcacao2);
})

$marcacoes.mouseover((e) => {
    let $algum = $(e.currentTarget);

    let titulo = $algum.data('titulo');
    let conteudo = $algum.data('conteudo')

    $('#balaozinho').css('top', e.pageY);
    $('#balaozinho').css('left', e.pageX);

    $balaozinho.html('<h2>' + titulo + '</h2><p>' + conteudo + '</p>');

});

$marcacoes.mousemove((e) => {
    let $algum = $(e.currentTarget);

    let titulo = $algum.data('titulo');
    let conteudo = $algum.data('conteudo')

    $('#balaozinho').css('top', e.pageY);
    $('#balaozinho').css('left', e.pageX);

    $balaozinho.html('<h2>' + titulo + '</h2><p>' + conteudo + '</p>');

});

$marcacoes.mouseout((e) => {
    $balaozinho.html('');
});
