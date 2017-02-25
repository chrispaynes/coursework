<!--
PROCESS:
  01. Create ArrayTable class to inherit ArrayObject class.
  02. Add class constructor function.
  03. Add displayAsTable function.
  04. Create private decorator function to create table rows.
  05. Add CSS styling for better visibility.
  06. Refactor, refactor, refactor.

THOUGHTS:

  01. I initially created the table records using a forEach loop but refactored it to use the
      ArrayObject's functionality.

  02. When concentating HTML while using echo, I wanted to find a balance between few concatenation
      operations yet maintain a HTML-like indentation structure.
 -->


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

  // displayAsTable outputs all the set keys and values as an HTML table.
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

  // decorateRow decorates table rows and cells with HTML and key/value pairs.
  private function decorateRow($key, $value, $elem) {
    echo "<tr>"
      . "<{$elem}>$key</{$elem}>"
      . "<{$elem}>$value</{$elem}>"
      . "</tr>";
  }

  // __construct calls the parent constructor to create an ArrayObject instance.
  function __construct(array $values) {
    parent::__construct($values);
  }
}

// Instantiate an instance of this class, set some keys for the object,
// and call the object's displayAsTable() function to display your data as an HTML table.
$arrayTable = new ArrayTable(array("Alpha", "Bravo", "Charlie"));
$arrayTable->displayAsTable();

?>

</body>
</html>