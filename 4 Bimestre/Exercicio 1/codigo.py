def add(a,b):
  """
  Realiza a soma de dois numeros
  @author: Marcos Vinicius
  """
  return a+b

def maior(a,b):
    """
    Realiza a comparacao entre dois numeros
    @author: Marcos Vinicius
    """
    if a>b:
        return a
    return b

def soma(lista, x=0):
    """
    Realiza a soma da lista com o elemento x
    @author: Marcos Vinicius
    """
    somador = 0

    for elemento in lista:
        somador+=elemento
    
    return somador+x

def media(lista):
    """
    Realiza a media da lista
    @author: Marcos Vinicius
    """
    contador=0 
    somador=0

    for elemento in lista:
        somador+=elemento
        contador+=1

    return (somador/contador) 
def valoresIguais(lista1, lista2):
    """
    Realiza a comparacao entre duas listas
    retorna os elementos iguais 
    @author: Marcos Vinicius
    """
    retornoLista = []
    for elLista1 in lista1:
        for elLista2 in lista2:
            if elLista1==elLista2:
                retornoLista.append(elLista1)
    return retornoLista

def indice_prim_valor_igual(lista1,lista2):
    """
    Realiza a comparacao entre duas listas
    retorna o indice do elemento igual 
    @author: Marcos Vinicius
    """
    x = -1
    for elLista1 in lista1:
        for elLista2 in lista2:
            if elLista1==elLista2:
                x = lista1.index(elLista1)
                if x >= 0:
                    return x
         
    return None

if __name__ == "__main__":
  x = add(2,3)
  print("Soma: "+str(x))

  #Maior 
  x = maior(2,3)
  print("Maior: " +str(x))

  #Soma numeros
  listaDeNumeros = [1,2,3,4,5,6]
  x = soma(listaDeNumeros, 6)
  print("Soma da lista: " +str(x))

  #Media numeros
  listaDeNumeros = [1,2,3,6]
  x = media(listaDeNumeros)
  print("Media: " + str(x))

  #Valores iguais
  listaDeNumeros1 = [1,5,7,8]
  listaDeNumeros2 = [5,8,7,10,11]
  listaIguais = []
  listaIguais = valoresIguais(listaDeNumeros1, listaDeNumeros2)
  print("Iguais: " + str(listaIguais))

  #Indice primeiro valor igual
  listaDeNumeros1 = [13,9,3,1,14]
  listaDeNumeros2 = [5,8,7,10,11]
  indiceIgual = indice_prim_valor_igual(listaDeNumeros1,listaDeNumeros2)
  print("Indice: " + str(indiceIgual))