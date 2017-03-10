<!DOCTYPE html>
<html lang="en">
<head>
  <meta content="text/html charset=UTF-8" http-equiv="Content-Type">
  <title></title>
</head>
<body>

<h1>College Internships</h1>
<h2>Verify Intern Login</h2>

<?php
// Connect to the internships database server.
$errors = 0;
$DBConnect = @mysql_connect("host", "user", "password");

if ($DBConnect === FALSE) {
  echo "<p>Unable to connect to the database server."
  . "Error code " . mysql_errno() . ": " .
  mysql_error() . "</p>\n";
  ++$errors;
} else {
  $DBName = "internships";
  $result = @mysql_select_db($DBName, $DBConnect);
  if ($result === FALSE) {
    echo "<p>Unable to select the database. "
    . "Error code " . mysql_errno() . ": " . mysql_error($DBConnect) . "</p>\n";
    ++$errors;
  }
}

// Verify that the e-mail address and password entered are in the interns table.
$TableName = "interns";
if ($errors == 0) {
  $SQLstring = "SELECT internID, first, last FROM $TableName"
  . " where email='" . stripslashes($_POST['email'])
  . "' and password_md5='"
  . md5(stripslashes($_POST['password'])) . "'";
  $QueryResult = @mysql_query($SQLstring, $DBConnect);
  if (mysql_num_rows($QueryResult) == 0) {
    echo "<p>The e-mail address/password "
      . "combination entered is not valid.</p>\n";
    ++$errors;
  } else {
    $Row = mysql_fetch_assoc($QueryResult);
    $InternID = $Row['internID'];
    $InternName = $Row['first'] . " " . $Row['last'];
    echo "<p>Welcome back, $InternName!</p>\n";
  }
}

// Show the error message.
if ($errors > 0) {
  echo "<p>Please use your browser's BACK button to return "
    . " to the form and fix the errors indicated.</p>\n";
}

// Include the form with the hidden field if there were no errors.
if ($errors == 0) {
  echo "<form method='post' action='AvailableOpportunities.php'>\n";
  echo "<input type='hidden' name='internID' value='$InternID'>\n";
  echo "<input type='submit' name='submit' value='View Available Opportunities'>\n";
  echo "</form>";
}
?>
</body>
</html>