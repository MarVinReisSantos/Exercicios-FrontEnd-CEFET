import Autor
import Livro
import Biblioteca

if __name__ == "__main__":
  # declaracao dos autores
  joao = Autor.Autor('2016', 'joao', 'mario')
  marcos = Autor.Autor('1998', 'marcos', 'vinicius')
  caio = Autor.Autor('1995', 'caio', 'reis')
  vilma = Autor.Autor('1995', 'vilma', 'santos')

  # declaracao da biblioteca
  leitura = Biblioteca.Biblioteca()

  #declarcao livros
  manual = Livro.Livro('manual', '2011')
  portugues = Livro.Livro('portugues', '2001')
  matematica = Livro.Livro('matematica', '2015')
  historia = Livro.Livro('historia', '2014')


  manual.adiciona_autor(marcos.nome_como_citado())
  manual.adiciona_autor(joao.nome_como_citado())
  portugues.adiciona_autor(caio.nome_como_citado())
  matematica.adiciona_autor(marcos.nome_como_citado())
  portugues.adiciona_autor(joao.nome_como_citado())
  manual.adiciona_autor(caio.nome_como_citado())
  portugues.adiciona_autor(vilma.nome_como_citado())
  
  leitura.adicionar_livro(manual)
  leitura.adicionar_livro(portugues)
  leitura.adicionar_livro(matematica)
  leitura.adicionar_livro(historia)
  
  #Mostrar para o usuário a biblioteca
  print("\n\n____________________________________________________________________________________")
  print(leitura.livros_por_autor())
  print("\n------------------------------------------------------------------------------------\n")
  leitura.ver_livros()
  print("____________________________________________________________________________________")
