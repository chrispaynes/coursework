// creates a new production ticket
function createTicket() {

  // data
  var insertion_index = 0;
  var data_hash_map = {};

  // writes data to DOM and Database and returns formatted data
  function writeData(data, data_array, data_return) {
    persistDBData(data, data_array)
    return data_return;
  }

  function persistDBData(data_arg, array_arg, opt_arg) {
    array_arg.push(data_arg);
  }

  // ensures an id does not already exist
  function validateUniqueId(unique_id) {
    if(idArr.indexOf(unique_id) === -1) {
      return true;
    } else {
      alert("A ticket already exists with number " + unique_id);
      return false;
    }
  }

  // prompts user to input a new ticket id
  // validates and returns ticket id
  function promptTicketId(){
    var ticket_id = 0;
    ticket_id = parseInt(prompt("Enter a 6 Digit Ticket Id"));

    return verify(ticket_id,
                  isValidNumber(ticket_id, 100000, 999999) && validateUniqueId(ticket_id),
                  writeData(ticket_id, idArr, ticket_id),
                  "Please enter a non-negative 6 Digit Ticket Id",
                  promptTicketId);
  }

  // prompts user to enter a string value
  // pushes string value to specified array array
  // returns the entered value
  function getString(get_var, get_prompt, get_array) {
    var get_var = prompt(get_prompt);
    persistDBData(get_var, get_array)
    return get_var;
  }

  // prompts user to enter a ticket cost
  // validates the user enters an integer
  // returns the cost prefixed with a dollar sign
  function getTicketCost() {
    var ticket_cost = 0;
    ticket_cost = parseInt(prompt("enter a cost"));

    return verify(ticket_cost,
                  isValidNumber(ticket_cost, 100000, 999999),
                  writeData(ticket_cost, costArr, "$" + ticket_cost.toLocaleString()),
                  "The cost must be an integer",
                  getTicketCost);
  };

  // Stores a key/value pair of HTML elements and
  // matching functions to retrieve their data
  data_hash_map = { "foreign_key_": idArr.length,
                    "id_": promptTicketId(),
                    "client_": getString("client", "enter a client name", clientArr),
                    "status_": getString("status", "enter a ticket status", statusArr),
                    "cost_": getTicketCost() };

  // loops through data_hash_map to write new data to html
  function writeNew() {
    for(var key in data_hash_map) {
      document.getElementById(key).innerHTML += data_hash_map[key] + "<br>";
    };
  };

  writeNew();
};
