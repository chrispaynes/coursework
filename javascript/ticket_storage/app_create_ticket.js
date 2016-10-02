// createTicket creates a new production ticket record.
function createTicket() {
  // persistDBData persists data to the database.
  // persistDBData(data *string || *int, database *obj)
  function persistDBData(data, database) {
    database.push(data);
  }

  // validateUnique ensures a record does not already exist in the database.
  // validateUnique(record_id *int, database *obj) => *bool
  function validateUnique(new_record_id, database) {
    return database.some(function(db_record) {
      return db_record.id == new_record_id;
    })
  }

  // promptTicketId prompts user for a new ticket id and returns ticket id.
  // promptTicketId() => *int
  function promptTicketId(){
    var ticket_id = parseInt(prompt("Enter a 6 Digit Ticket Id"));
    if(isValidNumber(ticket_id, 100000, 999999) && !validateUnique(ticket_id, ticket_db)) {
      return ticket_id;
    } else {
      alert("Please enter a unique non-negative 6 Digit Ticket Id");
      promptTicketId();
    }
    return ticket_id;
  }

  // getTicketCost prompts the user to enter a ticket cost
  // and returns the value as an integer.
  // getTicketCost() => *int
  function getTicketCost() {
    return parseInt(prompt("enter a cost"));
  };

  // new_ticket stores a new production ticket.
  var new_ticket = new Ticket(promptTicketId(),
                              prompt("Enter a client name:"),
                              prompt("Enter a ticket status:"),
                              getTicketCost());

  // Persists to database and writes ticket to DOM.
  persistDBData(new_ticket, ticket_db)
  writeTicket(new_ticket);
};
