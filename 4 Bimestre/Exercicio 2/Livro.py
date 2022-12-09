import Autor
class Livro():
  def __init__(self, titulo, ano):
    self.titulo = titulo
    self.ano = ano
    self.lista_autores = []

  @property 
  def titulo(self):
    return self._titulo

  @titulo.setter
  def titulo(self,tit):
    if(tit == ""):
      raise ValueError("Erro: titulo estar vazio")
    self._titulo = tit


  def adiciona_autor(self, autor):
    self.lista_autores.append(autor)

  def __str__(self):
    autores = ""
    for autor in self.lista_autores:
      autores += autor
      autores += ";" 

    return autores + self.titulo.upper() 
  
  def __repr__(self):
    return str(self)
    
