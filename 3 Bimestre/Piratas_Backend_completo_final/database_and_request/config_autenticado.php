<?php
  session_start();
  if(!isset($_SESSION["logado"]) || $_SESSION["logado"] !== true){
    header("Location: login.php");
    exit();
  }
  require_once "database.php";

  //obtem conexão
  $dblink = Database::getConnection();

?>
