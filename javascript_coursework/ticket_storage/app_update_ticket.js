
// updates ticket information across parallel arrays
function updateTicket() {
  var revisionProperty = "";
  var revisionValue;
  var revTicket = 0;
  var revTicketIndex = -1;
  // var revTicket = prompt("Enter the ticketId for the ticket you want to update?"); 
  var endUpdateTicket = "n";
  var selection;

  // lookup dictionaries
  var selectionDict = {
    1: "Ticket Id",
    2: "Client Name",
    3: "Ticket Status",
    4: "Production Cost"
  };

  var arrDict = {
    1: idArr,
    2: clientArr,
    3: statusArr,
    4: costArr
  };

var validID = "n"

  while(revTicketIndex === -1){
    revTicket = prompt("Input a ticket id to update a production ticket");
    revTicketIndex = idArr.indexOf(parseInt(revTicket));
    
    if(revTicketIndex === -1){
      alert("submit an existing production ticket id");
    } else {
      revTicketIndex = idArr.indexOf(parseInt(revTicket));
    }
  }

  while (endUpdateTicket == "n") {
    console.log("Updating ticket " + revTicket + "...");
    selection = prompt("select your update" +
      "\n1. Ticket Id" +
      "\n2. Client Name" +
      "\n3. Ticket Status" +
      "\n4. Production Cost"
    );



    revTicket = getForeignKey(revTicket);
    
    revisionProperty = selectionDict[selection];
    revisionValue = prompt("enter a new " + revisionProperty);
    arrDict[selection][revTicket] = revisionValue;
    endUpdateTicket = prompt("Are you finished updating? y/n?");
  }
  readIndex();
}