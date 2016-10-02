// uses foreign key to read a ticket across parallel arrays
function readTicket() {

  function getQuery(message){
    // prompts user to enter a search value
    // continues with search if user enters a valid 6 digit entry
    // returns the parsed 6-digit value
    var query = prompt(message);
    return validateQuery(query);
  }

  function validateQuery(query) {
    // "No records found matching that Ticket Id");
    var rangeError = "No records found matching that Ticket Id \nSearch values must be between 100000 and 999999";
    var reQuery = "Enter a 6-Digit Ticket ID to Begin Your Search";

    if(!query || query == "") {
      return;
    }

// getForeignKey(query)
    if(isValidNumber(Number(query), 100000, 999999) && getForeignKey(query) > -1) {
      return Number(query);
    } else {
      alert(rangeError);
      return getQuery(reQuery);
    }
  }

  // displays ticket if found in the database
  // otherwise prompts user to start a new query
  function writeTicketToDOM() {
    // t_index stores a ticket's index value from the database.
    var t_index = getForeignKey(getQuery("Enter a 6-Digit Ticket ID to Begin Your Search"))
    initTable()
    record.children[0].children[0].id = "deleteTicketButton" +ticket_db[t_index].id;
    record.children[0].children[0].innerHTML = "<i class='fa fa-trash-o fa-fw'></i>";
    record.children[1].textContent = ticket_db[t_index].id;
    record.children[2].textContent = ticket_db[t_index].client;
    record.children[3].textContent = ticket_db[t_index].status;
    record.children[4].innerHTML = "&#36;" + ticket_db[t_index].cost.toLocaleString();
    tbl.appendChild(record.cloneNode(true));
  };

  writeTicketToDOM();

}
