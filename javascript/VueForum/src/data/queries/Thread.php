<?php
use App\AbstractQuery;

require_once __DIR__ . '/AbstractQuery.php';

// Thread_Posts queries the DB for all posts within a thread
class Thread_Posts extends AbstractQuery {
    protected function filter($params = []) {
        if (isset($_GET['thread'])) {
            if (is_numeric($_GET["thread"])) {
                return $params['post_thread_id'] == $_GET['thread'];
            }
            if (!is_numeric($_GET["thread"])) {
                return strtolower($params['thread_name']) == strtolower($_GET['thread']);
            }
        }
        return false;
    }
}

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $DBquery = new Thread_Posts('Posts');

    // filter the data if there are url params are present
    if (count($_GET) > 0) {
        $DBquery->enableFilter();
    }

    $DBquery->execute();
}

?>
