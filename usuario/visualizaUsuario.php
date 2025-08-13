<?php
        include "conexao.php";
    
        $comandoSql="SELECT * FROM tbUsuario";
    
        $resultado=$conn->query($comandoSql);
    
        if($resultado === true){
            echo "ok";
        }else{
            echo "erro";
        }
    
        $conn->close();
?>