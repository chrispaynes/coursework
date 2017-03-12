<?php
// Validate the submitted data:
$Body = "";
$errors = 0;
$InternID = 0;

if (isset($_GET['internID'])) {
  $InternID = $_GET['internID'];
} else {
  $Body .= "<p>You have not logged in or registered. "
    . " <a href='InternLogin.php'>Registration / Log In Page</a>.</p>";
  ++$errors;
}
if ($errors == 0) {
  if (isset($_GET['opportunityID'])) {
    $OpportunityID = $_GET['opportunityID'];
  } else {
    $Body .= "<p>You have not selected an opportunity. "
      . "Please return to the "
      . " <a href='AvailableOpportunities.php?"
      . "internID=$InternID'>Available "
      . " Opportunities page</a>.</p>";
    ++$errors;
  }
}

// Connect to the internships database server.
if ($errors == 0) {
  $DBConnect = @mysql_connect("host", "user", "password");

  if ($DBConnect === FALSE) {
    echo "<p>Unable to connect to the database server."
    . "Error code "
    . mysql_errno() . ": "
    . mysql_error() . "</p>\n";
    ++$errors;
  } else {
    $DBName = "internships";
    $result = @mysql_select_db($DBName, $DBConnect);

    if ($result === FALSE) {
      echo "<p>Unable to select the database. "
      . "Error code "
      . mysql_errno() . ": "
      . mysql_error($DBConnect) . "</p>\n";
      ++$errors;
    }
  }
}

// Add the following statements to the end of the script section to mark the opportunity as selected in the assigned_opportunities table and close the database connection. The date() function is used to return the current date and time as a formatted string. For the $DisplayDate variable, the format string "l, F j, Y, g:i A" creates a date string in a user-friendly format; the day of the week, the month name, and the day and year are followed by the time as hours and minutes AM or PM. For the $DatabaseDate variable, the format string "Y-m-d H:i:s" creates a date string in the format MySQL uses: “yyyy-mo-dd hh:mi:ss”, where yyyy is a four-digit year, mo is a two-digit month, dd is a twodigit day of the month, hh is a two-digit number indicating the hours since midnight, mi is a two-digit minute, and ss is a two-digit second.
$DisplayDate = date("l, F j, Y, g:i A");
$DatabaseDate = date("Y-m-d H:i:s");

if ($errors == 0) {
  $TableName = "assigned_opportunities";
  $SQLstring = "INSERT INTO $TableName (opportunityID, internID, date_selected) VALUES ($OpportunityID, $InternID, '$DatabaseDate')";
  $QueryResult = @mysql_query($SQLstring, $DBConnect);

  if ($QueryResult === FALSE) {
    echo "<p>Unable to execute the query. "
    . "Error Code "
    . mysql_errno($DBConnect) . ": "
    . mysql_error($DBConnect) . "</p>\n";
    ++$errors;
  } else {
    $Body . +"<p>Your request for opportunity # "
      . " $OpportunityID has been entered "
      . " on $DisplayDate.</p>\n";
  }
  mysql_close($DBConnect);
}

// Adds a link back to the Available Opportunities page.
if ($InternID > 0) {
  $Body .= "<p>Return to the <a href='"
    . "AvailableOpportunities.php?internID=$InternID'>"
    . "Available Opportunities</a> page.</p>\n";
} else {
  $Body .= "<p>Please <a href='InternLogin.php'>Register " . " or Log In</a> to use this page.</p>\n";
}

// Create a persistent cookie.
if ($errors == 0) {
  setcookie("LastRequestDate", urlencode($DisplayDate), time() + 60 * 60 * 24 * 7);
}

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">

  <head>
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <title></title>
  </head>

  <body>
<h1>College Internship</h1>
<h2>Opportunity Requested</h2>
<?php
echo $Body;
?>
  </body>

</html>
