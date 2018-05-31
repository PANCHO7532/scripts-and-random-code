<?php
//Soundcloud interacter
//Copyright PANCHO7532 - P7COMunications LTD S.A
$api_key = 'dc467dd431fc48eb0244b0aead929ccd';
$api_url = 'https://api.soundcloud.com';
//capturing vars
$url = $_GET['url'];

//working on it, first, resolve url...
$req = file_get_contents($api_url."/resolve?client_id=".$api_key."&url=".$url);
$stage1 = json_decode($req, true);
//var_dump($stage1);
if($stage1['kind'] == 'track') {
	$songid = $stage1['id'];
	if($stage1['streamable'] == 'true') {
		header("Location: ".$api_url."/tracks/".$songid."/stream?client_id=".$api_key);
	} elseif($stage1['downloadable'] == 'true') {
		header("Location: ".$api_url."/tracks/".$songid."/download?client_id=".$api_key);
	} else {
		header("Location: mp3files/mac.mp3");
	}
} else {
	header("Location: mp3files/mac.mp3");
}
?>