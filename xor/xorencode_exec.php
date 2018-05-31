<title>XOR Encoder - Resultados</title>
<fieldset>
<legend>Resultados: </legend>
<p></p>
<?php
// Clave
 $key = $_POST["KEY"]; 

 // Texto a encriptar 
 $text = $_POST["TEXT"]; 

 // Salida de texto 
 $outText = ''; 
  
 // XOR Code
 for($i=0;$i<strlen($text);) // No se necesita incremento aqui
 { 
     for($j=0;$j<strlen($key);$j++,$i++) 
     { 
         $outText .= $text{$i} ^ $key{$j}; 
     } 
 } 
// Codificando a Base64 e imprimiendo la salida
$enc = base64_encode ($outText);
echo $enc;
?>
<p>---Tarea Finalizada!!!---</p>
</fieldset>
<p><a href="/xor/xorencode.html">Volver</a></p>
<p></p>
<p>COPYRIGHT PANCHO7532</p>