<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">

  <head>
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <title>Movie Directory</title>
  </head>

  <body>

<h1>Movie Directory</h1>
<hr />

<!-- A document to select and retrieve movie records. -->
<!-- A document that you can use to edit entries. -->
<h2>Add A New Movie</h2>
<form action="" method="post">

  <!-- Movie Title -->
  <label for="movieTitle">Movie Title</label>
  <input type="text" name="movieTitle" required /></br>

  <!-- Movie Year -->
  <label for="movieYear">Movie Year</label>
  <input type="number" name="movieYear" maxlength="4" required /></br>

  <!-- Movie Genre -->
  <label for="movieGenre">Movie Genre</label>
     <select name="movieGenre" required>
      <option value="">&nbsp;</option>
      <option value="Action">Action</option>
      <option value="Adventure">Adventure</option>
      <option value="Animated">Animated</option>
      <option value="Comedy">Comedy</option>
      <option value="Horror">Horror</option>
      <option value="Romance">Romance</option>
      <option value="Sci-Fi">Sci-Fi</option>
      <option value="Western">Western</option>
    </select><br>

  <!-- Movie LeadActor -->
  <label for="movieLeadActor">Movie LeadActor</label>
  <input type="text" name="movieLeadActor" required /></br>

  <!-- Movie Award -->
  <label for="movieAward">Movie Award</label>
  <input type="text" name="movieAward" required /></br>

  <!-- Submit -->
  <input type="submit" name="submit_button" /><br>

</form>
<hr />

      <?php
class Movie {
  private $title;
  private $year;
  private $genre;
  private $leadActor;
  private $award;

  // Movie constructs a Movie object
  public function Movie() {
    $this->title;
    $this->year;
    $this->genre;
    $this->leadActor;
    $this->award;
  }

  // Movie constructs a Movie object
  public function addEditTitle($title) {
    $this->title = $title;
  }

  // setMovieSubmission stores and escapes the user's movie submission;
  public function setMovieSubmission() {
    $this->title = addslashes($_POST["movieTitle"]);
    $this->year = $_POST["movieYear"];
    $this->genre = addslashes($_POST["movieGenre"]);
    $this->leadActor = addslashes($_POST["movieLeadActor"]);
    $this->award = addslashes($_POST["movieAward"]);
  }

  // create a movie directory application that saves entries to a single text file.
  // archiveToFile writes a movie to a file.
  public function writeToFile($movieData, $file) {
    if (!file_exists(dirname($file))) {
      mkdir(dirname($file), 0777, true);
    }
    file_put_contents($file, (string) $movieData, LOCK_EX) or die("Unable to write to {$file}");
    chmod($file, 0777);
  }

  public function viewMovieFile($movieTitle) {
    $moviePath = "./MovieDatabase/" . $movieTitle;

    if ((file_exists($moviePath)) && (filesize($moviePath) != 0)) {
      $Movies = file($moviePath);
      echo "<br>";
      foreach ($Movies as $key => $value):
        echo "$value<br>";
      endforeach;
      echo "<br>";
    } else {
      echo "There was an error viewing the movie file.\n";
    }
  }

  public function getFileName() {
    // recursively creates directory and file with widest possible permissions
    if (!file_exists(dirname("./MovieDatabase/"))) {
      mkdir(dirname("./MovieDatabase/"), 0777, true);
    }
    return "./MovieDatabase/{$this->title}.txt";
  }

  // __toString is a Magic Method that returns the movie object as a human-readable text block.
  public function __toString() {
    $movieData = "Title:       $this->title\n";
    $movieData .= "Year:        $this->year\n";
    $movieData .= "Genre:       $this->genre\n";
    $movieData .= "Lead Actor:  $this->leadActor\n";
    $movieData .= "Award:       $this->award\n";

    return $movieData;
  }

