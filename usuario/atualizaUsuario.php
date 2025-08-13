<?php
        include "conexao.php";

        $id=$POST_['idUsuario'];
        $nome=$_POST['nome']; 
        $telefoneUsuario=$_POST['telefoneUsuario'];
        $fotoUsuario=$_POST['fotoUsuario'];
        $biografiaUsuario=$_POST['biografiaUsuario'];
        $cepUsuario=$_POST['cep'];

    
        $comandoSql="UPDATE tbUsuario SET nomeUsuario = $nome,  email = $email, telefone = $telefoneUsuario, fotoUsuario = $fotoUsuario, biografiaUsuario = $biografiaUsuario, cep = $cepUsuario WHERE idUsuario = $id;";
    
        $resultado=$conn->query($comandoSql);
    
        if($resultado === true){
            echo "ok";
        }else{
            echo "erro";
        }
    
        $conn->close();
?>