<?php
use App\AbstractQuery;

require_once 'AbstractQuery.php';

// Most_Recent_Post queries the DB for the most recently published post
class Most_Recent_Post extends AbstractQuery {
    protected function filter($params = []) {
        if (isset($_GET["author"])) {
            if (is_numeric($_GET["author"])) {
                return $params['post_author_id'] == $_GET['author'];
            }
            if (!is_numeric($_GET["author"])) {
                return strtolower($params['author_username']) == strtolower($_GET['author']);
            }
        }
        return true;
    }
}

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $DBquery = new Most_Recent_Post('Posts');

    if (count($_GET) > 0) {
        $DBquery->setFilter();
    }

    $DBquery->execute();
}

?>
