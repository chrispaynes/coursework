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

    if(isNumberWithinRange(Number(query), 100000, 999999)) {
      return Number(query);
    } else {
      alert(range_error);
      return getQuery(reQuery, validateQuery);
    }
  }

  function main() {
    var search = getQuery("Enter a 6-Digit Ticket ID to Begin Your Search", validateQuery);
    var ticket_index = getTicketIndex(search);

    // If the ticket exists in the DB, pass it to writeTicket(),
    // else leave the DOM as is.
    if(ticket_index != -1) {
      emptyTable()
      return writeTicket(ticket_db[ticket_index]);
    } else {
      return;
    }
  }

  main();
}
