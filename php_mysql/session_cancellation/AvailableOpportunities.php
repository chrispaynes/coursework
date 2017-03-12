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
    <h1>College Internship</h1>
    <h2>Available Opportunities</h2>

<?php
// Retrieves the Intern ID submitted in the hidden form field.
if (isset($_REQUEST['internID'])) {
  $InternID = $_REQUEST['internID'];
} else {
  $InternID = -1;
}

// Connect to the internships database server.
$errors = 0;
$DBConnect = @mysql_connect("127.0.0.1", "MY USERNAME", "MY USERNAME PASSWORD");

if ($DBConnect === FALSE) {
  echo "<p>Unable to connect to the database server. "
  . "error code "
  . mysql_errno() . ": "
  . mysql_errno() . "</p>\n";
  ++$errors;
} else {
  $DBName = "internships";
  $result = @mysql_select_db($DBName, $DBConnect);

  if ($result === FALSE) {
    echo "<p>Unable to select the database. "
    . "Error code "
    . mysql_errno($DBConnect) . ": "
    . mysql_error($DBConnect) . "</p>\n";
    ++$errors;
  }
}

// Retrieve the user’s information from the interns table.
$TableName = "interns";
if ($errors == 0) {

  $SQLstring = "SELECT * FROM $TableName WHERE "
    . " internID='$InternID'";
  $QueryResult = @mysql_query($SQLstring, $DBConnect);

  if ($QueryResult === FALSE) {
    echo "<p>Unable to execute the query. "
    . "Error Code "
    . mysql_errno($DBConnect) . ": "
    . mysql_error($DBConnect) . "</p>\n";
    ++$errors;
  } else {
    if (mysql_num_rows($QueryResult) == 0) {
      echo "<p>Invalid Intern ID!</p>";
      ++$errors;
    }
  }
}

// Retrieve the user's fullname:
if ($errors == 0) {
  $Row = mysql_fetch_assoc($QueryResult);
  $InternName = $Row['first'] . " " . $Row['last'];
} else {
  $InternName = "";
}

// Checks assigned_opportunities table to see if the current intern ID is approved for an internship.
$TableName = "assigned_opportunities";
$ApprovedOpportunities = 0;
$SQLstring = "SELECT COUNT(opportunityID) FROM $TableName "
  . " WHERE internID='$InternID' "
  . " AND date_approved IS NOT NULL";
$QueryResult = @mysql_query($SQLstring, $DBConnect);

if (mysql_num_rows($QueryResult) > 0) {
  $Row = mysql_fetch_row($QueryResult);
  $ApprovedOpportunities = $Row[0];
  mysql_free_result($QueryResult);
}

// Retrieves opportunity IDs from the assigned_opportunities table that has been selected for the current intern ID.
$SelectedOpportunities = array();
$SQLstring = "SELECT opportunityID FROM $TableName "
  . " WHERE internID='$InternID'";
$QueryResult = @mysql_query($SQLstring, $DBConnect);
if (mysql_num_rows($QueryResult) > 0) {
  while (($Row = @mysql_fetch_row($QueryResult)) !== FALSE) {
    $SelectedOpportunities[] = $Row[0];
  }
  // Free the data retrieved by the query.
  mysql_free_result($QueryResult);

}

// Retrieves opportunity IDs from the assigned_opportunities table that are approved for any intern ID.
// Opportunities that are approved are no longer available for selection.
$AssignedOpportunities = array();
$SQLstring = "SELECT opportunityID FROM $TableName "
  . " WHERE date_approved IS NOT NULL";
$QueryResult = @mysql_query($SQLstring, $DBConnect);

if (mysql_num_rows($QueryResult) > 0) {
  while (($Row = mysql_fetch_row($QueryResult)) !== FALSE) {
    $AssignedOpportunities[] = $Row[0];
  }
  mysql_free_result($QueryResult);
}

// Retrieves opportunity IDs from the assigned_opportunities table that has been approved for any intern ID.
$TableName = "opportunities";
$Opportunities = array();
$SQLstring = "SELECT opportunityID, company, city,"
  . " start_date, end_date, position, description"
  . " FROM $TableName";
$QueryResult = @mysql_query($SQLstring, $DBConnect);

if (mysql_num_rows($QueryResult) > 0) {
  while (($Row = mysql_fetch_assoc($QueryResult)) !== FALSE) {
    $Opportunities[] = $Row;
  }
  mysql_free_result($QueryResult);

}

mysql_close($DBConnect);

// Build a table of the available opportunities.
echo "<table border='1' width='100%'>\n";
echo "<tr>\n";
echo "<th style='background-color:cyan'>Company</th>\n";
echo "<th style='background-color:cyan'>City</th>\n";
echo "<th style='background-color:cyan'>Start Date</th>\n";
echo "<th style='background-color:cyan'>End Date</th>\n";
echo "<th style='background-color:cyan'>Position</th>\n";
echo "<th style='background-color:cyan'>Description</th>\n";
echo "<th style='background-color:cyan'>Status</th>\n";
echo "</tr>\n";

foreach ($Opportunities as $Opportunity):
  if (!in_array($Opportunity['opportunityID'], $AssignedOpportunities)) {
    echo "<tr>\n";
    echo "  <td>" . htmlentities($Opportunity['company']) . "</td>";
    echo "  <td>" . htmlentities($Opportunity['city']) . "</td>";
    echo "  <td>" . htmlentities($Opportunity['start_date']) . "</td>";
    echo "  <td>" . htmlentities($Opportunity['end_date']) . "</td>";
    echo "  <td>" . htmlentities($Opportunity['position']) . "</td>";
    echo "  <td>" . htmlentities($Opportunity['description']) . "</td>";
    echo "<td>";
    if (in_array($Opportunity['opportunityID'], $SelectedOpportunities)) {
      echo "Selected<br />" .
        "<a href='CancelSelection.php?internID=$InternID" . "&opportunityID=" . $Opportunity['opportunityID'] . "'>Cancel Selection</a>";
    } else {
      if ($ApprovedOpportunities > 0) {
        echo "Open";
      } else {
        echo "<a href='RequestOpportunity.php?internID=$InternID&opportunityID=" . $Opportunity['opportunityID'] . "'>Available</a>";
      }
    }
    echo "</td>\n";
    echo "</tr>\n";
  }
endforeach;

echo "</table>\n";
echo "<p><a href='InternLogin.php'>Log Out</a></p>\n";

?>
  </body>

</html>
