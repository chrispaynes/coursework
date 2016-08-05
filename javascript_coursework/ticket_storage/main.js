// foreign key to link ticket data across parallel arrays
var foreignKey = 0;

// reads all production tickets across parallel arrays
// a foreign key links ticket information across arrays
function readIndex() {
  document.getElementById("scheduleHeader").innerHTML + idArr.length + " TICKETS";

  for (var i in idArr) {
    document.getElementById("foreign_key").innerHTML += i + "<br>";
    document.getElementById("id").innerHTML += idArr[i] + "<br>";
    document.getElementById("client").innerHTML += clientArr[i] + "<br>";
    document.getElementById("status").innerHTML += statusArr[i] + "<br>";
    document.getElementById("cost").innerHTML += "$" + costArr[i] + "<br>";
  }
};

// private function that creates a foreign key to search for a ticket
function getForeignKey(queryId) {
  foreignKey = idArr.indexOf(parseInt(queryId));
  return foreignKey;
}