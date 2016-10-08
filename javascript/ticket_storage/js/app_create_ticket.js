// createTicket creates a new production ticket record.
function createTicket() {


  (function renderInputForm(){
    var div = createNode({"div": ""}, [{"id": "create_ticket_form"}]);
    var ticket_number = createNode({"div": ""}, [{"class": "input_set"}]);
    var client_name = createNode({"div": ""}, [{"class": "input_set"}]);
    var client_status = createNode({"div": ""}, [{"class": "input_set"}]);
    var client_cost = createNode({"div": ""}, [{"class": "input_set"}]);
    var submit_btn = createNode({"div": ""}, [{"class": "input_set"}]);
    var t = getTable();
    ticket_number.appendChild(createNode({"span": "Ticket Id"}, [{"for": "Ticket Id"}]));
    ticket_number.appendChild(createNode({"input": ""}, [{"type": "number"},
                                                {"id": "create_ticket_id"},
                                                {"placeholder": "000000"},
                                                {"min": "100000"},
                                                {"maxlength": "6"}]));

    client_name.appendChild(createNode({"span": "Client Name"}, [{"for": "Client Name"}]));
    client_name.appendChild(createNode({"input": ""}, [{"type": "text"}, {"id": "create_ticket_client"}, {"placeholder": "client name"}]));

    client_status.appendChild(createNode({"span": "Client Status"}, [{"for": "Client Status"}]));
    client_status.appendChild(createNode({"input": ""}, [{"type": "text"}, {"id": "create_ticket_status"}, {"placeholder": "ticket status"}]));

    client_cost.appendChild(createNode({"span": "Client Cost"}, [{"for": "Client Cost"}]));
    client_cost.appendChild(createNode({"input": ""}, [{"type": "number"}, {"id": "create_ticket_cost"}, {"placeholder": "0000.00"}]));

    submit_btn.appendChild(createNode({"input": ""}, [{"type": "submit"}, {"id": "create_ticket_submit"}, {"class": "btn btn-success"}]));

    div.appendChild(ticket_number);
    div.appendChild(client_name);
    div.appendChild(client_status);
    div.appendChild(client_cost);
    div.appendChild(submit_btn);

    t.insertBefore(div, t.childNodes[0]);
  })();

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
    if(isNumberWithinRange(ticket_id, 100000, 999999) && !validateUnique(ticket_id, ticket_db)) {
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
  // var new_ticket = new Ticket(promptTicketId(),
  //                             prompt("Enter a client name:"),
  //                             prompt("Enter a ticket status:"),
  //                             getTicketCost());

  // Persists to database and writes ticket to DOM.
  persistDBData(new_ticket, ticket_db)
  writeTicket(new_ticket);
};
