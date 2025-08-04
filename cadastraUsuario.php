<?php
        include "conexao.php";

        $nome=$_POST['nome'];
        $email=$_POST['email'];
        $senha=$_POST['senha'];
    
        $comandoSql="insert into tbUsuario (nomeUsuario, email, senha) values ('$nome','$email','$senha')";
    
        $resultado=$conn->query($comandoSql);
    
        if($resultado === true){
            echo "ok";
        }else{
            echo "erro";
        }
    
        $conn->close();
?>