<?php
use App\AbstractQuery;
use App\QueryFilter;

require_once __DIR__ . '/AbstractQuery.php';
require_once __DIR__ . '/QueryFilter.php';

// Post queries the DB for the most recently published post
class Post extends AbstractQuery {
    protected function filter($params = []) {
        $qf = new QueryFilter($params);

        return $qf->execute();
    }
}

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $DBquery = new Post('Posts');

    // filter the data if there are url params are present
    if (count($_GET) > 0) {
        $DBquery->enableFilter();
    }

    $DBquery->execute();
}

?>
