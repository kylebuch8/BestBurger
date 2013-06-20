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

        $data['authProvider'] = 'google';
        $data['token'] = 'something cool';

    	/*
    	 * we need to make sure that we receive an authProvider and a
    	 * token from the post
    	 */
    	if (!is_array($data) || !array_key_exists('authProvider', $data) || !array_key_exists('token', $data)) {
    		$return['status'] = 'error';
    		$return['message'] = 'Both authProvider and token are required';
    	} else {
            /*
             * we need to get the user's information from the authProvider so we can
             * store it in the database
             */
            $userData = $this->_getUserInfo($data['authProvider'], $data['token']);
            print_r($userData);

    		$return['status'] = 'success';
    	}

    	//echo json_encode($return);
    }

    private function _getUserInfo($provider, $token) {
        if ($provider == 'google') {
            //$url = 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=' . $token;
            $url = 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=ya29.AHES6ZT49NNT-iItQeiNHi48pcv-IAYtAHzO87-61EewV7QYKiPu2Q';
        }

        if ($provider == 'facebook') {
            //$url = 'https://graph.facebook.com/me?fields=picture,id,name,first_name,last_name,email&access_token=' . $token;
            $url = 'https://graph.facebook.com/me?fields=picture,id,name,first_name,last_name,email&access_token=CAADBOpaXabABACwh2ubSSHf4tDO6apJEQD45S4zB3MVfjG5ZCjzbmUoKwvHLoOPgLxKOxQ50o84JZAxBGdQoDZAglqhhNgVcp0YnvsrlX5NcRpZB858M0ystAFrwYksno4bw9ktdU0rtdbCgnw0dus3qFsJEtPblakusnIlMNwZDZD';
        }

        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
        curl_close($ch);

        /*
         * sample response from google
         * { 
         *   "id": "111228173224427278855", 
         *   "email": "kylebuch8@gmail.com",
         *   "verified_email": true,
         *   "name": "Kyle Buchanan", 
         *   "given_name": "Kyle", 
         *   "family_name": "Buchanan", 
         *   "link": "https://plus.google.com/111228173224427278855", 
         *   "picture": "https://lh4.googleusercontent.com/-1zEfFKV5gKs/AAAAAAAAAAI/AAAAAAAAG0o/3RlahWYRWX0/photo.jpg", 
         *   "gender": "male", 
         *   "birthday": "0000-03-15", 
         *   "locale": "en" 
         *  }
         */

        /*
         * sample response from facebook
         * {
         *   "id":"1215857789",
         *   "name":"Kyle Buchanan",
         *   "first_name":"Kyle",
         *   "last_name":"Buchanan",
         *   "email":"kylebuch8\u0040gmail.com",
         *   "picture":{
         *      "data":{
         *         "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn1\/27346_1215857789_3677_q.jpg",
         *         "is_silhouette":false
         *      }
         *   }
         * }
         */
        
        $responseObj = json_decode($response);

        /*
         * we need to normalize data
         */
        $returnObj = new stdClass();
        $returnObj->id = $responseObj->id;
        $returnObj->first_name = ($provider == 'google') ? $responseObj->given_name : $responseObj->first_name;
        $returnObj->last_name = ($provider == 'google') ? $responseObj->family_name : $responseObj->last_name;
        $returnObj->email = ($provider == 'google') ? $responseObj->email : str_replace('\u0040', '@', $responseObj->email);
        $returnObj->picture = ($provider == 'google') ? $responseObj->picture : $responseObj->picture->data->url;

        return $returnObj;
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