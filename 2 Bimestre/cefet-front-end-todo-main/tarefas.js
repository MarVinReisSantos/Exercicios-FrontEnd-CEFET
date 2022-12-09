let tarefas = [
  {
    nome: 'Comprar leite',
    categoria: 'compras',
    marcado: false
  },
  {
    nome: 'Escutar chimbinha',
    categoria: 'lazer',
    marcado: true
  }
];

// function insereTarefaNaPagina(tarefas){
  
//   limparLista();

//   for(tarefa of tarefas){
//     let novaTarefaEl = document.createElement("li");
//     novaTarefaEl.innerHTML = tarefa.nome;
    
//     novaTarefaEl.classList.add("item-tarefa");
    
//     if(tarefa.marcado)
//       novaTarefaEl.classList.add("marcado");

//     let minhaListaEl =document.querySelector("#lista-tarefas");

//     minhaListaEl.appendChild(novaTarefaEl);
//     //console.log(novaTarefaEl)
//   }
// }

function insereTarefaNaPagina(tarefas){
  
  limparLista();

  for(tarefa of tarefas){
    let novaTarefaEl = document.createElement("li");
    novaTarefaEl.innerHTML = tarefa.nome;
    
    novaTarefaEl.classList.add("item-tarefa");
    novaTarefaEl.classList.add("categoria-" + tarefa.categoria);

    if(tarefa.marcado)
      novaTarefaEl.classList.add("marcado");

    let minhaListaEl =document.querySelector("#lista-tarefas");
    let tarefaAnteriorEl = minhaListaEl.querySelector(":first-child")
    minhaListaEl.insertBefore(novaTarefaEl, tarefaAnteriorEl)
  }
}

function limparLista(){
  let listaTarefasEl = document.querySelector("#lista-tarefas");
  let itemTarefaEl = document.querySelector(".item-tarefa");

  listaTarefasEl.innerHTML = "";
  //listaTarefasEl.removeChild(itemTarefaEl);
}

function insereTarefa(){
  let tarefaCategoria = document.querySelector("#nova-tarefa-categoria");
  
  tarefas.push({
    nome: novaTarefaEl.value,
    categoria: tarefaCategoria.value,
    marcado: false
  });
  
  novaTarefaEl.value = "";
  novaTarefaEl.focus();

  insereTarefaNaPagina(tarefas);

  console.log(tarefas)
}

let novaTarefaEl = document.querySelector("#nova-tarefa-nome");
let btnEl = document.querySelector("#incluir-nova-tarefa");
btnEl.addEventListener("click", insereTarefa);

novaTarefaEl.addEventListener("keyup", function(e){
  if(e.key === 'Enter')
  insereTarefa();
});

insereTarefaNaPagina(tarefas);
