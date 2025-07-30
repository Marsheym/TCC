<?php
    //conexao com o banco
    $host="localhost";
    $user="deborah";
    $password="11235813";
    $dbname="bdBeework";

    $conn=new mysqli($host,$user,$password,$dbname);
    $conn->set_charset("utf8");

    //verifica conexão
    if($conn->connect_error){
        die("Conexão falho: ".$conn->connect_error);
    }else{
        //echo "Conexão ok";
    }
?>