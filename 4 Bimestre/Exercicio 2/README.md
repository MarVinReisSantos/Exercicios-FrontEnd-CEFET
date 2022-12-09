## Faça o exercicio: Classe Livro e Biblioteca

### Neste código use a convenção de nomenclatura correta (veja slide)
### Autor: Possui o nome representado por três atributos: primeiro nome, nome do meio e último nome além da data de nascimento (você pode usar a classe pessoa e adaptá-la). Todos esses atributos devem ser fornecidos no construtor, porém, o nome do meio é opcional (valor default = ‘’).
* O autor possuirá o atributo calculado nome_como_citado que irá retornar o último nome maiúculo e a primeira letra do primeiro nome e, logo após, um ponto. Exemplo: “DALIP D.” sendo que Dalip é o último nome de Daniel é o primeiro nome. Nesse atributo, o nome do meio não será usado.

### Livro: Possui os atributos: titulo, ano e uma lista de autores
* O título não poderá ser vazio, caso seja, você irá lançar uma exceção ValueError. Use a anotação @property para isso (veja slide).
* No construtor, a lista de autores pode ser omitida (sendo uma lista vazia [] por padrão)
   
###  Biblioteca: possui uma lista de livros. Ela deve possuir um atributo calculado livros_por_autor que utilizará a lista de livros para retornar um dicionário onde cada chave será o nome de um autor e, cada valor, será a lista de livros deste autor.

###  Para cada uma das classes implementadas, faça o método __str__ e o método __repr__.