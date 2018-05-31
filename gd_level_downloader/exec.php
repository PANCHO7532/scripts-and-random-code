<?php
//Level Downloader V1.10 Coded by PANCHO7532 (STMR Communications LTD S.A)
//Obtenemos la Lista de niveles
$server = $_POST['server'];
$namelvl = $_POST['namelvl'];
$author = $_POST['author'];
$id = $_POST['id'];
//$dificultad = $_POST['diff'];
//$star = $_POST['star'];
//$coins = $_POST['coins'];
$stage1 = curl_init('http://'.$server.'/getGJLevels21.php');
curl_setopt ($stage1, CURLOPT_POST, 1);
curl_setopt ($stage1, CURLOPT_POSTFIELDS,"gameVersion=21&binaryVersion=33&gdw=0&type=0&str=$id&diff=-&len=-&page=0&total=0&uncompleted=0&onlyCompleted=0&featured=0&original=0&twoPlayer=0&coins=0&epic=0&demonFilter=1&secret=Wmfd2893gb7");
curl_setopt ($stage1, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($stage1);
$error = curl_error($stage1);
curl_close($stage1);
//Escribiendo php getGJLevels21
$archivo = "getGJLevels21.php";
$archivo1 = fopen($archivo, "a");
fwrite ($archivo1, $response);
fclose ($archivo1);
//Obtenemos los datos del nivel
$stage2 = curl_init('http://'.$server.'/downloadGJLevel22.php');
curl_setopt ($stage2, CURLOPT_POST, 1);
curl_setopt ($stage2, CURLOPT_POSTFIELDS,"gameVersion=21&binaryVersion=33&secret=Wmfd2893gb7&levelID=$id");
curl_setopt ($stage2, CURLOPT_RETURNTRANSFER, true);
$response2 = curl_exec($stage2);
$error2 = curl_error($stage2);
curl_close($stage2);
//Escribiendo php downloadGJLevel22
$archivo2 = "downloadGJLevel22.php";
$archivo3 = fopen($archivo2, "a");
fwrite ($archivo3, $response2);
fclose ($archivo3);
//Generando archivo getGJComments21
$enc1 = base64_encode($namelvl. " by " .$author. " [Local Copy Saved at: ".date("r")."]");
$archivo4 = "getGJComments21.php";
$archivo5 = fopen($archivo4, "a");
fwrite ($archivo5, "2~".$enc1."~3~1~4~1~7~0~10~100~9~1 second~6~48110454:1~Administrator~9~16~10~0~11~3~14~2~15~2~17~71#1:0:10");
fclose ($archivo5);
//Comprimir PHP en zip
$zip = new ZipArchive();
$filename = $namelvl." by ".$author. "_".$id. "_COMPATIBLE.zip";
if($zip->open($filename,ZIPARCHIVE::CREATE)===true) {
	$zip->addFile('getGJLevels21.php');
	$zip->addFile('downloadGJLevel22.php');
	$zip->addFile('getGJComments21.php');
	$zip->close();
	rename ($filename,"temp/".$filename);
	//echo "1";
} else {
	//echo "-1";
}

//Clearing var and files
unlink('getGJLevels21.php');
unlink('downloadGJLevel22.php');
unlink('getGJComments21.php');
unset($response, $response2, $error, $error2, $namelvl, $author, $id, $dificultad, $star, $coins, $stage1, $stage2);
unset($archivo, $archivo2, $archivo3, $archivo4, $archivo5);
//Redirecting to ZIP
header("Location: temp/".$filename);
?>