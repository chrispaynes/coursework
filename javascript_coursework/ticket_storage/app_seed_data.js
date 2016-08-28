// parallel data arrays
var idArr = [100000, 200000, 300000, 400000, 500000, 600000];
var clientArr = ["clientA", "clientB", "clientC", "clientD", "clientE", "clientF"];
var statusArr = ["statusA", "status2", "status99", "statusXYZ", "status44R", "status004"];
var costArr = [100, 200, 300, 44044, 88895, 9345];

// Ticket(id *int, client *string, status *string, cost, *int)
function Ticket(id, client, status, cost) {
  this.id = id;
  this.client = client;
  this.status = status;
  this. cost = cost;
}

var ticket_db = [
 new Ticket(100000, "clientA", "statusA", 10),
 new Ticket(200000, "clientB", "statusB", 200),
 new Ticket(300000, "clientC", "statusC", 3000),
 new Ticket(400000, "clientD", "statusD", 40000),
 new Ticket(500000, "clientE", "statusE", 500000),
 new Ticket(600000, "clientF", "statusF", 6000000),
 new Ticket(700000, "clientG", "statusG", 70000000)
];