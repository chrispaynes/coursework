<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">

  <head>
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <title>Movie Submission</title>
  </head>

  <body>

  <style>

  </style>

<h1>Movie Title Store</h1>

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
  <input type="submit" name="submit_button" required /><br>

</form>

      <?php
class Movie {
  private $title;
  private $year;
  private $genre;
  private $leadActor;
  private $award;

  // Movie constructs a Movie object
  function Movie() {
    $this->title;
    $this->year;
    $this->genre;
    $this->leadActor;
    $this->award;
  }

  // setMovieSubmission stores and escapes the user's movie submission;
  function setMovieSubmission() {
    $this->title = addslashes($_POST["movieTitle"]);
    $this->year = $_POST["movieYear"];
    $this->genre = addslashes($_POST["movieGenre"]);
    $this->leadActor = addslashes($_POST["movieLeadActor"]);
    $this->award = addslashes($_POST["movieAward"]);
  }

  // archiveToFile writes a movie to a file.
  function writeToFile($movieData) {
    $file = "movieSubmission.txt";
    // file_put_contents appends the movie data to the files.
    file_put_contents($file, (string) $movieData, FILE_APPEND | LOCK_EX) or die("Unable to write to {$file}");
  }

  // __toString is a Magic Method that returns the movie object as a human-readable text block.
  public function __toString() {
    $movieData = <<<MovieData
Movie
****************************
Title:       $this->title
Year:        $this->year
Genre:       $this->genre
Lead Actor:  $this->leadActor
Award:       $this->award
****************************
\n\n
MovieData;

    return $movieData;
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
    $movie->echoMovie();
    $movie->writeToFile((string) $movie);
    unset($movie);
  }
  // destroy the specified movie object so it can't be resubmitted
  unset($movie);

}

main();

?>

  </body>

</html>