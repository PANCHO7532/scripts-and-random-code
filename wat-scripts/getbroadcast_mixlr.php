<?php
if(isset($_GET['broadcast']) && isset($_GET['username']) && isset($_GET['type']) && isset($_GET['redirect'])) {
	$apimixlr = "http://api.mixlr.com";
	$username = $_GET['username'];
	$broadcast = $_GET['broadcast'];
	$type = $_GET['type'];
	$redirect = $_GET['redirect'];
	$json_content = file_get_contents($apimixlr.'/users/'.$username.'?source=embed');
	if($redirect == 'true') {
		$stage1 = json_decode($json_content, true);
		if($stage1['is_live'] == '1') {
			$header = $stage1['broadcasts']['0']['streams'][$type]['url'];
			header("Location: ".$header);
			die;
		} else {
			header("Location: mp3files/mac.mp3");
			die;
		}
	} else {
		$stage11 = json_decode($json_content, true);
		if($stage11['is_live'] == '1') {
			$header11 = $stage11['broadcasts']['0']['streams'][$type]['url'];
			echo '<fieldset><legend>Mixlr Broadcast</legend><p>URL Requested:</p><p>'.$header11.'</p></fieldset>';
			die;
		} else {
			echo "<fieldset><legend>ERROR</legend><p>The user requested isn't broadcasting in this moment.</p></fieldset>";
			//header("Location: mp3files/mac.mp3");
			die;
		}
	}
} else {
	echo "<fieldset><legend>ERROR</legend><p>Invalid Request</p></fieldset>";
	//header("Location: mp3files/mac.mp3");
	die;
}
?>