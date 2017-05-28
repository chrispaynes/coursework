<?php
use App\AbstractQuery;

require_once 'AbstractQuery.php';

// Forum_Index queries the DB for all subforums
class Forum_Index extends AbstractQuery {
    protected function filter($params) {
        return "";
    }
}
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $query = new Forum_Index("Subforums");
    $query->execute();
}
?>
