// foreign key to link ticket data across parallel arrays
var foreignKey = 0;
var tbl = document.getElementsByTagName("tbody")[0];
var record = document.getElementById("record");

function createNode(node, content, attr_name, attr_value) {
  var n = document.createElement(node);

  if(content) {
    n.textContent = content;
  }
  if(attr_name) {
    n.setAttribute(attr_name, attr_value);
  }
  return n;
}

function createHeader() {
  var header = createNode("tr", "", "id", "table_header");
  header.appendChild(createNode("th", ""));
  header.appendChild(createNode("th", "Ticket ID"));
  header.appendChild(createNode("th", "Client"));
  header.appendChild(createNode("th", "Status"));
  header.appendChild(createNode("th", "Cost"));
  tbl.appendChild(header)
}


// writeTicket returns a ticket object's properties to the DOM.
// writeTicket(ticket *obj)
function writeTicket(ticket) {
  var record = createNode("tr", "", "id", "record");
  var btns = createNode("td", "", "id", "btns");

  btns.appendChild(createNode("button", "", "class", "delete_btn"));
  btns.id = "deleteTicketButton" + ticket.id
  btns.appendChild(createNode("i", "", "class", "fa fa-trash-o fa-fw"))
  record.appendChild(btns);
  record.appendChild(createNode("td", ticket.id, "id", "id_" + ticket.id));
  record.appendChild(createNode("td", ticket.client, "id", "client_" + ticket.id));
  record.appendChild(createNode("td", ticket.status, "id", "status_" + ticket.id));
  record.appendChild(createNode("td", "$" + ticket.cost.toLocaleString(), "id", "cost_" + ticket.id));

  tbl.appendChild(record)

};

function emptyTable() {

  tbl.removeChild(tbl.lastChild);

  if(tbl.children.length > 1) {
    emptyTable();
  }
  return;
}

// // initializes the table by removing records
function initTable() {

  // return;
      // <tr id="schedule">
      //   <td id="btns">
      //     <button id='deleteTicketButton' class='delete_btn'></button>
      //   </td>
      //   <td id="id_"></td>
      //   <td id="client_"></td>
      //   <td id="status_"></td>
      //   <td id="cost_"></td>
      // </tr>
}

// private function that creates a foreign key to search for a ticket
function getForeignKey(queryId) {
  foreignKey = idArr.indexOf(parseInt(queryId));
  return foreignKey;
}

// ensures a number is an integer between a specific integer range
function isValidNumber(num, min, max) {
  return Number.isInteger(num) && num >= min && num <= max;
}

function verify(condition, message) {
  if(condition) {
    return true;
  }
  else {
    alert(new Error(message));
    return false;
  }
}

function nodesToArray(node_list_query) {
  return Array.prototype.slice.call(node_list_query);
}

// function populateTable(ta *object, ra)
// ta = DOM table body
function populateTable(ta, ra) {
  ticket_db.map(function(t) {
    writeTicket(t)
  });
  document.getElementsByTagName("tbody")
}
