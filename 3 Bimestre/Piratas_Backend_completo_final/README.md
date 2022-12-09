# Antes de começar  

Antes de começar, garanta que o apache esteja funcionando em seu computador (usando o Wamp, caso estiver no Windows, por exemplo).

Após baixar o código do trabalho, (a)
**descompacte-o** na área de trabalho, (b) **renomeie a pasta** para
`piratas`, (c) crie uma **pasta `piratas`** dentro do diretório `www` do
WampServer¹ e (d) **mova a pasta `piratas`** para dentro desse diretório
(do `www`).  Agora, (e) abra um navegador e **acesse `http://localhost/piratas/`²** para
ver a tradicional página dos tesouros do Barba-Ruiva.

## Atividade

Após ter colocado autenticação e deixado a página dos pirata dinâmicos e feito o backend  da inserção, remoção e atualização dos itens da tabela agora você irá possibilitar que tais operações sejam realizadas por meio do site do piratas.

No final, teremos dois arquivos principais o listagem do tesouro que será exibida da seguinte forma:
![Resultado final da atividade](https://bitbucket.org/daniel-hasan/cefet-web-piratas/raw/6bac22bb6a74f420c6ccba8db5a31e8a6ff6e623/docs/final.png)

E a edição e inserção do tesouro que será apresentado assim:

![Resultado final da atividade (formulário)](https://bitbucket.org/daniel-hasan/cefet-web-piratas/raw/8c04087ad8cad900cd16d830856c4802373d2a74/docs/final_form.png)

### Reorganização dos arquivos

Como a quantidade de arquivos PHP deste trabalho aumentou, fizemos uma divisão. Agrupamos arquivos relacionados à requisição e ao banco de dados na pasta `database_and_request` e toda a página que gera algum conteúdo html na pasta `pages`. Também criamos o cabeçalho e rodapé padrão de nossas páginas, para facilitar a criação de outras páginas que obedecerão o mesmo layout.

Dessa forma, os arquivos já prontos são os seguintes:

- `index.php`: Apenas redireciona ou para o login ou para a listagem dos tesouros de um determinado pirata (arquivos `pages/login.php` e `pages/piratas.php`, respectivamente)

- `pages/login.php`: Possui o form de autenticação além do código para efetivar essa autenticação.

- `pages/piratas.php`: Arquivo que contém a listagem dos tesouros de um pirata. Também possuirá, nesta prática, os botões de ação para adicionar,remover e atualizar os tesouros.

- `pages/header.php` e `pages/footer.php`: Possuem, respectivamente, o cabeçalho e rodapé que qualquer página dos tesouros irão possuir.

- `database_and_request/config_autenticado.php`: arquivo que efetiva a conexão com o banco, inicializa/continua as sessões e, além disso, verifica se está autenticado. Caso não esteja, volta para a página `login.php`. Este arquivo é importante ser incluída em qualquer página a ser criada que necessita de autenticação, pois, assim, ela garante que o arquivo seja apenas executato completamente se o usuário estiver autenticado.

- `database_and_request/database.php`: Possui a classe da conexão com o banco de dados.

- `database_and_request/modelo.php`: Possui as classes que fazem consulta, inserção, atualização e remoção (CRUD) no banco de dados.

- `database_and_request/salvar_tesouro.php`: Código feito na prática passada para validar e salvar o post enviado.

### Execício 1: Exclusão do tesouro

Para fazer a exclusão do tesouro, você irá criar uma coluna a mais na tabela de tesouros (arquiv `pages/piratas.php`). Nesta coluna você deverá adicionar a imagem `imgs/delete.svg`. Esta imagem possuirá o link para `piratas.php`. Você deverá passar também, via get, o id a ser deletado (ou seja, no final, o link ficará `piratas.php?id=ID` onde id é o id do tesouro em questão). A tabela ficará da seguinte forma:

![Resultado apresentando o botão de exclusão](https://bitbucket.org/daniel-hasan/cefet-web-piratas/raw/6bac22bb6a74f420c6ccba8db5a31e8a6ff6e623/docs/remove.png)

Como você está enviando para o próprio index, trate a exclusão nele mesmo. Verifique se a chave "id" existe no vetor associativo `$_GET` intancie um objeto da classe Tesouro  (apenas com o seu id) e chame o método remover. Não esqueça de incluir o(s) arquivo(s) apropriados (usando `require_once`, pois serão obrigatórios e serão incluídos apenas uma vez).

### Exercício 2: Inserção do tesouro

Você deverá fazer a inserção realizando os seguintes passos:

- Inclua os arquivos de cabeçalho rodapé e também o arquivo `config_autenticado.php`. Verifique qual comando é o melhor a ser usado para incluir: `require`, `require_once`, `include` ou `include_once`

- Crie um form e, dentro dele, coloque todos os inputs dos dados do tesouro usando, como nomes, os mesmos da prática anterior (nome, quantidade,valorUnitario, icone e id). O id não será utilizado agora, porém, será útil para a atualização, deixe-o como `type="hidden"` para que ele não apareça para o usuário. Os demais campos você deverá ver qual tipo é o mais adequado. Lembre-se também que todos os campos são obrigatórios a quantidade deve ser maior que zero e o valor unitário maior ou igual a zero faça a validação adequada no formulario ([ver slides de validação](https://fegemo.github.io/cefet-front-end/classes/html6/#envio-de-formularios-e-validacao)). Crie um botão (usando a tag button) para submeter o formulário. A estilização do form já está pronta e, fazendo o form, ele será exibido da seguite forma:

![Resultado final da atividade (formulário)](https://bitbucket.org/daniel-hasan/cefet-web-piratas/raw/8c04087ad8cad900cd16d830856c4802373d2a74/docs/final_form.png)

- Esse form será enviado usando `POST`, pois enviaremos uma imagem. Para enviar uma imagem, também temos que definir na tag form a propriedade `enctype` da forma de codificação específica quando temos que enviar arquivo (use `enctype="multipart/form-data"`). O post será tratado nesta mesma página, por isso, não será necessário especificar o atributo action.

- Para efetivar a inserção, neste mesmo PHP, verifique se o usuário enviou algo por POST e, caso positivo, execute o método `salvaDados($dblink,$dados,$icone)` feito na aula passada que está no arquivo `database_and_request/salvar_tesouro.php`. Nesse método você irá passar o link do banco de dados, os dados do post e os dados do arquivo (os dados do arquivo fica no vetor associativo`$_FILES` com a chave sendo o nome do campo). Lembre-se que este método retorna vedadeiro, caso a inserção/atualização tenha sido bem sucedida. Assim, caso a inserção tenha sido bem sucedida, redirecione para o arquivo `piratas.php`.

- Agora você irá criar o botão na página `piratas.php` para adicionar um novo tesouro. Este botão será feio por meio de um link que referenciará a página `salvar_tesouro.php`. Insira esse link logo após o fechamento da tabela ele possuirá o texto "+". Coloque a classe CSS `add` para já ficar estilizado.

### Exercício 3: Atualização do tesouro

Para atualizar o tesouro você irá utilizar o mesmo arquivo `salvar_tesouro.php`, porém, deverá enviar via GET o id do tesouro. Para isso, na tela `piratas.php`, crie uma nova coluna na listagem com o link para edição de cada tesouro (similar ao que fizemos ao excluir), usando a imagem `img/edit.png`.

Logo após, você irá alterar o `salvar_tesouros.php` para que ele edite o tesouro passado como um get. Para isso, caso o usuário passou o `id` do tesouro, você deverá chamar o método estático da classe Tesouro `getTesouroPorId` para obter o tesouro passado como parametro. Logo após, para cada campo, você deverá exibir o valor do mesmo em cada campo via PHP (apenas se você instanciou a variável de tesouro).

Dica: você deverá preencher o "value" apenas quando estiver atualizando um tesouro. Preencha o value escrevendo-o em PHP. Você pode usar uma expressão bem sucinta para isso. Exemplo:

```
<?php
$dado = null;
if(isset($_POST["xpto"])){
  $dado = setDados();
}
?>
<input type="number" value="<?=$dado!=null?$dado:"" ?>">
```

 Ao atualizar, você não poderá alterar o icone. Por isso, você não criará o campo de entrada para o ícone quando estiver atualizando o tesouro. Lembre-se também de passar o icone como nulo quando enviar o post para atualização. Além disso, preencha o botão com o texto "atualizar", quando estiver atualizando.

- No arquivo `piratas.php`, na listagem do tesouro, crie um link para a página
- obter um elemento para atualiza-lo (enviar via get)
- Imprimir os valores no input via PHP
- alterar o form action para imprimir o id (obte-lo via get, se existir)
- Botao com string atualizar/remover

O arquivo `piratas_body.php` já possui o `form` que servirá para inserção e atualização de um determinado tesouro. Para inserír o tesouro, você **não precisa** definir o action (assim o action enviará os dados para a página atual), porém, você precisará definir a propriedade `method` `XXSXOKSOKX`.

Logo após, você deverá alterar o `piratas_body` para  executar a função `salvaDados` do arquivo `form_tesouro.php`, caso o usuário tenha enviado uma requisição. O parametro `$db` é a conexao com banco (lembre-se do arquivo `database.php` onde foi criado esta conexão), o parâmetro `$dados` é o próprio post ($_POST) e e, $icone, é o arquivo a ser enviado (que está em $_FILE com o nome da imagem no formulário).

### Desafio 1: Apresentar os valores enviados caso haja erro de validação

Quando há um erro de validação (por exemplo, ao inserir um tesouro com o mesmo nome de outro já inserido) os dados do formulário se perdem. Corrija este problema usando os dados do post para preencher novamente o fomulário.

### Desafio 2: Exclusão de tesouros de outro pirata

Nosso código possui uma falha de segurança. Da forma que a exclusão está feita, você pode excluir o tesouro de outro pirata simplesmente escrevendo a url `piratas.php?id=X` sendo que X é o tesouro de outro usuário.

Para evitar isso, você deve, no SQL de exclusão de um tesouro, filtrar o tesouro também pelo id do usuário autenticado (que está na variável $_SESSION["id_usuario"]). Passe esse id como parametro do método de exclusão. Isso é uma melhor prática de programação pois você não irá misturar dados da sessão com o modelo.

### Desafio 3: atualização do icone

Você irá possibilitar que seja alterado o icone do tesouro. A página `salvar_tesouro.php`, quando for feita uma atualização, ficará assim:

![Resultado final da atividade (formulário)](https://bitbucket.org/daniel-hasan/cefet-web-piratas/raw/6bac22bb6a74f420c6ccba8db5a31e8a6ff6e623/docs/final_edit.png)

Ao clicar no, "x" o div da imagem ficará escondido e o input será exibido. Perceba que, o PHP deverá imprimir o input do icone ao atualizar e ao inserir.

Para exibir a imagem, faça um div de id `icone` (para já ficar com a estilização). Esse div possuirá a imagem do ícone atual e um span com o texto `x`. Você deve criar um código Javascript para esconder o div ao clicar no `x` e exibir o input. Foi criado a classe `escondido` para isso. O input de envio, a principio, ficará com essa classe e, ao clicar no `x`, quem ficará com essa classe será o div criado.
