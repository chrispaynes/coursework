// renderSearchForm creates an html form used to search records.
// renderSearchForm() => *html obj
function renderSearchForm(){
  var app = document.getElementById("app");
  var tr = createNode({"tr": ""}, [{"id": "read_cntr"}]);
  var form = ['<tr id="read_cntr">',
      '<td id="create_ticket_form">',
          '<div class="input_set">',
            '<span for="Ticket Id">Ticket Id</span>',
            '<input type="number" id="read_ticket_id" placeholder="100000" min="100000" maxlength="6">',
          '</div>',
          '<div class="input_set">',
            '<input type="submit" id="read_ticket_submit" class="btn btn-success" value="Search">',
          '</div>',
      '</td>',
  '</tr>'].join("");

  tr.innerHTML = form;

  emptyNode(app);
  return app.appendChild(tr);
};
