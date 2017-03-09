<?php
session_start();

// verify correct session info is sent to the page.
$Body = "";
$errors = 0;
if (!isset($_SESSION['internID'])) {
  $Body .= "<p>You have not logged in or registered. Please return to the "
    . "<a href='InternLogin.php'>Registration / Log In page</a>.</p>\n";
  ++$errors;
}
if ($errors == 0) {
  if (isset($_GET['opportunityID'])) {
    $OpportunityID = $_GET['opportunityID'];
  } else {
    $Body .= "You have not selected an opportunity. "
      . " Please return to the " .
      " <a href='AvailableOpportunities.php?'" . SID . "'>Available " .
      " Opportunities page</a>.</p>\n";
    ++$errors;
  }
}

// connect to the internship database
if ($errors == 0) {
  $DBConnect = @mysql_connect("127.0.0.1", "INSERT_USER", "INSERT_PASSWORD");
  if ($DBConnect === FALSE) {
    $Body .= "<p>Unable to connect to the database server. "
    . "error code " . mysql_errno() . ": " .
    mysql_errno() . "</p>\n";
    ++$errors;
  }
} else {
  $DBName = "internships";
  $result = @mysql_select_db($DBName, $DBConnect);
}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">

  <head>
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <title>Cancel Selection</title>
  </head>

  <body>
<h1>College Internship</h1>
<h2>Cancel Selection</h2>
<?php
echo $Body;
?>

  </body>

</html>
