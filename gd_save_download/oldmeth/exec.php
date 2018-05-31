<?php
$server = $_POST['server'];
$usr = $_POST['username'];
$password = $_POST['passwd'];
//Descargando datos
$stage1 = curl_init('http://'.$server.'/syncGJAccountNew.php');
curl_setopt ($stage1, CURLOPT_POST, 1);
curl_setopt ($stage1, CURLOPT_POSTFIELDS,"userName=$usr&password=$password&secret=Wmfv3899gc9&gameVersion=21&binaryVersion=35&gdw=0");
curl_setopt ($stage1, CURLOPT_RETURNTRANSFER, true);
$responsedata = curl_exec($stage1);
$error = curl_error($stage1);
curl_close($stage1);
//Escribiendo archivo
$archivo = "syncGJAccount20.php";
$archivo1 = fopen($archivo, "a");
fwrite ($archivo1, $responsedata);
fclose ($archivo1);
//Comprimiendo
$md5func = md5($server."_".$usr."_".$password);
$zip = new ZipArchive();
$filename = "SaveData_".$usr."_".$md5func.".zip";
if($zip->open($filename,ZIPARCHIVE::CREATE)===true) {
	$zip->addFile('syncGJAccount20.php');
	$zip->close();
	rename ($filename,"temp/".$filename);
	//echo "1";
} else {
	//echo "-1";
}

//Limpiando archivos y variables
unlink('syncGJAccount20.php');
unset($server, $usr, $password, $responsedata);
//Redireccionando al ZIP
header("Location: temp/".$filename);
?>