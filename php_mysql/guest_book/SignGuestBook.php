<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">

  <head>
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <title>GuestBook</title>
  </head>

  <body>
<?php
// Ensure first and last names are filled out.
if (empty($_POST['first_name']) || empty($_POST['last_name'])) {
  echo "<p>You must enter your first and last name! Click your browser's Back button to return to the Guest Book form.</p>";
} else {
  // Connect to the database or create one if it doesn't exist.
  $DBConnect = @mysql_connect("127.0.0.1", "USER", "USER_PASSWORD");

  if ($DBConnect === FALSE) {
    echo "<p>Unable to connect to the database server.</p>"
    . "<p>Error code" . mysql_errno()
    . ": " . mysql_error() . "</p>";
  } else {
    $DBName = "guestbook";

    if (!@mysql_select_db($DBName, $DBConnect)) {
      $SQLstring = "CREATE DATABASE $DBName";
      $QueryResult = @mysql_query($SQLstring, $DBConnect);

      // TODO: Extract out into a function with an error message argument
      if ($QueryResult === FALSE) {
        echo "<p>Unable to execute the query.</p>"
        . "<p> Error code " . mysql_error($DBConnect)
        . ": " . mysql_error($DBConnect)
          . "</p>";
      } else {
        echo "<p>You are the first visitor!</p>";
      }
    }
    mysql_select_db($DBName, $DBConnect);

    // create a table named visitors if it does not already exist.
    $TableName = "visitors";
    $SQLstring = "SHOW TABLES LIKE '$TableName'";
    $QueryResult = @mysql_query($SQLstring, $DBConnect);

    if (mysql_num_rows($QueryResult) == 0) {
      $SQLstring = "CREATE TABLE $TableName(countID SMALLINT NOT NULL AUTO_INCREMENT PRIMARY KEY,"
        . "last_name VARCHAR(40), first_name VARCHAR(40))";
      $QueryResult = @mysql_query($SQLstring, $DBConnect);

      // TODO: Extract out into a function with an error message argument
      if ($QueryResult === FALSE) {
        echo "<p>Unable to create the table.</p>"
        . "<p>Error code " . mysql_errno($DBConnect)
        . ": " . mysql_errno($DBConnect) . "</p>";
      }
    }

    // Add visitor to the database.
    $LastName = stripslashes($_POST['last_name']);
    $FirstName = stripslashes($_POST['first_name']);
    $SQLstring = "INSERT INTO $TableName VALUES(NULL, '$LastName', '$FirstName')";
    $QueryResult = @mysql_query($SQLstring, $DBConnect);

    // TODO: Extract out into a function with an error message argument
    if ($QueryResult === FALSE) {
      echo "<p>Unable to execute the query.</p>"
      . "<p> Error code " . mysql_error($DBConnect)
      . ": " . mysql_error($DBConnect)
        . "</p>";
    } else {
      echo "<h1>Thank you for signing our guest book!</h1>";
    }

    // Close the database connection.
    mysql_close($DBConnect);
  }
}
?>

  </body>

</html>
