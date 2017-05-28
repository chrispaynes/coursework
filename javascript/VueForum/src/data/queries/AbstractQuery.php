<?php
namespace App;
// define ROOT access
define('__ROOT__', dirname(dirname(dirname(__FILE__))));

abstract class AbstractQuery {
    private $data = '';
    private $db = '';
    private $is_filtered = false;
    private $has_headers = false;

    // filters query data
    abstract protected function filter($params);

    // __construct the query with a defined database
    public function __construct($db) {
        $this->db = $db;
    }

    // setFilter engages a filter on the query
    public function setFilter() {
        $this->is_filtered = true;
    }

    // readFromCSV reads content from a CSV file
    private function readFromCSV() {
        $filepath = __ROOT__ . "/database/" . $this->db . ".csv";
        $csvData = file_get_contents($filepath);
        return $csvData;
    }

    // marshallCSVtoJSON marshalls CSV data into JSON format
    private function marshallCSVtoJSON($csv) {
        $rows = explode(PHP_EOL, trim($csv));
        $data = array_slice($rows, 1);
        $keys = array_fill(0, count($data), $rows[0]);
        $json = array_map(function ($row, $key) {
            return array_combine(str_getcsv($key), str_getcsv($row));
        }, $data, $keys);

        if (!$this->is_filtered) {
            return json_encode($json);
        }
        if ($this->is_filtered) {
            return json_encode(array_filter($json, [$this, 'filter']));
        }
    }

    // execute executes the database query and returns JSON data
    public function execute() {
        $this->data = $this->readFromCSV();
        header('Content-Type: application/json');
        print_r($this->marshallCSVtoJSON($this->data));
    }
}
?>
