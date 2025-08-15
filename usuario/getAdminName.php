<?php
include '../conexao.php';

$sql = "SELECT nomeUsuario FROM tbUsuario WHERE tipoUsuario = 2 LIMIT 1";
$result = $conn->query($sql);

if ($result && $result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo $row['nomeUsuario'];
} else {
    echo "Administrador";
}
?>
