<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">

  <head>
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <title>ArrayObject Inheritance</title>
  </head>

  <style>
    table,tr {
      border: solid 1px black;
    }
    th, td {
      padding: 15px;
    }
  </style>

<body>

<?php
class ArrayTable extends ArrayObject {

  // private $arrayKeys;

  public function displayAsTable() {

    echo "<table>";
    $this->decorateRow("Keys", "Values", "th");

    $arrayObj = $this->getIterator();

    // Check if current iterator position is valid.
    // Decorate each row into an HTML table.
    // Move forward to the next element.
    while ($arrayObj->valid()) {
      $this->decorateRow($arrayObj->key(), $arrayObj->current(), "td");
      $arrayObj->next();
    }

    echo "</table>";
  }

  // NOTE: Initial implementation. Had to alter because it did not use ArrayObject inheritance.
  // public function displayAsTable() {
  //   echo "<table>";
  //   echo $this->decorateRow("Keys", "Values", "th");
  //   foreach ($this->arrayKeys as $key => $index):
  //     $this->decorateRow($index, $key);
  //   endforeach;
  //   echo "</table>";
  // }

  // decorateRow decorates table rows and cells with HTML and key/value pairs.
  private function decorateRow($key, $value, $elem) {
    // NOTE: Initial, overly concatenated implementation.
    // echo "<tr><td>" "<{$elem.}>" . $key . "</td>" . "<td>" . $value . "</td></tr>";

    echo "<tr>"
      . "<{$elem}>$key</{$elem}>"
      . "<{$elem}>$value</{$elem}>"
      . "</tr>";
  }

  // __construct calls the parent constructor to create an ArrayObject instance.
  function __construct(array $values) {
    // NOTE: original implementation with private key object and and no ArrayObject inheritance.
    // $this->arrayKeys = $keys;
    parent::__construct($values);
  }
}

// Create new ArrayTable with a list of values.
$arrayTable = new ArrayTable(array("Alpha", "Bravo", "Charlie"));
$arrayTable->displayAsTable();

?>

</body>
</html>