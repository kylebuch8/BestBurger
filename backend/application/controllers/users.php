<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Users extends MY_Controller {

	public function __construct() {
	    parent::__construct();
    }

    public function login() {
    	$this->load->view('login');
    }

    private function _generatetoken() {
		$token = "";
		
		while (strlen($token) < 32) {
			$token .= mt_rand(0, mt_getrandmax());
		}
		
		$token .= $this->input->ip_address();
		return md5(uniqid($token, TRUE));
	}

}