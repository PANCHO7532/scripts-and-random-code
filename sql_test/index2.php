<?php
$link = mysqli_connect("localhost", "usuario", "password", "dbname");
if(!$link) {
echo "nose pudo conectar";
die;
}
$consulta = mysqli_query($link, "SELECT * from basic_auth where username='".$_COOKIE['user']."'");
if(!$consulta) {
echo "no se pudo realizar la consulta";
die;
}
//tablaaaaaaaaaxañsdjaklsdjaslkdj
$resultadoarray = mysqli_fetch_array($consulta);

echo "<head><title>bienvenidaxd</title><fieldset><legend>Bienvenido, ".$resultadoarray['datos']."</legend><p>y este es el contenido finalxd</p></fieldset>";
?>