<?php
use App\AbstractQuery;
use App\QueryFilter;

require_once __DIR__ . '/AbstractQuery.php';
require_once __DIR__ . '/QueryFilter.php';

// User queries the DB for all registered forum users
class User extends AbstractQuery {
    protected function filter($params) {
        $qf = new QueryFilter($params);

        return $qf->execute();
    }
}

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $query = new User("Users");

    // filter the data if there are url params are present
    if (count($_GET) > 0) {
        $query->enableFilter();
    }

    $query->execute();
}

?>

