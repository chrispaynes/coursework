<?php
use App\AbstractCommand;

require_once __DIR__ . '/AbstractCommand.php';

// Registration commands the DB to store a post
class Post extends AbstractCommand {
    private $thread_id = '';
    private $body = '';
    private $author = '';
    private $timestamp = '';
    protected $inputs = [];

    // setInputs defines all necessary user inputs
    protected function setInputs() {
        $this->inputs = [
            "ThreadId" => $this->thread_id,
            "Body" => $this->body,
            "Author" => $this->author,
            "Timestamp" => $this->timestamp,
        ];
    }

    public function setThreadId($arg) {
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
        $this->setThreadId(AbstractCommand::sanitizeInput($_POST["thread_id"]));
        $this->setBody(AbstractCommand::sanitizeInput($_POST["body"]));
        $this->setAuthor(AbstractCommand::sanitizeInput($_POST["uname"]));
        $this->setTimestamp(AbstractCommand::sanitizeInput($_POST["timestamp"]));
        $this->setInputs();
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["post"])) {
    $command = new NewThread("Posts");
    $command->sanitize();
    $command->execute();
}

?>
