<?php
namespace App;
// define ROOT access
define('__ROOT__', dirname(dirname(dirname(__FILE__))));

abstract class AbstractQuery {
    private $db = '';
    private $is_filtered = false;
    private $query_params = [];
    private $record_key = 0;

    // filters query data
    abstract protected function filter($params);

    // __construct the query with a defined database
    public function __construct($db = '') {
        $this->db = $db;
        $this->setQueryParams();
    }

    // setQueryParams stores URL's query parameters
    private function setQueryParams() {
        parse_str($_SERVER['QUERY_STRING'], $this->query_params);
    }

    // getQueryParams returns an associative array of query params
    public function getQueryParams() {
        return $this->query_params;
    }

    // enableFilter engages a filter on the query
    public function enableFilter() {
        $this->is_filtered = true;
    }

    // readFromCSV reads content from a CSV file
    private function readFromCSV() {
        $filepath = __ROOT__ . "/database/" . $this->db . "DB.csv";

        $csvData = file_get_contents($filepath);
        return $csvData;
    }

    // relateUser matches a user based on a Primary Key
    private function relateUser($record = []) {
        return $this->mapQueryParamToDBColumn('id', 'user_id_PK', $record);
    }

    // relateThread matches a thread based on a Primary Key
    private function relateThread($record = []) {
        return $this->mapQueryParamToDBColumn('thread', 'thread_id_PK', $record);
    }

    // mapQueryParamToDBColumn matches a query param or record_key to a DB column
    private function mapQueryParamToDBColumn($param, $db_column, $record) {
        return isset($this->getQueryParams()[$param]) ? $record[$db_column] == $this->getQueryParams()[$param] : $record[$db_column] == $this->record_key;
    }

    private function getRelation($db, $filter, $property) {
        $raw_db_table_data = file_get_contents(__ROOT__ . "/database/" . $db . "DB.csv");
        $raw_records = explode(PHP_EOL, trim($raw_db_table_data));
        $records = array_slice($raw_records, 1);
        $columns = array_fill(0, count($records), $raw_records[0]);

        $json = array_map(function ($user_row, $user_key) {
            return array_combine(str_getcsv($user_key), str_getcsv($user_row));
        }, $records, $columns);

        $filtered_json = array_filter($json, [$this, $filter]);
        return reset($filtered_json)[$property];
    }

    // marshallCSVtoJSON marshalls CSV data into JSON format
    private function marshallCSVtoJSON($csv) {
        $rows = explode(PHP_EOL, trim($csv));
        $data = array_slice($rows, 1);
        $keys = array_fill(0, count($data), $rows[0]);

        $json = array_map(function ($row, $key) {
            return array_combine(str_getcsv($key), str_getcsv($row));
        }, $data, $keys);

        $computed_json = $this->computeRelationalValue($json);

        // return unfiltered data
        if (!$this->is_filtered) {
            return json_encode($computed_json);
        }

        // return filter data
        if ($this->is_filtered) {
            // re-index filtered arrays to maintain an array data type
            return json_encode(array_values(array_filter($computed_json, [$this, 'filter'])));
        }
    }

    // computeRelationalValue computes and adds relational query values to an JSON object
    private function computeRelationalValue($json) {
        // query DB to set author using id
        if (isset($json[0]['post_thread_id'])) {
            foreach ($json as $record_key => $record_value) {
                // $this->record_key = $record_key;
                $acc = 0;
                // set computed values in return data
                foreach ($record_value as $key => $value) {
                    $this->record_key = $value;
                    if ($key == 'post_thread_id' && is_numeric($value)) {
                        $json[$record_key]['thread_name'] = $this->getRelation('Threads', 'relateThread', 'thread_name');
                    }
                    if ($key == 'post_author_id' && is_numeric($value)) {
                        $json[$record_key]['author_username'] = $this->getRelation('Users', 'relateUser', 'user_username');
                    }
                    $json[$record_key]['replies'] = $acc++;
                }
            }
        }
        return $json;
    }

    // execute executes the database query and returns JSON data
    public function execute() {
        $this->data = $this->readFromCSV();
        header('Content-Type: application/json');
        print_r($this->marshallCSVtoJSON($this->data)) || [];
    }
}
?>
