// uses foreign key to read a ticket across parallel arrays
function readTicket() {
  function getQuery(){
    var query_id = 0;

    // prompts user to enter a search value
    // continues with search if user enters a valid 6 digit entry
    // returns the parsed 6-digit value
    query_id = prompt("Enter a 6-Digit Ticket ID to Begin Your Search");
    if(query_id === "" || query_id === null ) {
      return;
    }
    else if(validates6Chars(query_id) && validateId(parseInt(query_id))) {
      return parseInt(query_id);
    } else {
      alert("Please Enter a valid 6-Digit Integer");
      getQuery()
    }
  }

  // displays ticket if found in the database
  // otherwise prompts user to start a new query
  function readTicket() {

    // finds the foreign key based on the parsed_query_id
    foreignKey = getForeignKey(getQuery());

    // ensures foreignKey is present in array
    // ensures 0 does not return a falsy or undefined value
    if(foreignKey >= 0 || foreignKey === 0) {
      initTable()

      record.id = "schedule_record_" + idArr[foreignKey];
      record.children[1].textContent = foreignKey;
      record.children[2].textContent = idArr[foreignKey];
      record.children[3].textContent = clientArr[foreignKey];
      record.children[4].textContent = statusArr[foreignKey];
      record.children[5].innerHTML = "&#36;" + costArr[foreignKey].toLocaleString();
      tbl.appendChild(record.cloneNode(true));

    } else if(foreignKey === -1) {
      // alert("No records found matching that Ticket Id");
      // getQuery();
    }
  };

  readTicket();

}