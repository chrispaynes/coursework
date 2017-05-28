<?php
use App\AbstractCommand;

require_once 'AbstractCommand.php';

// Registration commands the DB to store a new thread
class NewThread extends AbstractCommand {
    private $title = '';
    private $body = '';
    private $author = '';
    private $timestamp = '';
    protected $inputs = [];

    // setInputs defines all necessary user inputs
    protected function setInputs() {
        $this->inputs = [
            "Title" => $this->title,
            "Body" => $this->body,
            "Author" => $this->author,
            "Timestamp" => $this->timestamp,
        ];
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
        $this->setTitle(AbstractCommand::sanitizeInput($_POST["title"]));
        $this->setBody(AbstractCommand::sanitizeInput($_POST["body"]));
        $this->setAuthor(AbstractCommand::sanitizeInput($_POST["uname"]));
        $this->setTimestamp(AbstractCommand::sanitizeInput($_POST["timestamp"]));
        $this->setInputs();
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["new_thread"])) {
    $command = new NewThread("Threads");
    $command->sanitize();
    $command->execute();
}

?>
