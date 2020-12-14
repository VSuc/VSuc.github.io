<?php
include("../res/x5engine.php");
$nameList = array("wen","r8m","fv5","lhg","mlf","4r6","ju8","zkt","hv3","h2s");
$charList = array("F","L","D","G","4","A","3","X","S","R");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
