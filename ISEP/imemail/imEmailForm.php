<?php
if(substr(basename($_SERVER['PHP_SELF']), 0, 11) == "imEmailForm") {
	include '../res/x5engine.php';
	$form = new ImForm();
	$form->setField('Name', @$_POST['imObjectForm_17_1'], '', false);
	$form->setField('Surname', @$_POST['imObjectForm_17_2'], '', false);
	$form->setField('Email Address', @$_POST['imObjectForm_17_3'], '', false);
	$form->setField('Phone Number', @$_POST['imObjectForm_17_4'], '', false);
	$form->setField('Fax Number', @$_POST['imObjectForm_17_5'], '', false);
	$form->setField('Request Type', @$_POST['imObjectForm_17_6'], '', false);
	$form->setField('Your Message...', @$_POST['imObjectForm_17_7'], '', false);

	if(@$_POST['action'] != 'check_answer') {
		if(!isset($_POST['imJsCheck']) || $_POST['imJsCheck'] != '93EF3FD0D082ED7E4C909AAD8D3DCE5F' || (isset($_POST['imSpProt']) && $_POST['imSpProt'] != ""))
			die(imPrintJsError());
		$form->mailToOwner('example@example.com', 'example@example.com', '', '', false);
		@header('Location: ../index.html');
		exit();
	} else {
		echo $form->checkAnswer(@$_POST['id'], @$_POST['answer']) ? 1 : 0;
	}
}

// End of file