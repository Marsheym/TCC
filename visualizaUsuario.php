<?php
        include "conexao.php";
    
        $comandoSql="select * from tbUsuario";
    
        $resultado=$conn->query($comandoSql);
    
        if($resultado === true){
            echo "ok";
        }else{
            echo "erro";
        }
    
        $conn->close();
?>