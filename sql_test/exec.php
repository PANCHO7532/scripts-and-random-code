<?php

$link = mysqli_connect("localhost", "usuario", "password", "dbname");
if(!$link) {
echo "nose pudo conectar";
die;
}
$consulta = mysqli_query($link, "SELECT * from basic_auth where username='".$_POST['user']."'");
if(!$consulta) {
echo "no se pudo realizar la consulta";
die;
}
//tablaaaaaaaaaxañsdjaklsdjaslkdj
$resultadoarray = mysqli_fetch_array($consulta);
//auth
if($resultadoarray['username'] = $_POST['user'] AND $resultadoarray['password'] == $_POST['psw']) {
setcookie("user", $_POST['user'], time()+3600);
header("Location: index2.php");
} else {
echo "error de usuario";
die;
}
?>