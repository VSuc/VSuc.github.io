<?php

include ("../res/x5engine.php");
$ecommerce = Configuration::getCart();
if (@$_GET['action'] == 'sndrdr' && isset($_POST['orderData'])) {
	$orderNo = $_POST['orderData']['orderNo'];
	$ecommerce->setOrderData($_POST['orderData']);
	$ecommerce->setEncodedOrderData();
	$ecommerce->sendOwnerEmail();
	$ecommerce->sendCustomerEmail();
	header('Content-type: application/json');
	echo '{ "status": "ok", "orderNumber": "' . $orderNo . '" }';
	exit;
} else if(@$_GET['action'] == 'prddnvl') {
	$availability_data = $ecommerce->get_products_dynamic_availability();
	header('Content-type: application/json');
	echo '{ "status": "ok", "data": ' . json_encode($availability_data) . ' }';
	exit;
} else if(@$_GET['action'] == 'dscprd') {
	$discounted_products = $ecommerce->get_discounted_products();
	header('Content-type: application/json');
	echo '{ "status": "ok", "data": ' . json_encode($discounted_products) . ' }';
	exit;
} else if(@$_GET['action'] == 'srcpg') {
	$availability_data = $ecommerce->get_products_dynamic_availability();
	$discounted_products = $ecommerce->get_discounted_products();
	header('Content-type: application/json');
	echo '{ "status": "ok", "data": { "discountedProducts": ' . json_encode($discounted_products) . ', "availabilityData": ' . json_encode($availability_data) . ' } }';
	exit;
}

// End of file x5cart.php
