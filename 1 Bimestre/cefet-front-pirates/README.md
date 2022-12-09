# Piratas e seus Tesouros 👑

Controlando o estoque de tesouros de Barba-Ruiva.

![Resultado final da atividade prática](https://fegemo.github.io/cefet-front-end/images/piratas-e-seus-tesouros.png)

## Atividade

Crie uma página para ajudar o temido Barba-Ruiva a visualizar o seu estoque de
tesouros seguindo os passos descritos a seguir.

### Exercício 1: _setup_ e estrutura básica

1. [Baixe as imagens e o ícone][seminal] que serão usados
1. Descompacte o arquivo `cefet-front-end-pirates-main.zip` na área de trabalho
   - Isto criará uma pasta com o nome `cefet-front-end-pirates-main` lá
1. **Renomeie** a pasta criada na área de trabalho para `tesouro-piratas`
1. **Crie um arquivo `index.html`** na mesma pasta e siga os passos:
   - Por que dar o nome de `index.html`?
     - Veja o [FAQ](#faq)

Agora, você deve (a) criar a estrutura básica do documento HTML (`DOCTYPE`,
_tags_ HTML, HEAD, BODY vazias), (b) colocar um título da página na aba do
navegador e (c) colocar a imagem `calice.ico` como ícone.

Teste a sua página, abrindo-a no navegador.

[seminal]: https://github.com/fegemo/cefet-front-end-pirates/archive/main.zip


## Exercício 2: título, parágrafo e fundo

Ao fazer este exercício, fique conferindo, no navegador, como a página está ficando.

1. Coloque o **título (`h1`) e o parágrafo**, deixando espaço para a tabela
   - Conteúdo do parágrafo (para copiar e colar): _"Yarr Harr, marujo! Aqui é o temido Barba-Ruiva e você deve me ajudar
     a contabilizar os espólios das minhas aventuras!"_ (sem as áspas)
   - Estilize-os:
     - Remova a margem superior do título `h1` (_i.e._, defina-a como `0`)
     - Coloque uma cor legal para o texto (usei `gold`)
     - Coloque uma sombra no texto (usei uma preta, deslocada 2px para direita e para baixo)
1. Coloque a imagem de fundo no `body`
   - Deixe-a ancorada no canto esquerdo inferior (`left bottom`)
     - Motivo: o Barba-Ruiva está nesse mesmo canto, então, se ancorarmos por lá, ele estará sempre visível na página, independente do tamanho da janela do navegador
   - Faça-a cobrir todo o espaço disponível (`cover`)
   - Por que a imagem de fundo ficou só lá em cima?
     - Veja o [slide "Ocupando toda a altura do navegador"](https://fegemo.github.io/cefet-front-end/classes/html3/#ocupando-toda-altura-navegador) da aula
1. Alinhe o texto do corpo da página (_i.e._, `body`) de [forma centralizada][alinhamento-texto]
1. Coloque uma margem na página inteira (_i.e._, no `body`), de `0%`  vertical e `25%` horizontal. A propriedade fica assim:
   ```
   margin: 0% 25%;
   ```
   ... que é o mesmo que:
   ```
   margin: 0% 25% 0% 25%;
   ```
   ... ou então:
   ```
   margin-top: 0%;
   margin-right: 25%;
   margin-bottom: 0%;
   margin-left: 25%;
   ```
   - Eu sempre prefiro a forma mais curta (a primeira), quando as margens laterais (esquerda e direita) são iguais e as verticais também (cima e baixo) :wink:



[alinhamento-texto]: https://fegemo.github.io/cefet-front-end/classes/html1/#css-alinhamentoTexto

## Exercício 3: a **tabela**

1. Crie a **estrutura básica da tabela** com a _tag_ `table` e as _tags_ `caption`, `thead`, `tbody` e `tfoot` vazias
   1. A legenda deve conter: _"Estes são os tesouros acumulados do Barba-Ruiva em suas aventuras"_ (sem as áspas)
1. Crie o cabeçalho, dentro da _tag_ `thead`
   - O cabeçalho contém apenas 1 linha (`tr`)
   - Lembre-se que usamos `th` para definir as colunas/células dentro da `tr` do `thead`
   - Coloque 5 colunas, nesta ordem:
     1. Tesouro
     1. Nome
     1. Valor unitário
     1. Quantidade
     1. Valor total
1. Crie o corpo da tabela, linha por linha
   - **Dica**: assim que fizer a primeira linha, copie e cole-a outras 3 vezes (porque são 4 tesouros ao todo)
   - Os tesouros são:
     1. Moedas:
        - Imagem do baú em: `imgs/moedas.png`
        - Nome: Moedas de ouro
        - Valor unitário: 10
        - Quantidade: 835
        - Valor total: 8.350
     1. Coroas:
        - Imagem do baú em: `imgs/coroa.png`
        - Nome: Coroas
        - Valor unitário: 210
        - Quantidade: 4
        - Valor total: 840
     1. Cálices:
        - Imagem do baú em: `imgs/calice.png`
        - Nome: Cálices de ouro
        - Valor unitário: 4.500
        - Quantidade: 1
        - Valor total: 4.500
     1. Barris:
        - Imagem do baú em: `imgs/rum.png`
        - Nome: Barris de rum
        - Valor unitário: não tem preço
        - Quantidade: 7
        - Valor total: -
1. Crie o rodapé, contendo 1 linha. Essa linha deve possuir apenas 2 células/colunas, sendo que **a primeira deve ocupar 4 colunas** (_i.e._, mescle-as)
1. Centralize a tabela
   - Basta definir as margens laterais como tendo "tamanho automático":
     ```css
     table {
       margin-left: auto;
       margin-right: auto;
     }
     ```
1. Estilize a legenda (`caption`) de forma a torná-la mais legível
   - Eu usei um fundo branco 70% opaco, tanto nela quanto no parágrafo
     - (Se você quiser...) Para que uma regra se aplique a mais de um elemento, basta, no seletor, separar os elementos por vírgula, _e.g._:
       ```css
       caption, p {
         background-color: rgba(255, 255, 255, .7);
       }
       ```
   - Além de torna-la legível, reduza um pouco o tamanho da sua fonte em relação ao restante do texto
     - Eu usei um `font-size: 75%`
1. Estilize a tabela de forma que ela fique mais bonita, tipo a da imagem fornecida lá em cima
   - Não se esqueça do `border-collapse: collapse` na `table` para poder definir as bordas
   - Use um espaçamento interno para dar mais espaço às células da tabela, deixando-as mais "arejadas"
     - Eu usei:
       ```css
       td, th {
         padding: 3px 10px;        
       }
       ```
       ... que é a mesma coisa que:
       ```css
       td, th {
         padding: 3px 10px 3px 10px;        
       }
       ```
       ... e que é a mesma coisa que:
       ```css
       td, th {
         padding-top: 3px;
         padding-right: 10px;
         padding-bottom: 3px;
         padding-left: 10px;        
       }
       ```
   - Usei as cores de fundo `lightgreen` e `lightsteelblue` para o cabeçalho e rodapé, respectivamente (mas você pode escolher outras)
   - Coloque bordas finas (_i.e._, de 1px) no cabeçalho e no rodapé


## FAQ

FAQ é uma sigla para _Frequently Asked Questions_ que, em Português, traduz
em **Perguntas Feitas com Frequência**. A seguir, veja algumas questões que
podem surgir ao fazer este exercício, bem como as suas respostas.

### Por quê devo dar o nome de `index.html` ao meu arquivo?

Quando temos um website composto por várias páginas, uma delas precisa ser **a página inicial**. O navegador entende que, se existe um arquivo com o nome `index.html`, ele é a página inicial do site.


### O que significa `rgba(...)`?

Qualquer cor para o computador é uma combinação ("mistura") de vermelho (_red_),
verde (_green_) e azul (_blue_).

Quando usamos `rgba(...)` podemos especificar uma cor a partir de suas componentes _red_, _green_ e _blue_, bem como o seu nível de opacidade, que chamamos de _alpha_.

Os valores de R, G e B vão de 0 a 255 e o valor de _alpha_ vai de 0 a 1. Experimente descobrir novas cores usando `rgba()`!
