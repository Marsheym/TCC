<?php
        include "conexao.php";

        $nome=$_POST['nome'];
        $email=$_POST['email'];
        $senha=$_POST['senha'];
    
        $comandoSql="insert into tbUsuario (nomeUsuario, email, senha)('$nome','$email','$senha')";
    
        $resultado=$conn->query($comandoSql);
    
        if($resultado->num_rows>0){
            $row=$resultado->fetch_assoc();
            echo "ok";
        }else{
            echo "erro";
        }
    
        $conn->close();
?>