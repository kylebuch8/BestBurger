<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Users extends MY_Controller {

	public function __construct() {
	    parent::__construct();
    }

    public function login() {
    	$this->load->view('login');
    }

    public function storeCredentials() {
    	$return = array();

    	/*
    	 * we are receiving a request payload and we need to sanitize it
    	 */
    	$data = json_decode(file_get_contents('php://input'), true);
    	$data = $this->security->xss_clean($data);

    	/*
    	 * we need to make sure that we receive an authProvider and a
    	 * token from the post
    	 */
    	if (!array_key_exists('authProvider', $data) || !array_key_exists('token', $data)) {
    		$return['status'] = 'error';
    		$return['message'] = 'Both authProvider and token are required';
    	} else {
    		$return['status'] = 'success';
    	}

    	echo json_encode($return);
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