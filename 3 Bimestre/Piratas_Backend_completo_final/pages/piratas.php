<?php
  require("../database_and_request/config_autenticado.php");
  require("../database_and_request/modelo.php");
  require("header.php");
  if(isset($_GET["id"])){
    $tesouro = new Tesouro($_GET["id"]);
    $tesouro->remover($dblink);
  }
?>
	<h1>Gerenciador de Tesouros </h1>
  <section id="tesouros">
    <table>
      <caption>Estes são os tesouros acumulados do <?php echo Usuario::getNome($dblink,$_SESSION["id_usuario"])?> em suas aventuras</caption>
      <thead>
        <tr>
          <th>Tesouro</th>
          <th>Nome</th>
          <th>Valor unitário</th>
          <th>Quantidade</th>
          <th>Valor total</th>
          <th>Exclusão</th>
          <th>Atualização</th>
        </tr>
      </thead>
      <tbody>
        <?php
	        require_once("../database_and_request/modelo.php");
          $totalGeral = 0;
	         //$resultado = array(); //essa linha poderá ser excluída após as modificações
          // $resultado é o array que percorremos na prática passada. Você irá substituí-lo pelo método estático (criado por você) getTesouros da classe Tesouro
          // $tesouroAtual é a variável que contém o elemento atual do array. Ele será um objeto PHP, assim, faça as alterações para que funcione  corretamente
          foreach (Tesouro::getTesouros($dblink,$_SESSION["id_usuario"]) as $tesouroAtual) {
            $totalGeral += $tesouroAtual->getQuantidade() * $tesouroAtual->getValorUnitario();
        ?>
        <tr>
          <td><img src="<?= $tesouroAtual->getIcone() ?>"></td>
          <td><?= $tesouroAtual->getNome() ?></td>
          <td><?= number_format($tesouroAtual->getValorUnitario(), 0, ",", ".") ?></td>
          <td><?= $tesouroAtual->getQuantidade() ?></td>
          <td><?= number_format($tesouroAtual->getQuantidade() * $tesouroAtual->getValorUnitario(), 0, ",", ".") ?></td>
          <td><a href="piratas.php?id=<?=$tesouroAtual->getId()?>"><img src="../imgs/delete.svg"></a></td>
          <td><a href="form_tesouro.php?id=<?=$tesouroAtual->getId()?>"><img src="../imgs/edit.png"></a></td>
        </tr>
        <?php
          }
        ?>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4">Total geral</td>
          <td><?= number_format($totalGeral, 0, ",", ".") ?></td>
          <td colspan="2"></td>
        </tr>
      </tfoot>
    </table>
    <a class="add" href="form_tesouro.php">+</a>
  </section>
  <!-- 'Barba-Ruiva' -->
  <!-- <p>Yarr Harr, marujo! Aqui é o temido <//?php echo Usuario::getNome()?> e você deve me ajudar -->
  <p>Yarr Harr, marujo! Aqui é o temido <?php echo Usuario::getNome($dblink,$_SESSION["id_usuario"])?> e você deve me ajudar a contabilizar os espólios das minhas aventuras!</p>
  <a id="logout" href="../logout.php">Log Out</a>
<?php
  require("footer.php");
?>
