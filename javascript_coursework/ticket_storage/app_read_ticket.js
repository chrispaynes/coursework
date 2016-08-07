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



  // displays ticket if found in the database
  // otherwise prompts user to start a new query
  (function readTicket() {

    // finds the foreign key based on the parsed_query_id
    foreignKey = getForeignKey(getQuery());

    if(foreignKey != -1) {
      initTable()

      record.id = "schedule_record_" + idArr[foreignKey];
      record.children[1].textContent = foreignKey;
      record.children[2].textContent = idArr[foreignKey];
      record.children[3].textContent = clientArr[foreignKey];
      record.children[4].textContent = statusArr[foreignKey];
      record.children[5].innerHTML = "&#36;" + costArr[foreignKey].toLocaleString();
      tbl.appendChild(record.cloneNode(true));

    } else {
      alert("No records found matching that Ticket Id");
      getQuery()
    }
  })();

}