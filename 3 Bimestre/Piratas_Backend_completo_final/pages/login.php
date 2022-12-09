<?php

require_once("../database_and_request/modelo.php");
require("header.php");
require_once "../database_and_request/database.php";


if($_POST){
  //obtem conexão
  $dblink = Database::getConnection();
  $usuario = Usuario::obtemUsuarioPorNome($dblink, $_POST["usuario"]);
  if($usuario != null && $usuario->checar_senha($_POST["senha"])){
    session_start();
    $_SESSION["logado"] = true;
    $_SESSION["id_usuario"] = $usuario->getId();

    header("location: piratas.php");
  }else{
    print("<div class='erro'>Erro! Usuário ou senha inválidos!</div>");
  }
}

 ?>
<div class="login">
  <form action="login.php" method="post">
    <input type="text" name="usuario" placeholder="Nome do Usuario">
    <input type="password" name="senha" placeholder="Senha">
    <input type="submit" value="logar">
  </form>
</div>

<?php
  require("footer.php");
?>
