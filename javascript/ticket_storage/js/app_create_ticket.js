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

  // getClient returns client name value from the create ticket from.
  // promptTicketId() => *int
  function getId() {
    var id = document.getElementById("create_ticket_id").value.replace(/-\./g, "");
    return parseInt(sanitizeNum(id).substr(0, 6));
  }

  // getClient returns client name value from the create ticket from.
  // getClient() => *string
  function getClient() {
    var client = document.getElementById("create_ticket_client").value;
    return sanitizeAlphaNumeric(client);
  };

  function getStatus() {
    var status = document.getElementById("create_ticket_status").value;
    return sanitizeAlphaNumeric(status)
  };

  // getCost returns the ticket cost input value as an integer.
  // getCost() => *int
  function getCost() {
    var cost = document.getElementById("create_ticket_cost").value.replace(/-\./g, "");
    return parseInt(sanitizeNum(cost))
  };

  document.getElementById("create_ticket_submit").addEventListener("click", function() {
    if(!validateUnique(getId(), ticket_db)) {
      // new_ticket stores a new production ticket.
      var new_ticket = new Ticket(getId(), getClient(), getStatus(), getCost());
      // Persists to database and writes ticket to DOM.
      persistDBData(new_ticket, ticket_db);
      writeTicket(new_ticket);
      // Removes form from DOM.
      document.getElementById("create_ticket_form").parentNode.remove();
    } else {
      return false;
    }
    return;
  }, false);
};
