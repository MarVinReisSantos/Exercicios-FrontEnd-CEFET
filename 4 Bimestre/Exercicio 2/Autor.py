class Autor():
  def __init__(self, data_nascimento, primeiro_nome, ultimo_nome, nome_do_meio = ' ',):
    self.data_nascimento = data_nascimento
    self.primeiro_nome = primeiro_nome
    self.ultimo_nome = ultimo_nome
    self.nome_do_meio = nome_do_meio

  def __str__(self):
    return "Nome: "+self.primeiro_nome
  
  def __repr__(self):
    return str(self)
    
  def nome_como_citado(self):
    nome_autor = self.ultimo_nome + " " + self.primeiro_nome[0] + "."
    return nome_autor.upper()

