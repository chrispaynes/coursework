<?php
use App\AbstractQuery;

require_once 'AbstractQuery.php';

// Most_Recent_Post queries the DB for the most recently published post
class Most_Recent_Post extends AbstractQuery {
    protected function filter($params = []) {
        return $params["post_timestamp"] == $_GET['date'];
    }
}

if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['date'])) {
    $query = new Most_Recent_Post("Posts");
    $query->setFilter();
    $query->execute();
}

?>
