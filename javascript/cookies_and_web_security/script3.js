"use strict";

function parseData() {
  // references the documents stored cookies
  var formData = document.cookie;

  // stores collection of name/value pair formArrays
  var formArray = [];

  // stores reference to DOM's results <ul>
  var list = document.querySelector("div.results ul");

  // splits queryData name-value pairs at each "; "
  // and stores pairs as "name=value" text strings within an array
  formArray = formData.split("; ");

  // maps over key-value strings in formArray
  // creating a new <li> and insert the string value as the innerHTML
  // then appending the <li> to the DOM's results <ul>
  formArray.map(function(f) {
    var newItem = document.createElement("li");
    newItem.innerHTML = f;
    list.appendChild(newItem);
  });
}

// calls parseData on page load
if(window.addEventListener) {
  window.addEventListener("load", parseData, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", parseData);
}