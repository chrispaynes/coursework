<?php
use App\AbstractCommand;

require_once __DIR__ . '/AbstractCommand.php';

// Registration commands the DB to store a new thread
class NewThread extends AbstractCommand {
    private $nextPostPK = 0;
    private $nextThreadPK = 0;
    private $title = '';
    private $body = '';
    private $author = '';
    private $timestamp = '';
    protected $inputs = [];

    // setInputs defines all necessary user inputs
    protected function setInputs() {
        $this->inputs = [
            'Title' => $this->title,
            'Author' => $this->author,
            'post_id_PK' => $this->nextPostPK,
            'post_thread_id' => $this->nextThreadPK,
            'post_author_id' => $this->post_author_id,
            'post_body' => $this->post_body,
            'post_is_reply' => false,
            'post_last_updated' => $this->timestamp,
        ];
    }

// THREAD DB
    // thread_id_PK, thread_name,

// POSTS DB
    // post_id_PK,post_thread_id,post_author_id,post_body,post_is_reply,post_last_updated
    //

    // setNextPrimaryKey counts the rows in a table and uses the count to determine the next PK
    public function setNextPrimaryKey($db, $fk) {
        $c = 0;
        $db_table = fopen(__ROOT__ . '/database/' . $db . '.csv', 'r');
        if ($db_table) {
            while (!feof($db_table)) {
                $content = fgets($db_table);
                if ($content) {
                    $c++;
                }
            }
        }
        fclose($db_table);
        $fk = $c - 1;
    }

    public function setTitle($arg) {
        $this->title = $arg;
    }
    public function setBody($arg) {
        $this->body = $arg;
    }
    public function setAuthor($arg) {
        $this->author = $arg;
    }
    public function setTimestamp($arg) {
        $this->timestamp = $arg;
    }

    public function sanitize() {
        $this->setTitle(AbstractCommand::sanitizeInput($_POST['title']));
        $this->setBody(AbstractCommand::sanitizeInput($_POST['body']));
        $this->setAuthor(AbstractCommand::sanitizeInput($_POST['username']));
        $this->setAuthorId(AbstractCommand::sanitizeInput($_POST['user_id']));
        $this->setTimestamp(AbstractCommand::sanitizeInput($_POST['timestamp']));
        $this->setInputs();
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['new_thread'])) {
    $command = new NewThread('Threads');
    $command->setNextPrimaryKey('Users', $this->nextPostPK);
    $command->setNextPrimaryKey('Threads', $this->nextThreadPK);
    $command->sanitize();
    $command->execute();
}

?>
