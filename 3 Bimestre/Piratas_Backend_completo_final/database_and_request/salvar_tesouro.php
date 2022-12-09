<?php
require_once("modelo.php");

function validaDados($db, $dados,$icone){
  $strErros = "";
  //validação dos campos que não podem ser vazios
  $camposNaoVazios = array("quantidade","valorUnitario","nome");
  foreach($camposNaoVazios as $campo){
    if($dados[$campo] == ""){
      $strErros .= "O campo '$campo' é obrigatório; ";
    }
  }
  //valida quantidade
  if(!is_numeric($dados["quantidade"])){
    $strErros .= "A quantidade deve ser numérica; ";
  }else{
    if($dados["quantidade"]<=0){
      $strErros .= "A quantidade deve ser  maior que zero; ";
    }
  }

  //validação do valor unitário
  if(!is_numeric($dados["valorUnitario"])){
    $strErros .= "O valor unitário deve ser numérico; ";
  }else{
    if($dados["valorUnitario"]<0){
      $strErros .= "O valor unitário deve ser  maior ou igual a zero; ";
    }
  }

  //validação do icone
  if($dados["id"]=="" && $icone==null){
    $strErros .= "Favor fornecer o ícone";
  }
  if($icone!=null && !getimagesize($icone["icone"]['tmp_name'])){
    $strErros .= "O arquivo deve ser uma imagem";
  }

  //validação se o nome do tesouro já existe
  $tesouro = Tesouro::getTesouroPorUsuario($db,$dados["nome"],$_SESSION["id_usuario"]);
  if($tesouro != null && $tesouro->getId() != $dados["id"]){
    $strErros .= "Tesouro já existente";
  }

  if($strErros == ""){
    return true;
  }else{
    print("<div class='erro'>Erro: $strErros </div>");
    return false;
  }
}
function salvaDados($db,$dados,$icone){
  if(!validaDados($db,$dados,$icone)){
    return false;
  }
  $strTarget = null;
  if($icone != null){
    $strName = uniqid().".".pathinfo($icone["icone"]['name'], PATHINFO_EXTENSION);
    $strTarget = "../upload/".$strName;
    $bolMoveu = move_uploaded_file($icone["icone"]['tmp_name'],$strTarget);
  }
  $tesouro = new Tesouro($dados["id"],
                        $_SESSION["id_usuario"],
                        $dados["nome"],
                        $dados["quantidade"],
                        $strTarget,
                        $dados["valorUnitario"]);
  $sucesso = false;
  if($dados["id"]==""){
    $sucesso = $tesouro->inserir($db);
  }else{
    $sucesso = $tesouro->atualizar($db);
  }
  if($sucesso){
    return true;
  }else{
    print("<div class='erro'>Ocorreu um erro ao inserir/atualizar.</div>");
    return false;
  }
}

?>
