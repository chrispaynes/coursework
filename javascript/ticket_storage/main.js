// foreign key to link ticket data across parallel arrays
var foreignKey = 0;
var tbl = document.getElementsByTagName("tbody")[0];
var record = document.getElementById("schedule");

// initializes the table by removing records
function initTable() {
  tbl.innerHTML = "<tr>"
                +   "<th></th>"
                +   "<th>Ticket ID</th>"
                +   "<th>Client</th>"
                +   "<th>Status</th>"
                +   "<th>Cost</th>"
                + "</tr>";
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
    ra.children[0].children[0].id = "deleteTicketButton" + t;
    ra.children[0].children[0].innerHTML = "<i class='fa fa-trash-o fa-fw'></i>";
    ra.children[1].textContent = t.id;
    ra.children[1].id = "id_" + t.id;
    ra.children[2].textContent = t.client;
    ra.children[2].id = "client_" + t.client;
    ra.children[3].textContent = t.status;
    ra.children[3].id = "status_" + t.status;
    ra.children[4].innerHTML = "&#36;" + t.cost.toLocaleString();
    ra.children[4].id = "cost_" +t.cost;
    ta.appendChild(ra.cloneNode(true));
  });
}
