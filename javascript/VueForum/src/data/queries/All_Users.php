<?php
use App\AbstractQuery;

require_once 'AbstractQuery.php';

// All_Users queries the DB for all registered forum users
class All_Users extends AbstractQuery {
    protected function filter($params) {
        return "";
    }
}

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $query = new All_Users("Users");
    $query->execute();
}

?>
