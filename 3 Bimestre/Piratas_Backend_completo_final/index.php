<?php
session_start();
if(!isset($_SESSION["logado"]) || $_SESSION["logado"] !== true){
  header("Location: pages/login.php");
}else{
  header("Location: pages/piratas.php");
}

  // echo crypt("teste123", PASSWORD_DEFAULT);
  // echo "<br>";
  // echo password_hash("teste123", PASSWORD_DEFAULT);
  // echo "<br>";
  // echo password_verify("teste123",'$2y$10$yWyKoLVdaZ0dO0L/EwXFfeIv0kHC16Na7dbJRatIWS8GAAK.7XQia'); 
?>
