// creates a new production ticket
function createTicket() {
  
  // data
  var insertion_index = 0;
  var data_hash_map = {}; 

  // validates ticket_id
  function validateTicketId() {
    var ticket_id = 0;
    var is_valid_id = "n";

    while (is_valid_id == "n") {
      ticket_id = prompt("enter a 6 digit ticket id");
      ticket_id = parseInt(ticket_id);
      ticket_idlen = ticket_id.toString().length;

      // TODO: enforce unique ID's

      if (Number.isInteger(ticket_id) && ticket_idlen === 6 ) {
        is_valid_id = "y";
      } else {
        alert("The ticket_id must be a 6 digit integer");
      }
    }

    idArr.push(parseInt(ticket_id));

    return ticket_id    
  }

  // TODO: create function to enforce unique Ticket ID's 

  function getClient() {
    var client = prompt("enter a client name");

    clientArr.push(client);
    return client;
  }

  function getTicketStatus() {
    var ticket_status = prompt("enter a ticket status");
    statusArr.push(ticket_status);
    return ticket_status;
  }

  // validates ticket ticket_cost
  function validateTicketCost() {
    var is_valid_cost = "n";
    var ticket_cost = 0;

    while (is_valid_cost == "n") {
      ticket_cost = prompt("enter a cost");
      ticket_cost = parseInt(ticket_cost);
      if (Number.isInteger(ticket_cost)) {
        is_valid_cost = "y";
      } else {
        alert("The cost must be an integer");
      }
    }

    costArr.push(parseInt(ticket_cost));
    return ticket_cost;
  }

  insertion_index = idArr.length;

  data_hash_map = { "foreign_key": insertion_index,
                    "id": validateTicketId(),
                    "client": getClient(),
                    "status": getTicketStatus(),
                    "cost": validateTicketCost() };   


  // loops through data_hash_map to write new data
  function writeNew() {
    for(var key in data_hash_map) {
      document.getElementById(key).innerHTML += data_hash_map[key] + "<br>";
    }
  }

  writeNew();                  
};