// uses foreign key to read a ticket across parallel arrays
function readTicket() {
  function getQuery(){
    var query_id = 0;
    var parsed_query_id = 0;

    query_id = prompt("Enter a 6-Digit Ticket ID to Begin Your Search");
    parsed_query_id = parseInt(query_id);

    if(validateIdLen(parsed_query_id)) {
      return parsed_query_id;
    } else {
      getQuery();
    }
  }
  
  // finds the foreign key based on the parsed_query_id
  foreignKey = getForeignKey(getQuery());

  // displays ticket if found in the database
  // otherwise prompts user to start a new query
  (function displayTicket() {
    if(foreignKey != -1) {
      initTable()
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