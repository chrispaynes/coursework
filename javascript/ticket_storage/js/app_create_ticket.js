// createTicket creates a new production ticket record.
function createTicketModule() {
  renderCreateForm();
  // getClient returns client name value from the create ticket from.
  // promptTicketId() => *int
  function getId() {
    var id = document.getElementById("create_ticket_id").value.replace(/-\./g, "");
    console.log(typeof(id), id);
    // return parseInt(sanitizeNum(id).substr(0, 6));
    return parseInt(sanitize(id, "numeric", 6));
  }

  // getClient returns client name value from the create ticket form.
  // getClient() => *string
  function getClient() {
    var client = document.getElementById("create_ticket_client").value;
    return sanitize(client, "alphaNumeric", 50)
  };

  function getStatus() {
    var status = document.getElementById("create_ticket_status").value;
    return sanitize(status, "alpha", 20)
  };

  // getCost returns the ticket cost input value as an integer.
  // getCost() => *int
  function getCost() {
    var cost = document.getElementById("create_ticket_cost").value.replace(/-\./g, "");
    return parseInt(sanitize(cost, "numeric", 12));
  };

  // validateUnique ensures a record does not already exist in the database.
  // validateUnique(record_id *int, database *obj) => *bool
  function validateUnique(new_record_id, database) {
    return database.some(function(db_record) {
      return db_record.id == new_record_id;
    })
  }

  // persistDBData persists data to the database.
  // persistDBData(data *string || *int, database *obj)
  function persistDBData(data, database) {
    database.push(data);
  }

// createNewTicket creates a new ticket instance from form inputs.
  function createNewTicket() {
    if(!validateUnique(getId(), ticket_db)) {
      return new Ticket(getId(), getClient(), getStatus(), getCost());
    } else {
      return false;
    }
  }

  // submitTicket ensures a new ticket's id does not exist in the database,
  // then persists it to the database before writing it to the DOM.
  // After completion, it removes the form element from the DOM.
  function submitTicket() {
    var new_ticket = createNewTicket();
    if(new_ticket) {
      persistDBData(new_ticket, ticket_db);
      writeTicket(new_ticket);
    }
    return document.getElementById("create_ticket_form").parentNode.remove();
  }

  // main executes the click event driven functions within create_ticket().
  (function main() {
    var submit_btn = document.getElementById("create_ticket_submit");
    if(window.addEventListener) {
      submit_btn.addEventListener("click", submitTicket, false);
    }

    if(window.attachEvent) {
      submit_btn.attachEvent("onclick", submitTicket);
    }
    return;
  })();
};
