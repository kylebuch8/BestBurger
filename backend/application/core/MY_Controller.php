<?php 

class MY_Controller extends CI_Controller {

	public function __construct() {
		parent::__construct();
		
		error_reporting(E_ALL);
		ini_set('display_errors', '1');
	}

}