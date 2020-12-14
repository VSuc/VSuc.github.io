<?php
include("../res/x5engine.php");
$nameList = array("nw2","fr8","l8g","7ux","vnh","kfk","dj7","afc","tdy","cjr");
$charList = array("6","6","V","3","G","P","R","T","A","L");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
