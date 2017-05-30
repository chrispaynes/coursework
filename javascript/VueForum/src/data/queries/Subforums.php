<?php
use App\AbstractQuery;

require_once 'AbstractQuery.php';

// Subforum_Index queries the DB for all threads within a subforum
class Subforum_Index extends AbstractQuery {
    protected function filter($params = []) {
        if (isset($_GET['id'])) {
            return $params["subforum_id_PK"] === $_GET['id'] || $params["subforum_id_PK"] == 'header';
        }
        if (isset($_GET['name'])) {
            return strtolower($params["subforumName"]) == strtolower($_GET['username']) || $params["subforum_id_PK"] == 'header';
        }
        return $params;
    }
}

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $query = new Subforum_Index("Threads");

    // filter if there are url filter params
    if (count($_GET) > 0) {
        $query->setFilter();
    }

    $query->execute();
}

?>
