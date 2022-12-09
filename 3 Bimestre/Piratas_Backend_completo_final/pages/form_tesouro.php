<?php
require("header.php");
require("../database_and_request/config_autenticado.php");
require("../database_and_request/salvar_tesouro.php");
require("footer.php");
?>

<?php
$id = null;
if(!empty($_GET['id'])){
    $id = $_REQUEST['id'];
}

if($id==null){
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["submit"])){
      if(salvaDados($dblink,$_POST,$_FILES) == true){
        header("location: piratas.php");
      }
    }
  }
  
  echo '<form method="post" action="form_tesouro.php" name="tesouroNovo" id="tesouroNovo" enctype="multipart/form-data">';
  echo  'Nome: <input type="text" id="nome" name="nome" required><br>';
  echo  'Quantidade: <input type="number" name="quantidade" min="1" required><br>';
  echo  'valorUnitario: <input type="number" name="valorUnitario" min="0" required><br>';
  echo  'Icone: <input type="file" name="icone" required><br>';
  echo  '<input type="hidden" name="id" required><br>';
  echo  '<button type="submit" name="submit">Enviar</button>';
  echo '</form>';

}else{
  if ($_SERVER["REQUEST_METHOD"] == "GET") {
    if (isset($_GET["nome"]) != '' && isset($_GET["quantidade"]) && isset($_GET["valorUnitario"])){
      if(salvaDados($dblink,$_GET,null) == true){
        header("location: piratas.php");
      }
    }
  }

  $tesouro = Tesouro::getTesouroPorId($dblink, $id);
  $nomeTesouro = $tesouro!=null?$tesouro->getNome():"";
  $quantidadeTesouro = $tesouro!=null?$tesouro->getQuantidade():"";
  $valorUnitario = $tesouro!=null?$tesouro->getValorUnitario():"";
  $id = $tesouro!=null?$tesouro->getId():"";
  $img = $tesouro!=null?$tesouro->getIcone():"";

  echo '<form method="get" action="form_tesouro.php" name="tesouroAtualizado" enctype="multipart/form-data">';
  echo  'Nome: <input type="text" value="'.$nomeTesouro.'" name="nome" required><br>';
  echo  'Quantidade: <input type="number" value="'.$quantidadeTesouro.'" name="quantidade" min="1" required><br>';
  echo  'valorUnitario: <input type="number" value="'.$valorUnitario.'" name="valorUnitario" min="0" required><br>';
  echo  'Icone: <img src="'.$img.'" alt="icone" name="icone"><br>';
  echo  '<input type="hidden" value="'.$id.'" name="id" required><br>';
  echo  '<button type="submit" name="submit">Atualizar</button>';
  echo '</form>';
}
?>

