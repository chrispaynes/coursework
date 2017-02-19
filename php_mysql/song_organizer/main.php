<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">

  <head>
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <title>Song Organizer</title>
  </head>

  <body>
  <h1>Song Organizer</h1>

      <?php

define("SONGPATH", "SongOrganizer/songs.txt");

if (isset($_GET['action'])) {
  if ((file_exists(SONGPATH))
    && (filesize(SONGPATH) != 0)) {
    $SongArray = file(SONGPATH);
    switch ($_GET['action']) {
    case 'Remove Duplications':
      $SongArray = array_unique($SongArray);
      $SongArray = array_values($SongArray);
      break;
    case 'Sort Ascending':
      sort($SongArray);
      echoDataStore();
      break;
    case 'Shuffle':
      shuffle($SongArray);
      echoDataStore();
      break;
    } // End switch

    if (count($SongArray) > 0) {
      // Join array elements with a string
      $NewSongs = implode($SongArray);
      $SongStore = fopen(SONGPATH, "wb");
      if ($SongStore === false) {
        echo "There was an error updating the song file.\n";
      } else {
        fwrite($SongStore, $NewSongs);
        fclose($SongStore);
      }
    } else {
      // Deletes the file
      unlink(SONGPATH);
    }
  }
}

if (isset($_POST['submit'])) {
  $SongToAdd = stripslashes($_POST['SongName']) . "\n";
  $ExistingSongs = array();

  if (file_exists(SONGPATH) && filesize(SONGPATH) > 0) {
    $ExistingSongs = file(SONGPATH);
  }

  // in_array checks if the song to add already exists in collection
  if (in_array($SongToAdd, $ExistingSongs)) {
    echo "<p>The song you entered already exists!<br />\n";
    echo "Your song was not added to the list.</p>";
  } else {
    // recursively creates directory and file with widest possible permissions
    if (!file_exists(dirname(SONGPATH))) {
      mkdir(dirname(SONGPATH), 0777, true);
    }
    // opens binary file for output at the end of a file.
    $SongFile = fopen(SONGPATH, "ab");
    if ($SongFile === false) {
      echo "There was an error saving your message!\n";
    } else {
      fwrite($SongFile, $SongToAdd);
      fclose($SongFile);
      echo "Your song has been added to the list.\n";
    }
  }
  echoDataStore();
}

// echoDataStore echos each data store song into an HTML table.
function echoDataStore() {
  if ((!file_exists(SONGPATH)) || (filesize(SONGPATH) == 0)) {
    echo "<p>There are no songs in the list.</p>\n";
  } else {
    $SongArray = file(SONGPATH);
    echo "<table border=\"1\" width=\"100%\" style=\"background-color:lightgray\">\n";
    foreach ($SongArray as $Song) {
      echo "<tr>\n";
      // htmlentities converts characters to HTML entities.
      echo "<td>" . htmlentities($Song) . "</td>";
      echo "</tr>\n";
    }
    echo "</table>\n";
  }
}
?>

<p>
<a href="main.php?action=Sort%20Ascending">Sort Song List</a><br />
<a href="main.php?action=Remove%20Duplicates">Remove Duplicate Songs</a><br />
<a href="main.php?action=Shuffle">Randomize Song List</a><br />
</p>

<form action="main.php" method="post">
<p>Add a New Song</p>
<p>Song Name: <input type="text" name="SongName" /></p>
<p>
<input type="submit" name="submit" value="Add Song to List" />
<input type="reset" name="reset" value="Reset Song Name" />
</p>
</form>
  </body>

</html>