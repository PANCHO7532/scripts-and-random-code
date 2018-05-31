<?php
if(isset($_GET['data'],$_GET['nick'])) {
	$apitaringa = "http://beta.taringa.net/api";
	$nick = htmlspecialchars($_GET['nick']);
	$data = htmlspecialchars($_GET['data']);
	//funciones de str_replace, ejemplo str_replace(objeto a buscar, objeto a reemplazar, archivo a afectar);
	str_replace('"', "", $nick);
	str_replace('"', "", $data);
	str_replace("'", "", $data);
	str_replace("'", "", $nick);
	ereg_replace('[^ A-Za-z0-9_-ñÑ]', '', $data);
	ereg_replace('[^ A-Za-z0-9_-ñÑ]', '', $nick);
	error_reporting(0);
	$json_content = file_get_contents($apitaringa."/user/".$nick."/about");
	$stage1 = json_decode($json_content, true);
	error_reporting(0);
	if($data == "state") {
		echo "Datos Invalidos";
		die;
	} else {
		$dummy_var = "1234";
	}
	error_reporting(0);
	if(array_key_exists($data, $stage1) == 'true') {
		error_reporting(0);
		echo $stage1[$data];
		die;
	} else {
		echo "Datos Invalidos";
		die;
	}
} else {
	echo "No hay Datos";
	die;
}
?>