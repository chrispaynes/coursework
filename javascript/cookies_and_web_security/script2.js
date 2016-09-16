"use strict";

// stores collection of name/value pair query strings
var queryArray = [];

// populateInfo() verifies if the location's search object has value
// if so, holds the value as queryData
function populateInfo() {
  if(location.search) {
    // returns the querystring part of a URL without the leading "?"
    var queryData = location.search.substring(1, location.search.length);

    // stores the DOM's hidden input fields
    // slices hidden inputs into a true array
    var hiddenInputs = document.querySelectorAll("input[type=hidden]");
    hiddenInputs = Array.prototype.slice.call(hiddenInputs);

    // splits queryData name-value pairs at each "&"
    // and stores pairs as "name=value" text strings within an array
    queryArray = queryData.split("&");

    // maps hidden input values into hidden DOM input fields
    // extracts value text from key-value pair and returns it as a string
    hiddenInputs.map(function(h, i) {
      h.value = queryArray[i].substring(queryArray[i].lastIndexOf("=") + 1);
    });
  }
}

function createCookies() {
  // stores references for all hidden, radio and textarea input fields
  // slices reference collection into an array
  var formFields = document.querySelectorAll("input[type=hidden], input[type=radio], textarea");
  formFields = Array.prototype.slice.call(formFields);

  // creates an expiresDate 7 days from the current date
  var expiresDate = new Date();
  expiresDate.setDate(expiresDate.getDate() + 7);


  // maps over each input element and uses global RegExp to replace "+" with " "
  // then creates a cookie using the field's name, an equal sign and the field's value
  formFields.map(function(f) {
    var currentValue = decodeURIComponent(f.value);
    currentValue = currentValue.replace(/\+/g, " ");
    document.cookie = f.name + "=" + currentValue + "; expires=" + expiresDate.toUTCString();
  });
}

// handleSubmit(evt *object) prevents the form from submitting without creating cookies
function handleSubmit(evt) {
  if(evt.preventDefault) {
    evt.preventDefault();
  } else {
    evt.returnValue = false;  // prevents form from submitting in IE8
  }
  createCookies();
  document.getElementsByTagName("form")[0].submit();
}

// createEventListeners() calls handleSubmit to create form cookies
// and then calls the submit function.
function createEventListeners() {
  var form = document.getElementsByTagName("form")[0];

  if(form.addEventListener) {
    form.addEventListener("submit", handleSubmit, false);
  } else if (form.attachEvent) {
    form.attachEvent("onsubmit", handleSubmit);
  }

}

// configures page to create event listeners
// and populate the page with query data
function setUpPage() {
  createEventListeners();
  populateInfo();
}

// calls populateInfo on page load
if(window.addEventListener) {
  window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", setUpPage);
}