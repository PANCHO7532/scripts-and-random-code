<?php
$remote_file_url = $_POST["url"];
$local_file = $_POST["file"];
$copy = copy($remote_file_url, $local_file);

if ($copy) {
    echo "Archivo copiado exitosamente al servidor!";
} else {
    echo "Operacion fallida: El archivo no se copio...";
}
?>