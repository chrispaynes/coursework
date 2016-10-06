function getTable() {
  return document.getElementsByTagName("tbody")[0];
}

// createNode creates a new node with text content,
// and an array of optional element attributes.
// createNode(node *obj, attrs *array obj) => *html obj
function createNode(node, attrs) {
  var n = document.createElement(Object.keys(node));
  n.textContent = node[Object.keys(node)]

  if(attrs) {
    // attrs.map maps over attrs array setting element
    // attributes for each key/value pair.
    attrs.map(function(a) {
      var key = Object.keys(a);
      var value = a[Object.keys(a)];
      n.setAttribute(key, value);
    });
  }
  return n;
}

// createHeader creates a table header with table column names.
// createHeader(columns *array obj, header_id *string) => *html obj
function createHeader(columns, header_id) {
  if(document.getElementById(header_id) === null ) {
    var header = createNode({"tr": ""}, [{"id": header_id}]);
    var table = getTable();

    // columns.map maps over columns array adding a column for each element.
    columns.map(function(c) {
      header.appendChild(createNode({"th": c}));
    });

    // table.insertBefore inserts the header as the first child node.
    table.insertBefore(header, table.childNodes[0]);
  } else {
    return;
  }
}

// writeTicket returns a ticket object's properties to the DOM.
// writeTicket(ticket *obj)
function writeTicket(ticket) {
  var record = createNode({"tr": ""}, [{"id": "record"}]);
  var btns = createNode({"td": ""}, [{"id": "btns"}]);
  var delete_btn = createNode({"button": ""}, [{"class": "delete_btn"}]);

  delete_btn.id = ticket.id
  delete_btn.appendChild(createNode({"i": ""}, [{"class": "fa fa-trash-o fa-fw"}]))
  btns.appendChild(delete_btn);
  btns.id = "deleteTicketButton" + ticket.id
  record.appendChild(btns);
  record.appendChild(createNode({"td": ticket.id}, [{"id": "id_" + ticket.id}]));
  record.appendChild(createNode({"td": ticket.client}, [{"id": "client_" + ticket.id}]));
  record.appendChild(createNode({"td": ticket.status}, [{"id": "status_" + ticket.id}]));
  record.appendChild(createNode({"td": "$" + ticket.cost.toLocaleString()}, [{"id": "cost_" + ticket.id}]));

  getTable().appendChild(record);

};

// emptyTable clears out the table contents except for the header.
function emptyTable() {
  var table = getTable();
  if(table.childNodes[1]) {
    table.removeChild(table.childNodes[1]);
    emptyTable();
  }
  return;
}

// initializes the table by removing records
function initTable() {
}

// getTicketIndex uses a ticket value to retrieve the ticket's database index.
// getTicketIndex(queryId *int) => *int | *undefined
function getTicketIndex(queryId) {
  // searchDBIndex() is a private callback function that searches the database
  // for a ticket_id's index value. Returns true if it finds a match.
  // searchDBIndex(element *obj, index *int, array *obj) => *bool
  function searchDBIndex(element, index, array) {
    // "this" is queryId.toString()
    if(element.id == this) {
      return true;
    }
  }
  // queryId.toString() is a closure passed as "this" within searchDBIndex().
  return ticket_db.findIndex(searchDBIndex, queryId.toString())
}

// isNumberWithinRange(num, n1, n2) ensures a number is an integer between a specific integer range.
// Accepts range numbers in any order and sorts them in ascending order.
// isNumberWithinRange(num *int, n1 *int|*float, n2 *int|*float) => *bool
function isNumberWithinRange(num, n1, n2) {
  var range = [n1, n2]
  range.sort(function(a, b) {
    return a - b;
  });

  return Number.isInteger(num) && (num >= range[0]) && (num <= range[1]);
  // return Number.isInteger(num) && (num >= min) && (num <= max);
}

// verify(condition *obj, message *string) => *bool
function verify(condition, message) {
  if(condition) {
    return true;
  }
  else {
    alert(new Error(message));
    return false;
  }
}

// function populateTable(ta *object, ra)
// ta = DOM table body
function populateTable(ta, ra) {
  ticket_db.map(function(t) {
    writeTicket(t)
  });
  document.getElementsByTagName("tbody")
}
