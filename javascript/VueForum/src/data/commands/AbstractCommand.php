<?php
namespace App;
// define ROOT access
define('__ROOT__', dirname(dirname(dirname(__FILE__))));

abstract class AbstractCommand {
    private $data = '';
    private $db = '';
    protected $inputs = [];
    protected $columns = [];
    private $inputErrors = [];

    // setInputs
    abstract protected function setInputs();

    // __construct the command with a defined database
    public function __construct($db) {
        $this->db = $db;
    }

    public function sanitizeInput($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    private function writeToCSV($CSVinput) {
        print_r($CSVinput);
        if (!empty($CSVinput)) {
            $filepath = __ROOT__ . "/database/" . $this->db . ".csv";
            $file = fopen($filepath, "ab");

            // add column headers if the file is new
            if (filesize($filepath) == 0) {
                $columns = ['user_id_PK', 'user_username', 'user_password', 'user_firstname', 'user_lastname', 'user_email', 'user_is_admin'];
                fputcsv($file, $columns);
            }

            // write the array to the csv
            fputcsv($file, $CSVinput);
            fclose($file);
        }
    }

    private function displayInputErrors($errors) {
        $body = "";
        foreach ($errors as $e) {
            $body .= "Error: " . $e . "<br>";
        }
        echo $body;
    }

    // displayInput displays the input back
    private function displayInput($inputs) {
        $body = "";
        foreach ($inputs as $key => $value) {
            $body .= "$key : $value <br>";
        }
        echo $body;
    }

    // inputIsComplete validates that all inputs are filled out
    private function inputIsComplete($inputs) {
        $errors = [];
        foreach ($inputs as $key => $value) {
            if (empty($value) || !isset($value)) {
                $errors[] = "Missing " . $key;
            }
        }

        if (!empty($errors)) {
            $this->inputErrors = $errors;
            return false;
        }

        unset($this->inputErrors);
        return true;
    }

    // execute executes the database command
    public function execute() {
        if (!$this->inputIsComplete($this->inputs)) {
            return $this->displayInputErrors($this->inputErrors);
        }

        $this->writeToCSV($this->inputs);
        $this->displayInput($this->inputs);
    }
}
?>
