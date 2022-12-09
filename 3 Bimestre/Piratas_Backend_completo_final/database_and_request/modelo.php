<?php
class Usuario{
	private $id;
	private $nome;
	private $senha;
	public function __construct($id,$nome,$senha){
		$this->id = $id;
		$this->nome = $nome;
		$this->senha = $senha;
	}
	public function getId(){
		return $this->id;
	}
	// public static function getNome(){
	// 	return $this->nome;
	// }
	public static function getNome($db,$id){
		$query = "SELECT
								nome
							FROM
								usuarios
							WHERE
								id = :usuario";
		$stmt = $db->prepare( $query );
		$stmt->bindParam(":usuario", $id);
		$stmt->execute();
		$row = $stmt->fetch(PDO::FETCH_ASSOC);
		if ($row){
			extract($row);
			return ucwords(str_replace("-"," ",$row['nome']));
		}else{
			return null;
		}
		
	}
	public function checar_senha($password){
		return password_verify($password,$this->senha);
	}
	public static function obtemUsuarioPorNome($db,$nome){
		$query = "SELECT
								id,
								nome,
								senha
							FROM
								usuarios
							where
								nome = :nome";
		$stmt = $db->prepare( $query );
		$stmt->bindParam(":nome", $nome);
		$stmt->execute();
		$row = $stmt->fetch(PDO::FETCH_ASSOC);
		if ($row){
			extract($row);
			return new Usuario($id,$nome,$senha);
		}else{
			return null;
		}
	}
}

class Tesouro{
	private $id;
	private $idUsuario;
	private $nome;
	private $quantidade;
	private $icone;
	private $valorUnitario;

	public function __construct($id,$idUsuario=null,$nome=null,$quantidade=null,$icone=null,$valorUnitario=null){
		$this->id = $id;
		$this->idUsuario = $idUsuario;
		$this->nome = $nome;
		$this->quantidade = $quantidade;
		$this->icone = $icone;
		$this->valorUnitario = $valorUnitario;
  }
	public function getId(){
		return $this->id;
	}
	public function getIdUsuario(){
		return $this->idUsuario;
	}
	public function getNome(){
		return $this->nome;
	}
	public function getQuantidade(){
		return $this->quantidade;
	}
	public function getIcone(){ 
		return $this->icone;
	}
	public function getValorUnitario(){
		return $this->valorUnitario;
	}
	public function setNome($nome){
		$this->nome = $nome;
	}
	public function setQuantidade($quantidade){
		$this->quantidade = $quantidade;
	}
	public function setIcone($icone){
		$this->icone = $icone;
	}
	public function setValorUnitario($valor){
		$this->valorUnitario = $valor;
	}
	public static function getTesouros($db,$idUsuario){
		$query = "SELECT
				id,
				id_usuario,
				nome,
				quantidade,
				valorUnitario,
				icone
			FROM
				tesouros
			WHERE
				id_usuario = :usuario";
		$stmt = $db->prepare( $query );
		$stmt->bindParam(":usuario", $idUsuario);
    	$stmt->execute();
		$arrTesouros = array();
		while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
			extract($row);
			$tesouro = new Tesouro($id,$id_usuario,$nome,$quantidade,$icone,$valorUnitario);
			yield $tesouro;
		}
	}
	public static function getTesouroPorUsuario($db,$nome,$idUsuario){
		$query = "SELECT
				id,
				id_usuario,
				nome,
				quantidade,
				valorUnitario,
				icone
			FROM
				tesouros
			WHERE
				id_usuario = :usuario
				and nome = :nome";
		$stmt = $db->prepare( $query );
		$stmt->bindParam(":usuario", $idUsuario);
		$stmt->bindParam(":nome", $nome);
			$stmt->execute();
		$arrTesouros = array();
		if ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
			extract($row);
			return new Tesouro($id,$id_usuario,$nome,$quantidade,$icone,$valorUnitario);
		}else{
			return null;
		}
	}
	public static function getTesouroPorId($db,$id){
		$query = "SELECT
				id,
				id_usuario,
				nome,
				quantidade,
				valorUnitario,
				icone
			FROM
				tesouros
			WHERE
				id = :id";
		$stmt = $db->prepare( $query );
		$stmt->bindParam(":id", $id);
		$stmt->execute();
		if ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
			extract($row);
			return new Tesouro($id,$id_usuario,$nome,$quantidade,$icone,$valorUnitario);
		}else{
			return null;
		}
	}
	public function inserir($db){
		$cmd = "INSERT INTO tesouros
								(
								nome,
								quantidade,
								valorUnitario,
								icone,
								id_usuario
							)
							VALUES
							(
								:nome,
								:quantidade,
								:valorUnitario,
								:icone,
								:id_usuario
							)";
		$stmt = $db->prepare( $cmd );
		$stmt->bindParam(":nome",$this->nome);
		$stmt->bindParam(":quantidade",$this->quantidade);
		$stmt->bindParam(":valorUnitario",$this->valorUnitario);
		$stmt->bindParam(":icone",$this->icone);
		$stmt->bindParam(":id_usuario",$this->idUsuario);
		return $stmt->execute();
	}
	public function atualizar($db){
		$cmd = "UPDATE tesouros
						SET
							nome = :nome,
							quantidade = :quantidade,
							valorUnitario = :valorUnitario
							".($this->icone?", icone = :icone ":"")."
						WHERE
							id = :id";
		$stmt = $db->prepare($cmd);
		$stmt->bindParam(":nome",$this->nome);
		$stmt->bindParam(":quantidade",$this->quantidade);
		$stmt->bindParam(":valorUnitario",$this->valorUnitario);

		if($this->icone){
			$stmt->bindParam(":icone",$this->icone);
		}
		$stmt->bindParam(":id",$this->id);
		return $stmt->execute();
	}
	public function remover($db){
		$cmd = "DELETE FROM tesouros WHERE id = :id";
		$stmt = $db->prepare($cmd);
		$stmt->bindParam(":id",$this->id);
		return $stmt->execute();
	}
}
?>
