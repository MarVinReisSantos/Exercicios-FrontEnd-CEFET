// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.dev/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução
let audio = new Audio('arquivo-de-audio.mp3');

let listEpisode = [];
let listEpisodeLi = '';
let romano = ['I','II','III','IV','V','VI','VII','VIII','IX','X'];
$.ajax({
    url: 'https://swapi.dev/api/films/',
    dataType: 'json',
    success: function(resposta) {
      // escreve a resposta no console (para ver o que foi recebido)
      // faz o que quiser fazer com a resposta...
      audio.play();
      
      for(resposta of resposta.results){
        console.log(resposta.episode_id);
        listEpisode[resposta.episode_id-1] = '<li data-id-episodio="' + resposta.episode_id + '">' + "Episode " + romano[resposta.episode_id-1] + ": " + resposta.title + "</li>"
      }

      for(i=0; i<listEpisode.length; i++){
        listEpisodeLi += listEpisode[i];
      }

      console.log(listEpisodeLi)
      $('ul').html(listEpisodeLi);

      $('li').click((e) => {
        let $algum = $(e.currentTarget);
        let  episodio = $algum.data('id-episodio');  
        // console.log('episodio: ' + episodio);
        $.ajax({
          url: 'https://swapi.dev/api/films/' + episodio,
          dataType: 'json',
          success: resposta => {
            // console.log(resposta.opening_crawl);
            $('#intro').html(resposta.opening_crawl);
          }
        });
      });
    }
});

