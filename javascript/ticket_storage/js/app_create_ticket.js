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
  function getId() {
    var id = document.getElementById("create_ticket_id").value.substr(0, 6);
    console.log(typeof(id), id)

    if(sanitizeNum(id)) {
      return id;
    } else {
      return "";
    }
  }

  function getClient() {
    var client = document.getElementById("create_ticket_client").value;

    if(sanitizeAlphaNumeric(client)) {
      return client.toString();
    } else {
      return "";
    }
  };

  function getStatus() {
    var status = document.getElementById("create_ticket_status").value;

    if(sanitizeAlphaNumeric(status)) {
      return status.toString();
    } else {
      return "";
    }
  };

  // getCost returns the ticket cost input value as an integer.
  // getCost() => *int
  function getCost() {
    var cost = document.getElementById("create_ticket_cost").value;

    if(sanitizeNum(cost)) {
      return parseInt(cost);
    } else {
      return "";
    }
  };

  document.getElementById("create_ticket_submit").addEventListener("click", function() {
    if(!validateUnique(getId(), ticket_db)) {
      // new_ticket stores a new production ticket.
      var new_ticket = new Ticket(getId(), getClient(), getStatus(), getCost());
console.log(new_ticket)
      // Persists to database and writes ticket to DOM.
      persistDBData(new_ticket, ticket_db);
      writeTicket(new_ticket);

      // document.getElementById("create_ticket_form").parentNode.remove();
    } else {
      return false;
    }
    return;
  }, false);
};
