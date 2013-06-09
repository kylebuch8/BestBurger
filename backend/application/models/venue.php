<?php

class Venue extends CI_Model {

	function create($data) {
		/*
		 * double-check that this is a valid foursquare
		 * venue id
		 */
		$this->load->library('foursquare');
		return TRUE;

		/*$this->db->insert('venues', $data);
		$insertId = $this->db->insert_id();
		
		$venue = $this->read(
			array(
				"id" => $insertId
			)
		);
		
		return $venue;*/
	}

	function read($data) {
		if ($data["id"]) {
			$this->db->where("id", $data["id"]);
		}
		
		$query = $this->db->get("venues");
		return $query->result();
	}

}