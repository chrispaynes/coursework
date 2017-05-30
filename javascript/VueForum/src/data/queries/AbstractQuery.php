<?php
namespace App;
// define ROOT access
define('__ROOT__', dirname(dirname(dirname(__FILE__))));

abstract class AbstractQuery {
    private $db = '';
    private $is_filtered = false;
    private $user_FK = 0;
    private $thread_FK = 0;

    // filters query data
    abstract protected function filter($params);

    // __construct the query with a defined database
    public function __construct($db = '') {
        $this->db = $db;
    }

    // setFilter engages a filter on the query
    public function setFilter() {
        $this->is_filtered = true;
    }

    // readFromCSV reads content from a CSV file
    private function readFromCSV() {
        $filepath = __ROOT__ . "/database/" . $this->db . "DB.csv";

        $csvData = file_get_contents($filepath);
        return $csvData;
    }

    private function relateUser($record = []) {
        return $record['user_id_PK'] == $this->user_FK;
    }

    private function relateThread($record = []) {
        return $record['thread_id_PK'] == $this->thread_FK;
    }

    private function getRelation($db, $filter, $property) {
        $users = file_get_contents(__ROOT__ . "/database/" . $db . "DB.csv");
        $user_rows = explode(PHP_EOL, trim($users));
        $user_data = array_slice($user_rows, 1);
        $user_keys = array_fill(0, count($user_data), $user_rows[0]);

        $user_json = array_map(function ($user_row, $user_key) {
            return array_combine(str_getcsv($user_key), str_getcsv($user_row));
        }, $user_data, $user_keys);

        $user = array_filter($user_json, [$this, $filter]);
        return reset($user)[$property];
    }

    private function getTotalReplies() {}

    // marshallCSVtoJSON marshalls CSV data into JSON format
    private function marshallCSVtoJSON($csv) {
        $rows = explode(PHP_EOL, trim($csv));
        $data = array_slice($rows, 1);
        $keys = array_fill(0, count($data), $rows[0]);

        $json = array_map(function ($row, $key) {
            return array_combine(str_getcsv($key), str_getcsv($row));
        }, $data, $keys);

        // query DB to set author using id
        if (isset($json[0]['post_thread_id'])) {
            foreach ($json as $record_key => $record_value) {
                $acc = 0;
                foreach ($record_value as $key => $value) {
                    if ($key == 'post_thread_id' && is_numeric($value)) {
                        $this->thread_FK = $value;
                        $json[$record_key]['thread_name'] = $this->getRelation('Threads', 'relateThread', 'thread_name');
                    }
                    if ($key == 'post_author_id' && is_numeric($value)) {
                        $this->user_FK = $value;
                        $json[$record_key]['author_username'] = $this->getRelation('Users', 'relateUser', 'user_username');
                    }
                    $json[$record_key]['replies'] = $acc++;
                }
            }
        }

        if (!$this->is_filtered) {
            return json_encode($json);
        }
        if ($this->is_filtered) {
            // re-index filtered arrays to maintain an array data type
            return json_encode(array_values(array_filter($json, [$this, 'filter'])));
        }
    }

    // execute executes the database query and returns JSON data
    public function execute() {
        $this->data = $this->readFromCSV();
        header('Content-Type: application/json');
        print_r($this->marshallCSVtoJSON($this->data)) || [];
    }
}
?>
