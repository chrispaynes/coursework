<?php
use App\AbstractCommand;

require_once 'AbstractCommand.php';

// Registration commands the DB to store a new user
class Registration extends AbstractCommand {
    private $username = '';
    private $password = '';
    private $firstname = '';
    private $lastname = '';
    private $email = '';
    protected $inputs = [];

    // setInputs defines all necessary user inputs
    protected function setInputs() {
        $this->inputs = [
            "Username" => $this->username,
            "Password" => $this->password,
            "Firstname" => $this->firstname,
            "Lastname" => $this->lastname,
            "Email" => $this->email,
        ];
    }

    public function setUsername($arg) {
        $this->username = $arg;
    }
    public function setPassword($arg) {
        $this->password = $arg;
    }
    public function setFirstname($arg) {
        $this->firstname = $arg;
    }
    public function setLastname($arg) {
        $this->lastname = $arg;
    }
    public function setEmail($arg) {
        $this->email = $arg;
    }

    public function sanitize() {
        $this->setUsername(AbstractCommand::sanitizeInput($_POST["uname"]));
        // @todo: Hash password for security
        $this->setPassword(AbstractCommand::sanitizeInput($_POST["pwd"]));
        $this->setFirstname(AbstractCommand::sanitizeInput($_POST["fname"]));
        $this->setLastname(AbstractCommand::sanitizeInput($_POST["lname"]));
        $this->setEmail(AbstractCommand::sanitizeInput($_POST["email"]));
        $this->setInputs();
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["register"])) {
    $command = new Registration("Users");
    $command->sanitize();
    $command->execute();
}

?>
