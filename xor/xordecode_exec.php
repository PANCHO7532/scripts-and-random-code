<title>XOR Decoder - Resultados</title>
<fieldset>
<legend>Resultados: </legend>
<p></p>
<?php
// Clave
 $key = $_POST["KEY"]; 

 // Texto a desencriptar 
 $text = base64_decode($_POST["TEXT"]); 

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
// Decodificando la salida y imprimiendo resultados
echo $outText;
?>
<p>---Tarea Finalizada!!!---</p>
</fieldset>
<p><a href="/xor/xordecode.html">Volver</a></p>
<p></p>
<p>COPYRIGHT PANCHO7532</p>