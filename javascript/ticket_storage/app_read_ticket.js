// uses foreign key to read a ticket across parallel arrays
function readTicket() {

  // getQuery prompts the user with a message to input a query value.
  // validation_func validates the query value.
  // getQuery(message *string) => *int
  function getQuery(message, validation_func){
    return validation_func(prompt(message));
  }

  // validateQuery validates a user query to ensure the query
  // exists can be retrieved from the database.
  // validateQuery(query *string) => *int // *getQuery() // *false
  function validateQuery(query) {
    var range_error = "No records found matching that Ticket Id.\nSearch values must be between 100000 and 999999.";
    var reQuery = "Enter a 6-Digit Ticket ID to Begin Your Search";

    if(!query || query == "") {
      return;
    }

    if(isValidNumber(Number(query), 100000, 999999)) {
      return Number(query);
    } else {
      alert(range_error);
      return getQuery(reQuery, validateQuery);
    }
  }

  // writeTicket returns a ticket object's properties to the DOM.
  // writeTicket(ticket *obj)
  function writeTicket(ticket) {
    console.log("ticket\t", ticket, typeof(ticket));
    record.children[0].children[0].id = "deleteTicketButton" + ticket.id;
    record.children[0].children[0].innerHTML = "<i class='fa fa-trash-o fa-fw'></i>";
    record.children[1].textContent = ticket.id;
    record.children[2].textContent = ticket.client;
    record.children[3].textContent = ticket.status;
    record.children[4].innerHTML = "&#36;" + ticket.cost.toLocaleString();
    tbl.appendChild(record.cloneNode(true));
  };

  function main() {
    var search = getQuery("Enter a 6-Digit Ticket ID to Begin Your Search", validateQuery);
    var ticket_index = getForeignKey(search);

    // If the ticket exists in the DB, pass it to writeTicket(),
    // else leave the DOM as is.
    if(ticket_index != -1) {
      initTable();
      return writeTicket(ticket_db[ticket_index]);
    } else {
      return;
    }
  }

  main();
}
