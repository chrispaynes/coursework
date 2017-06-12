<?php
namespace App;

class QueryFilter {
    private $query_params = [''];
    private $filterable = [''];

    // __construct the QueryFilter
    public function __construct($filterable_data = ['']) {
        $this->setQueryParams();
        $this->filterable = $filterable_data;
    }

    // setQueryParams stores URL's query parameters
    private function setQueryParams() {
        parse_str($_SERVER['QUERY_STRING'], $this->query_params);
    }

    // getQueryParams returns an associative array of query params
    public function getQueryParams() {
        return $this->query_params;
    }

    private function filter_by_author() {
        $param_filter = $this->query_params['author'];

        if (is_numeric($param_filter)) {
            return $this->filterable['post_author_id'] === $param_filter;
        }
        if (!is_numeric($param_filter)) {
            return strtolower($this->filterable['author_username']) == strtolower($param_filter);
        }

        return false;
    }

    private function filter_by_post() {
        $param_filter = $this->query_params['post'];

        if (is_numeric($param_filter)) {
            return $this->filterable['post_id_PK'] === $param_filter;
        }

        return false;
    }

    private function filter_by_thread() {
        $param_filter = $this->query_params['thread'];

        if (is_numeric($param_filter)) {
            return $this->filterable['post_thread_id'] === $param_filter;
        }

        if (!is_numeric($param_filter)) {
            print_r($this->filterable['thread_name']);
            return strtolower($this->filterable['thread_name']) == strtolower($param_filter);
        }

        return false;
    }

    private function filter_by_user() {
        $param_filter = $this->query_params['user'];

        if (is_numeric($param_filter)) {
            return $this->filterable['user_id_PK'] === $param_filter;
        }

        if (!is_numeric($param_filter)) {
            return strtolower($this->filterable['user_username']) === strtolower(($param_filter));
        }
    }

    public function execute() {

        if (isset($this->query_params['post'])) {
            return $this->filter_by_post();
        }

        if (isset($this->query_params['author'])) {
            return $this->filter_by_author();
        }

        if (isset($this->query_params['thread'])) {
            return $this->filter_by_thread();
        }

        if (isset($this->query_params['user'])) {
            return $this->filter_by_user();
        }

        return false;
    }
}
?>
