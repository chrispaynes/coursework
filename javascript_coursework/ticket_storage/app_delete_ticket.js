function deleteTicket() {
  var deleteTicket = prompt("Enter the ticketId for the ticket you want to delete?");
  var confirmDeletion = "n";

  while (confirmDeletion == "n") {
    console.log("Deleting ticket " + deleteTicket + "...\n");

    var arrDict = {
      1: idArr,
      2: clientArr,
      3: statusArr,
      4: costArr
    };

    deleteForeignKey = getForeignKey(deleteTicket);
    var a;
    for (a in arrDict) {
      arrDict[a].splice(deleteForeignKey, 1);
    }

    //NEED TO DELETE FOREIGN KEY AND SHIFT ALL ELEMENTS DOWN

    confirmDeletion = prompt("Are you sure you want to Ticket #" + deleteTicket + "? y/n?");
  }
  readIndex();
}