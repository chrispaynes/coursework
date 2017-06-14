<?php
use App\AbstractCommand;

require_once __DIR__ . '/AbstractCommand.php';

// Login commands the DB to log the user in using little to no security checks
class Login extends AbstractCommand {
    private $username = '';
    private $user_id = 0;
    private $password = '';
    protected $inputs = [];

    // setInputs defines all necessary user inputs
    protected function setInputs($destination = '') {
        $this->inputs = [
            'user_id_PK' => $this->user_id,
            'user_username' => $this->username,
            'user_password' => $this->password,
        ];
    }

    public function setUsername($arg = '') {
        $this->username = $arg;
    }
    public function setPassword($arg = '') {
        $this->password = $arg;
    }

    public function sanitize() {
        $this->setUsername(AbstractCommand::sanitizeInput($_POST['uname']));
        $this->setPassword(AbstractCommand::sanitizeInput($_POST['pwd']));
        $this->setInputs('Users');
    }

    public function clearUsername() {
        setcookie('user_id', '', time() - 3600, '/');
        setcookie('username', '', time() - 3600, '/');
    }

    public function storeUsername() {
        $match = file_get_contents("http://sotd.us/dwightpaynes/forum/data/queries/User.php?user=" . $_POST['uname']);
        $raw_resp = explode(',', trim($match));
        $user_id = (int) substr(strpbrk($raw_resp[0], ':'), 1);
        $clean_resp = substr(strpbrk($raw_resp[2], ':'), 1);
        $hashed_pwd = sha1(trim(substr($clean_resp, 0, strrpos($clean_resp, '"')), '"'));

        if ($hashed_pwd === $_POST['pwd']) {
            setcookie('user_id', $user_id, time() + 31536000, '/');
            setcookie('username', $this->username, time() + 31536000, '/');
        }
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['login'])) {
    $command = new Login('Users');
    $command->clearUsername();
    $command->sanitize('Users');
    $command->storeUsername();

    header('Location: http://sotd.us/dwightpaynes/forum/');
    die();
}

?>
