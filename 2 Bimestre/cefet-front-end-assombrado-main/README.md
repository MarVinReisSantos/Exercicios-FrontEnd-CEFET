# Blog Assombrado

Um blog sobre o desconhecido. Baixe o [código seminal][seminal].

[seminal]: https://github.com/fegemo/cefet-front-end-assombrado/archive/main.zip


## Atividade

Você deve fazer algumas partes que faltam do blog assombrado.

![O resultado final da prática](resultado.jpg)


## Exercício 0: encurtar a duração do vídeo

Abra a página no navegador. Assista uma vinheta bem legal. Faça isso duas vezes,
e tudo ainda estará bem. A partir da terceira, aguardar os 11s do vídeo
terminar passa a ser a pior coisa do mundo.

Portanto, veja no [FAQ](#faq) como fazer o vídeo desaparecer mais rapidamente.

## Exercício 1: _tags_ semânticas

Converta as `<div>` e `<span>` nas _tags_ semânticas mais adequadas,
**se houver**.

- **Pode ser que não exista uma _tag_ semântica** em alguns casos - aí
  continua sendo `<div>` ou `<span>` mesmo
- Veja as [_tags_ semânticas nos slides][tags-semanticas]

**Atenção**: ao alterar o HTML (mudar uma tag para outra, mudar ou tirar
uma `class` ou um `id`), deve-se verificar se são necessárias alterações nos
arquivos CSS e em códigos JavaScript.

Por exemplo, se você tirar o `id` da `<div id="header">...</div>`,
faça uma busca por `#header` no arquivo CSS para verificar se precisa alterá-lo
de forma que os estilos continuem se aplicando mesmo depois da alteração.

## Exercício 2: menu horizontal

Torne horizontal a lista com o menu principal. Faça de forma que o menu
fique semelhante ao da imagem final (lá em cima). Veja como
[transformar uma lista não ordenada em uma lista horizontal][lista-horizontal].

Você vai precisar usar a propriedade `display`.
[Veja como nos slides][propriedade-display].

## Exercício 3: "Novidade!"

Usando pseudo-elementos ([slides][pseudo-coisas]), faça com que toda
postagem que possui a classe `.novidade` tenha o texto "Novidade!"
imediatamente antes do seu conteúdo (como na imagem lá em cima). Use
sua criatividade para estilizar de uma forma bonita e legal.

## Exercício 4: seleção de texto

Ao selecionar o texto em uma página, o navegador escolhe uma cor de fundo e
para o texto para mostrar o que foi selecionado.

Usando pseudo-elementos novamente ([slides][pseudo-coisas]),
estilize as seleções de texto que ocorrerem (a) dentro do cabeçalho,
(b) dentro do rodapé e dentro de `#tags` - de alguma forma que elas
fiquem diferentes do texto selecionado no "miolo" da página.

Se parecer não estar funcionado, veja a discussão no terceiro tópico
do [FAQ](#faq).

## FAQ

1. **Toda hora tenho que assistir** o vídeo?? Sacanagem, né?!
   - No arquivo `index.html`, ao final do `<body>...</body>` há um pequeno
     código JavaScript que faz o vídeo sumir e o conteúdo principal aparecer
   - Altere o tempo (de 11s) para algo menor (eg, de **11000 para 1100**)
1. Mudei umas _tags_ de `<div>` para semântica e, de repente, **o conteúdo
   principal da página sumiu**. Por quê?
   - Isso aconteceu por causa do pequeno código JavaScript que tem ao final
     `<body>`.
   - Veja algumas linhas do arquivo `index.html`:
     ```html
     <script>
       // faz o vídeo desaparecer de leve assim que terminar
       let tempo = 11000;  // 11s, duração do vídeo
       setTimeout(() => {
           // LINHA A: faz o vídeo desaparecer colocando a classe .desaparecido
           document.querySelector('.backdrop').classList.add('desaparecido');
           // LINHA B: faz o conteúdo principal surgir, retirando a classe .desaparecido
           document.querySelector('#conteudo-principal').classList.remove('desaparecido');
       }, tempo);
       // ...
     </script>
     ```
     - A "linha B" vai dar erro se não existir um elemento na página com um
       `id="conteudo-principal"`
       - Se você tiver removido o `id` desse elemento, uma opção é colocá-lo
         de volta
       - Outra opção é alterar a "linha B" para selecionar o elemento que tinha
         o `id="conteudo-principal"` a partir do nome de sua _tag_
         - Para isso, você pode usar o comando em JavaScript:
           ```js
           // LINHA B
           document.querySelector('NOME_DA_TAG').classList.remove('desaparecido');
           ```
1. O pseudo-elemento relativo à seleção de texto é o `::selection` e é
   tipicamente usado pra alterar a cor do texto e do fundo da seleção.
   - A regra a seguir se aplica a todo o texto que está **diretamente**
     em um parágrafo:
     ```css
     p::selection {
       /* muda cor e cor de fundo aqui */
     }
     ```
     - Se houver um `<span>texto</span>` dentro desse parágrafo, a seleção
       dentro do `<span>` não ficará com a cor diferente!
   - A solução completa, para estilizar a seleção de tudo o que
     estiver dentro de alguma coisa (por exemplo, de um parágrafo), deve
     ser assim:
     ```css
     p::selection,
     p ::selection {
       /* muda cor e cor de fundo aqui */
     }
     ```
     - Dessa forma, seleciona-se o pseudo-elemento da seleção do texto que
       for exatamente filho do parágrafo, mas também da seleção de texto dentro
       de qualquer um de seus descendentes (por exemplo, o texto dentro de um
       `<span>` que está dentro de um `<p>`)

[tags-semanticas]: https://fegemo.github.io/cefet-front-end/classes/html5/#elementos-semanticos
[lista-horizontal]: https://fegemo.github.io/cefet-front-end/classes/html5/#elementos-semanticos
[propriedade-display]: https://fegemo.github.io/cefet-front-end/classes/html5/#a-propriedade-display
[pseudo-coisas]: https://fegemo.github.io/cefet-front-end/classes/html5/#pseudo-classes-e-pseudo-elements
