<?php
use App\AbstractQuery;

require_once '../AbstractQuery.php';

// Subforum_Index queries the DB for all threads within a subforum
class Subforum_Index extends AbstractQuery {
    protected function filter($params) {
        return $params["forum_id_FK"] == $_GET['id'] || $params["thread_id_PK"] == 'header' || $params["forum_id_FK"] == 'header';
    }
}

if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['id'])) {
    $query = new Subforum_Index("Threads");
    $query->setFilter();
    $query->execute();
}

?>
