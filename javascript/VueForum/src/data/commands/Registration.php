<?php
use App\AbstractCommand;

require_once __DIR__ . '/AbstractCommand.php';

// Registration commands the DB to store a new user
class Registration extends AbstractCommand {
    private $nextPK = 0;
    private $username = '';
    private $password = '';
    private $firstname = '';
    private $lastname = '';
    private $email = '';
    private $is_admin = 'false';
    protected $inputs = [];

    // setInputs defines all necessary user inputs
    protected function setInputs() {
        $this->inputs = [
            "user_id_PK" => $this->nextPK,
            "user_username" => $this->username,
            "user_password" => $this->password,
            "user_firstname" => $this->firstname,
            "user_lastname" => $this->lastname,
            "user_email" => $this->email,
            "user_is_admin" => $this->is_admin,
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

    // setNextPrimaryKey counts the rows in a table and uses the count to determine the next PK
    public function setNextPrimaryKey() {
        $c = 0;
        $db_table = fopen(__ROOT__ . "/database/UsersDB.csv", "r");
        if ($db_table) {
            while (!feof($db_table)) {
                $content = fgets($db_table);
                if ($content) {
                    $c++;
                }
            }
        }
        fclose($db_table);
        $this->nextPK = $c - 1;
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

    public function storeUsername() {
        setcookie("user_id", $this->nextPK, time() + 31536000, "/");
        setcookie("username", $this->username, time() + 31536000, "/");
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["register"])) {
    $command = new Registration("Users");
    $command->setNextPrimaryKey();
    $command->sanitize();
    $command->execute();
    $command->storeUsername();

    header("Location: http://localhost/dev/VueForum/dist/");
    die();
}

?>
