<?php
$page = file_get_contents('http://api.mixlr.com/users/taringaradio?source=embed');
$jsondec = json_decode($page, true);
//$explosion = explode("\n", $jsondec);
//echo $explosion;
//$header = $jsondec['is_live'];
//echo $header;
print_r($jsondec);
?>