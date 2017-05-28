<?php
use App\AbstractQuery;

require_once 'AbstractQuery.php';

// Thread_Posts queries the DB for all posts within a thread
class Thread_Posts extends AbstractQuery {
    protected function filter($params) {
        return $params["thread_id_FK"] == $_GET['id'];
    }
}

if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['id'])) {
    $query = new Thread_Posts("Posts");
    $query->setFilter();
    $query->execute();
}

?>
