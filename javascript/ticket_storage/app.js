// initSchedule creates a schedule instance with an empty table and header.
// initSchedule() => *html obj
function initSchedule() {
  var table = getTable()
  if(table == null) {
    createTable();
  } else {
    emptyNode(table)
  }
  createHeader(["", "Ticket ID", "Client", "Status", "Cost"], "table_header");
}

// createTable creates and appends a table an empty table to the app.
// createTable() => *html obj.
function createTable() {
  var table = createNode({"table": ""}, [{"id": "schedule"}]);
  document.getElementById("app").appendChild(table);
  document.getElementsByTagName("table")[0].appendChild(createNode({"tbody": ""}));
  return table;
}

// getTable returns the contents of the table body.
// getTable() => *html obj
function getTable() {
  return document.getElementsByTagName("tbody")[0];
}

// getSchedule returns the contents of the schedule index.
// getSchedule() => *html obj
function getSchedule() {
  return document.getElementById("schedule");
}

// getApp returns the contents of the app.
// getApp() => *html obj
function getApp() {
  return document.getElementById("app");
}

function emptyNode(node) {
  if(node && node.children.length !== 0 ) {
    node.firstChild.remove();
    emptyNode(node);
  }
  return;
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
  var table = getTable();
  var record = createNode({"tr": ""}, [{"class": "record"}]);
  var btn_cntr = createNode({"td": ""}, [{"id": "deleteTicketButton" + ticket.id},
                                          {"class": "delete_cntr"}]);
  var delete_btn = createNode({"button": ""}, [{"class": "delete_btn"},
                                                {"id": ticket.id}]);

  delete_btn.appendChild(createNode({"i": ""}, [{"class": "fa fa-trash-o fa-fw"}]))
  btn_cntr.appendChild(delete_btn);
  record.appendChild(btn_cntr);
  record.appendChild(createNode({"td": ticket.id}, [{"id": "id_" + ticket.id}]));
  record.appendChild(createNode({"td": ticket.client}, [{"id": "client_" + ticket.id}]));
  record.appendChild(createNode({"td": ticket.status}, [{"id": "status_" + ticket.id}]));
  record.appendChild(createNode({"td": "$" + ticket.cost.toLocaleString()},
                                  [{"id": "cost_" + ticket.id}]));

  if(document.getElementById("schedule")) {
    table.appendChild(record);
  } else {
    initSchedule()
    getTable().appendChild(record);
  }
};

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

function pipeline(func_pipeline) {
  func_pipeline.forEach(function(f) {
    f()
  })
}

// sanitize removes characters that do not match the sanitize_type's regex
// pattern and returns a value limited by a given number of characters.
// sanitize(value *string, sanitize_type *string, char_limit *int) => *string
function sanitize(value, sanitize_type, char_limit) {
  var sanitized_array;
  var sanitize_lookup = {"numeric": /\d/g, "alpha": /[a-zA-Z]/g,
    "alphaNumeric": /[0-9a-zA-Z]/g
  };

  if(value == null || value == "") {
    return "";
  } else {
    sanitized_array = value.match(sanitize_lookup[sanitize_type]);
    return sanitized_array.join("").substr(0, char_limit);
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
