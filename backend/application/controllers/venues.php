<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Venues extends MY_Controller {

	public function __construct() {
	    parent::__construct();

	    $this->load->library('foursquare');
	    $this->load->model('venue');
    }

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -  
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in 
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
	public function index() {
		$this->load->view('welcome_message');
	}

	public function add() {
		$this->load->library('form_validation');

		$this->form_validation->set_rules('foursquare_id', 'Foursquare ID', 'trim|required|xss_clean');

		$returnArr = array();

		if ($this->form_validation->run()) {
			/*
			 * validation was successful
			 */
			$data = array(
				'foursquare_id' => $this->form_validation->set_value('foursquare_id')
			);

			$returnArr = $this->venue->add($data);
		} else {
			/*
			 * validation failed
			 */
			$returnArr['errors'] = $this->form_validation->error_array();
		}

		echo json_encode($returnArr);
	}

	public function search() {
		$ll = $this->input->get("ll", TRUE);
		$query = $this->input->get("query", TRUE);
		
		$params = array(
			"ll" => $ll,
			"query" => $query,
			"v" => date("Ymd")
		);
		
		$response = $this->foursquare->get_public("venues/search", $params);
		echo $response;
	}

	public function suggestcompletion() {
		$ll = $this->input->get("ll", TRUE);
		$query = $this->input->get("query", TRUE);
		
		$params = array(
			"ll" => $ll,
			"query" => $query,
			"v" => date("Ymd")
		);
		
		$response = $this->foursquare->get_public("venues/suggestcompletion", $params);
		echo $response;
	}

}

/* End of file venues.php */
/* Location: ./application/controllers/venues.php */