<?php
use App\AbstractQuery;

require_once 'AbstractQuery.php';

// User queries the DB for all registered forum users
class User extends AbstractQuery {

    protected function filter($params) {
        $_GET = filter_input_array(INPUT_GET, FILTER_SANITIZE_STRING);
        if (isset($_GET['id'])) {
            return $params["user_id_PK"] === $_GET['id'];
        }
        if (isset($_GET['username'])) {
            return strtolower($params["user_username"]) == strtolower($_GET['username']);
        }
        return true;
    }
}

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $query = new User("UserDB");

    // filter if there are url filter params
    if (count($_GET) > 0) {
        $query->setFilter();
    }
    $query->execute();
}

?>

