<?php
//IP Register API v0.1 by PANCHO7532 - P7COMunications LTD S.A
//Annoyng variable
$data = "hello";
//The only variable what do you need to insert, is: $api_inputfile
//The result file maybe is:
//$api_inputfile = "textfile.txt";
//include 'ipregister_api.php';
$file1 = $api_inputfile;
//Here we create the new file with the filename descripted in $api_inputfile
$file = fopen($file1, "a");
//Here PHP begins to write the file, first, its good to know the time of the capture ;)
fwrite($file, "Registered: ".date("r"). " Server Time\r\n");
//Here PHP writes the basic IP captured
fwrite($file, "Public IP: ".$_SERVER['REMOTE_ADDR']."\r\n");
//If the client its connected by proxy, PHP will request the IP in the backstage of Proxy to know who is
fwrite($file, "Decoded IP by Proxy: ".$_SERVER['HTTP_X_FORWARDED_FOR']."\r\n");
//User Agent, Operative system of the client and the web browser version and name.
fwrite($file, "User Agent: ".$_SERVER['HTTP_USER_AGENT']."\r\n");
//URL visited, useful to track
fwrite($file, "Location: ".$_SERVER['REQUEST_URI']."\r\n");
//Here, PHP will open a free line to new entries in the text file
fwrite($file, "\r\n");
//Closing the file
fclose($file);
//And thats all folks ;)
?>