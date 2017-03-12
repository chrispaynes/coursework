<?php
session_start();
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">

  <head>
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <title></title>
  </head>
<body>

  <h1>College Internships</h1>
  <h2>Register / Log In</h2>
  <p>New interns, please complete the top form to register as a user. Returning users, please complete the second form to log in.</p>
  <hr />

  <!-- Form to allow new interns to register for an intern ID -->
  <h3>New Intern Registration</h3>
  <form action="RegisterIntern.php?<?php echo SID; ?>" method="post">
    <p>Enter your name: First <input name="first" type="text"> Last: <input name="last" type="text"></p>
    <p>Enter your e-mail address: <input name="email" type="text"></p>
    <p>Enter a password for your account: <input name="password" type="password"></p>
    <p>Conform your password: <input name="password2" type="password"></p>
    <p><em>(Passwords are case-sensitive and must be a least 6 characters long)</em></p><input name="reset" type="reset" value="Reset Registration Form"> <input name="register" type="submit" value="Register">
  </form>
  <hr />

  <!-- Allow returning users to log in -->
  <h3>Returning Intern Login</h3>
  <form action="VerifyLogin.php?<?php echo SID; ?>" method="post">
    <p>Enter your e-mail address: <input name="email" type="text"></p>
    <p>Enter your password: <input name="password" type="password"></p>
    <p><em>(Passwords are case-sensitive and must be a least 6 characters long)</em></p><input name="reset" type="reset" value="Reset Login Form"> <input name="login" type="submit" value="Log In">
  </form>
  <hr />
</body>
</html>