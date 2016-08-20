// creates a new production ticket
function createTicket() {

  // writes data to DOM and Database and returns formatted data
  function writeDOMData(data, data_array, data_return) {
    persistDBData(data, data_array)
    return data_return;
  }

  // subroutine to push data to a data array
  function persistDBData(data_arg, array_arg) {
    array_arg.push(data_arg);
  }

  // ensures a record does not already exist within a data store
  function validateUnique(record, data_store) {
    return data_store.indexOf(record) === -1
  }

  // prompts user to input a new ticket id
  // validates and returns ticket id
  function promptTicketId(){
    var ticket_id = 0;
    ticket_id = parseInt(prompt("Enter a 6 Digit Ticket Id"));

    if(verify(validateUnique(ticket_id, idArr) && isValidNumber(ticket_id, 100000, 999999),
      "Please enter a unique non-negative 6 Digit Ticket Id")) {
      return writeDOMData(ticket_id, idArr, ticket_id);
    } else {
      promptTicketId();
    }
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

    return writeDOMData(ticket_cost, costArr, "$" + ticket_cost.toLocaleString());

  };

  // writes a new ticket's data field to a DOM column
  function writeNew(write_column, write_fn) {
    document.getElementById(write_column).innerHTML += write_fn + "<br>";
  };

  writeNew("foreign_key_", idArr.length);
  writeNew("id_", promptTicketId());
  writeNew("client_", getString("client", "enter a client name", clientArr));
  writeNew("status_", getString("status", "enter a ticket status", statusArr));
  writeNew("cost_", getTicketCost());

};
