function viewUsers() {
  var xhr = new XMLHttpRequest();
  var headers = ['First Name', 'Last Name', 'Title', 'Username', 'Email'];
  xhr.open('GET', 'data/queries/all_users.php', true);

        // Send the proper header information along with the request
  xhr.setRequestHeader('Content-type', 'application/json');

  xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
      var obj = JSON.parse(xhr.responseText);
      jsonToHTML(obj, 'users', headers);
    }
  };

  xhr.send();
}

function jsonToHTML(json) {
  return json;
}

function forumIndex() {
    // var xhr = new XMLHttpRequest();
    // var headers = ["subforumName", "subforumDescription", "subforumThreads", "subforumPosts", "subforumLastUpdated"];
  var obj = {};
    // xhr.open("GET", "data/queries/forum_index.php", true);

    // //Send the proper header information along with the request
    // xhr.setRequestHeader("Content-type", "application/json");

    // // xhr.onreadystatechange = function() {
    // //     if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
    // //         obj = JSON.parse(xhr.responseText);
    // //         console.log("onreadystatechange", obj)
    // //         // jsonToHTML(obj, "forumIndex", headers)
    // //     }
    // // };

    // // xhr.onreadystatechange = function() {

    // // xhr.onload = function () {
    // //   // Request finished. Do processing here.
    // //     obj = xhr.responseText;
    // //     return jsonToHTML(obj)
    // // };

    // xhr.onload = function () {
    //     if (xhr.readyState === xhr.DONE) {
    //         if (xhr.status === 200) {
    //             obj = xhr.responseText;
    //             return jsonToHTML(obj)
    //         }
    //     }
    // };

    // xhr.send();

  axios.get('data/queries/forum_index.php', {
  })
        .then((response) => {
          self.Items = response.data;
          data = JSON.parse(response.data);
          console.log(self.Items);
        })
        .catch((error) => {
          console.log(error);
        });
}
