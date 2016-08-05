// creates a new production ticket
function createTicket() {
  
  // data
  var insertion_index = 0;
  var data_hash_map = {}; 

  // ensures the id is a six digit integer value
  function validateIdLen(id_length) {
    if(Number.isInteger(id_length) && id_length.toString().length === 6) {
      return true;
    } else {
      alert("The ticket_id must be a 6 digit integer");
      return false;
    }
  }

  // ensures the id does not already exist
  function validateUniqueId(unique_id) {
    for(var id in idArr) {
      if(unique_id != idArr[id]) {
        return true;
      } else {
        alert("A ticket already exists with number " + unique_id);
        return false;
      }
    }
  }

  // prompts user to input a new ticket id
  // validates and returns ticket id
  function getTicketId(){
    var ticket_id = 0;
    ticket_id = prompt("enter a 6 digit ticket id");
    parsed_ticket_id = parseInt(ticket_id);

    if(validateIdLen(parsed_ticket_id) && validateUniqueId(parsed_ticket_id)) {
      idArr.push(parseInt(parsed_ticket_id));
      return parsed_ticket_id;
    } else {
      getTicketId();
    }
  }

  // prompts user to enter a client name
  function getClient() {
    var client = prompt("enter a client name");
    clientArr.push(client);
    return client;
  }

  // prompts user to enter a ticket status
  function getTicketStatus() {
    var ticket_status = prompt("enter a ticket status");
    statusArr.push(ticket_status);
    return ticket_status;
  }

  // prompts user to enter a ticket cost
  // validates the user enters an integer
  // returns the cost prefixed with a dollar sign
  function getTicketCost() {
    var ticket_cost = 0;
    ticket_cost = prompt("enter a cost");    
    parsed_ticket_cost = parseInt(ticket_cost);

    if(validateTicketCost(parsed_ticket_cost)) {
      costArr.push(parseInt(parsed_ticket_cost));
      return "&#36;" + parsed_ticket_cost;      
    } else {
      getTicketCost()
    }
  }

  // validates ticket ticket_cost
  function validateTicketCost(cost_arg) {
    if(Number.isInteger(cost_arg)) {
      return true;
    } else {
      alert("The cost must be an integer");
      return false;
    }
  }

  data_hash_map = { "foreign_key": idArr.length,
                    "id": getTicketId(),
                    "client": getClient(),
                    "status": getTicketStatus(),
                    "cost": getTicketCost() };   

  // loops through data_hash_map to write new data
  function writeNew() {
    for(var key in data_hash_map) {
      document.getElementById(key).innerHTML += data_hash_map[key] + "<br>";
    }
  }

  writeNew();                  
};