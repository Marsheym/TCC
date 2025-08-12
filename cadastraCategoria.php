<?php
        include "conexao.php";

        // $nome=$_POST['nome'];
        // $descricao=$_POST['email'];

        $comandoSql="insert into tbCategoria (nomeCategoria, descricaoCategoria) values ('$nome','$descricao')";
    
        $resultado=$conn->query($comandoSql);
    
        if($resultado === true){
            echo "ok";
        }else{
            echo "erro";
        }
    
        $conn->close();
?>