// reads a ticket across parallel arrays based on a foreign key
function readTicket() {
  foreignKey = 0;

  // ensures the user inputs 6 characters longer
  function validateQueryLength(query) {    
    return query.toString().length === 6;
  }

  // ensures the user inputs a value that can be parsed to an integer
  function validateQueryIsInteger(query) {
    return Number.isInteger(parseInt(query));
  }

  function getQuery(){
    var query_id = 0;
    query_id = prompt("Input a 6-Digit Ticket ID to Begin Your Search");

    if(validateQueryIsInteger(query_id) && validateQueryLength(query_id)) {
      return query_id;
    } else {
      alert("Please enter a 6-digit integer value");
      getQuery();
    }
  }
  
  foreignKey = getForeignKey(getQuery());
  console.log(foreignKey);

  // displays ticket if found in the database
  // otherwise prompts user to start a new query
  (function displayTicket() {
    if(foreignKey != -1) {
      var read_hash_map = { "id": idArr,
                            "client": clientArr,
                            "status": statusArr,
                            "cost": costArr
                          };        
    } else {
      alert("No records found matching that Ticket Id");
      getQuery()
    }
    for(var key in read_hash_map) {
      document.getElementById(key).innerHTML += read_hash_map[key][foreignKey] + "<br />";
    }    
  })();

}