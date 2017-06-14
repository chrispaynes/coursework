<?php
use App\AbstractCommand;

require_once __DIR__ . '/AbstractCommand.php';

// Registration commands the DB to store a new thread
class NewThread extends AbstractCommand {
    private $nextPostPK = 0;
    private $nextThreadPK = 0;
    private $title = '';
    private $post_body = '';
    private $author = '';
    private $post_author_id = 0;
    private $post_is_reply = false;
    private $timestamp = '';
    protected $inputs = [];

    // setInputs defines all necessary user inputs
    protected function setInputs($destination = '') {
        if ($destination == 'Posts') {
            $this->inputs = [
                'post_id_PK' => $this->nextPostPK,
                'post_thread_id' => $this->nextThreadPK,
                'post_author_id' => $this->post_author_id,
                'post_body' => $this->post_body,
                'post_is_reply' => 'false',
                'post_last_updated' => $this->timestamp,
            ];
        }

        if ($destination == 'Threads') {
            $this->inputs = [
                'thread_id_PK' => $this->nextThreadPK,
                'thread_name' => $this->title,
            ];
        }
    }

    // setNextPrimaryKey counts the rows in a table and uses the count to determine the next PK
    private function setNextPrimaryKey($db = '') {
        $c = 0;
        $db_table = fopen(__ROOT__ . '/database/' . $db . 'DB.csv', 'r');
        if ($db_table) {
            while (!feof($db_table)) {
                $content = fgets($db_table);
                if ($content) {
                    $c++;
                }
            }
        }
        fclose($db_table);
        return $c - 1;
    }

    private function setTitle($arg = '') {
        $this->title = $arg;
    }

    private function setBody($arg = '') {
        $this->post_body = $arg;
    }

    private function setAuthor($arg = '') {
        $this->author = $arg;
    }

    private function setAuthorId($arg = 0) {
        $this->post_author_id = $arg;
    }

    private function setTimestamp($arg = '') {
        $this->timestamp = $arg;
    }

    public function setNextPostPK() {
        $this->nextPostPK = $this->setNextPrimaryKey('Users');
    }

    public function setNextThreadPK() {
        $this->nextThreadPK = $this->setNextPrimaryKey('Threads');
    }

    public function sanitize($destination = '') {
        if ($destination === 'Posts') {
            $this->setTitle(AbstractCommand::sanitizeInput($_POST['title']));
            $this->setBody(AbstractCommand::sanitizeInput($_POST['body']));
            $this->setAuthor(AbstractCommand::sanitizeInput($_POST['username']));
            $this->setAuthorId(AbstractCommand::sanitizeInput($_POST['user_id']));
            $this->setTimestamp(AbstractCommand::sanitizeInput($_POST['timestamp']));
            $this->setInputs($destination);
        }

        if ($destination === 'Threads') {
            $this->setTitle(AbstractCommand::sanitizeInput($_POST['title']));
            $this->setInputs($destination);
        }
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['new_thread'])) {
    $PostsCommand = new NewThread('Posts');
    $PostsCommand->setNextPostPK();
    $PostsCommand->setNextThreadPK();
    $PostsCommand->sanitize('Posts');
    $PostsCommand->execute();

    $ThreadsCommand = new NewThread('Threads');
    $ThreadsCommand->setNextThreadPK();
    $ThreadsCommand->sanitize('Threads');
    $ThreadsCommand->execute();

    header('Location: http://sotd.us/dwightpaynes/forum/');
    die();
}

?>
