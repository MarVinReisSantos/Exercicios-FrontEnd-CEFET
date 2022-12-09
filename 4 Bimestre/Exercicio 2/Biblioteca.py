class Biblioteca():
  def __init__(self):
    self.lista_livros = []

  def adicionar_livro(self, livro):
    termos = str(livro).split(';')

    for i in range(0, len(termos)-1):
      self.lista_livros.append(termos[i] + ':' + termos[len(termos)-1])

  def livros_por_autor(self):
    dicionario = {}
    lista_dos_livros_tratada = str(self.lista_livros)
    lista_dos_livros_tratada = lista_dos_livros_tratada.replace("[","")
    lista_dos_livros_tratada = lista_dos_livros_tratada.replace("]","")
    lista_dos_livros_tratada = lista_dos_livros_tratada.replace(", ",",")
    lista_dos_livros_tratada = lista_dos_livros_tratada.replace("'","")
    autor_e_obra = str(lista_dos_livros_tratada).split(',')

    for i in range(0, len(autor_e_obra)):
      autor_ou_obra = str(autor_e_obra[i]).split(':')
      
      if autor_ou_obra[0] in dicionario.keys():
        livro = dicionario[autor_ou_obra[0]]
        dicionario[autor_ou_obra[0]] = (autor_ou_obra[1] + ' - ' + livro)
      else:
        dicionario[autor_ou_obra[0]] = (autor_ou_obra[1])

    return dicionario
  
  
  def ver_livros(self):
    print (str(self.lista_livros))