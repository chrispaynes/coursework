// foreign key to link ticket data across parallel arrays
var foreignKey = 0;
var tbl = document.getElementsByTagName("tbody")[0];
var record = document.getElementById("schedule");

// // initializes the table by removing records
// function initTable() {
//   tbl.innerHTML = "<tr>"
//                 +   "<th></th>"
//                 +   "<th>#</th>"
//                 +   "<th>Ticket ID</th>"
//                 +   "<th>Client</th>"
//                 +   "<th>Status</th>"
//                 +   "<th>Cost</th>"
//                 + "</tr>";
// }

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

// function populateTable(table_arg, record_arg) {
//   for (var i in idArr) {
//     record_arg.id = "schedule_" + idArr[i];
//     record_arg.children[0].children[0].id = "deleteTicketButton" +idArr[i];
//     record_arg.children[0].children[0].innerHTML = "<i class='fa fa-trash-o fa-fw'></i>";
//     record_arg.children[1].textContent = i;
//     record_arg.children[1].id = "foreign_key_" + idArr[i];
//     record_arg.children[2].textContent = idArr[i];
//     record_arg.children[2].id = "id_" + idArr[i];
//     record_arg.children[3].textContent = clientArr[i];
//     record_arg.children[3].id = "client_" + idArr[i];
//     record_arg.children[4].textContent = statusArr[i];
//     record_arg.children[4].id = "status_" + idArr[i];
//     record_arg.children[5].innerHTML = "&#36;" + costArr[i].toLocaleString();
//     record_arg.children[5].id = "cost_" +idArr[i];
//     table_arg.appendChild(record_arg.cloneNode(true));
//   }
// }

// function populateTable(ta *object, ra)
// ta = DOM table body
function populateTable(ta, ra) {
  console.log("ta:", typeof(ta), ta)
  console.log("ra:", typeof(ra), ra)
  // ticket_db.map(function(t *object) {
  ticket_db.map(function(t) {
    // ra.id = "schedule_" + t;
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