  public function editMovieFile($movieTitle) {
    $this->title = $movieTitle;
    $moviePath = "./MovieDatabase/" . $movieTitle;

    if ((file_exists($moviePath)) && (filesize($moviePath) != 0)) {
      $Movies = file($moviePath);
      echo '<form action="" method="POST" name="movieEditor">';
      echo "<textarea name='movieEdit' rows='10' cols='30'>";

      foreach ($Movies as $key => $value):
        echo "$value";
      endforeach;
      echo "</textarea>";
      echo "<br>";
      echo '<input type="submit" value="Submit Movie Edit" name="editMovieSubmission_submit" />';
      echo '</form>';

    } else {
      echo "There was an error viewing the movie file.\n";
    }

  }

  // echoMovie echos the movie object as a human-readable HTML output.
  function echoMovie() {
    $movieData = <<<MovieData
<br>
Movie<br>
****************************<br>
<table>
  <tr>
    <td><b>Title:</b></td>
    <td>$this->title</td>
  </tr>
  <tr>
    <td><b>Year:</b></td>
    <td>$this->year</td>
  </tr>
  <tr>
    <td><b>Genre:</b></td>
    <td>$this->genre</td>
  </tr>
  <tr>
    <td><b>Lead Actor:</b></td>
    <td>$this->leadActor</td>
  </tr>
  <tr>
    <td><b>Award:</b></td>
    <td>$this->award</td>
  </tr>
</table>
****************************<br>
MovieData;
    echo $movieData;
  }
}

function main() {
  // if the user clicked the submit button
  if (isset($_POST['submit_button'])) {
    $movie = new Movie();
    $movie->setMovieSubmission();

    if ((file_exists($movie->getFileName())) && (filesize($movie->getFileName()) != 0)) {
      echo "<p>The movie you entered already exists!<br />\n";
      echo "Please submit a new movie or edit the existing movie.</p>";
      return;
    } else {
      $movie->writeToFile($movie, $movie->getFileName());
      $movie->echoMovie();

      // destroy the specified movie object so it can't be resubmitted
      unset($movie);
    }
  }

  // viewMovies
  if (isset($_POST['viewMovies_submit'])) {
    $movie = new Movie();
    $movie->viewMovieFile($_POST['movieTitle']);
  }

  // editMovies
  if (isset($_POST['editMovie_submit'])) {
    $movie = new Movie();
    $movie->editMovieFile($_POST['movieTitle']);
  }

  if (isset($_POST['editMovieSubmission_submit'])) {
    $movie = new Movie();
    $movie->addEditTitle(extractTitle($_POST['movieEdit']));
    $file = $movie->getFileName();

    $movie->writeToFile($_POST['movieEdit'], $file);

    if (file_exists($file) && is_readable($file)) {
      echo "Successfully updated the movie file";
    } else {
      echo "Could not update the file";
    }
  }

}

// echoFileContents echos the file contents back to HTML.
function echoFileContents($movie) {

  $file = $movie->getFileName();
  if (file_exists($file) && is_readable($file)) {
    // nl2br inserts HTML line breaks before all newlines in a string
    echo nl2br(file_get_contents($file));
  }
}

// extractTitles trims text around a movie title
function extractTitle($string) {
  $str1 = substr_replace($string, "", stripos($string, 'Year'));
  $str2 = substr_replace($str1, "", 0, 7);

  return trim(strip_tags($str2), " \t\n\r\0\x0B");
}

// create options dropdown
function createOptionsDropdown($dirname) {
  // removes . and .. from the returned array from scandir:
  $files = array_diff(scandir($dirname), array('.', '..'));
  // Remove values from the first two indexes.
  unset($files[0]);
  unset($files[1]);
  // Reset the indexes without the original first two slots.
  $files = array_values($files);

  print_r($files);

  foreach ($files as $key => $value):
    echo "<option value='{$value}'>" . substr($value, 0, strpos($value, '.txt')) . "</option>";
  endforeach;
}

echo '<h2>Learn More About A Movie</h2>';
echo '<form action="" method="POST" name="movieSongViewer">';
echo '<label for="movieSong">Choose A Movie</label><br>';
echo '<select name="movieTitle" id="">';
echo createOptionsDropdown("./MovieDatabase/");
echo '</select>';
echo '<input type="submit" value="View Movie" name="viewMovies_submit" />';
echo '<input type="submit" value="Edit A Movie" name="editMovie_submit" />';
echo '</form>';
echo '<hr />';

main();

?>

  </body>

</html>