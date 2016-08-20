"use strict";

var formValidity = true;
// hidden element that displays a number error message
const numErrorDiv = document.getElementById("numErrorText");

// creates a listing of states from a JSON document
function listStateOptions(state_options, new_element) {
 var option;
 var state_selector = document.getElementById("stateinput");

 for(var i in state_options) {
  option = document.createElement(new_element);
  option.appendChild(document.createTextNode(i))
  state_selector.appendChild(option);
 }
}

// validates required fields are filled out
function validateRequired(inputElements) {
  // creates array of all input fields
  // document.querySelectorAll(inputElements);
  console.log(document.querySelectorAll(inputElements))
  // hidden element that displays a number error message
  var is_valid = true;

  try{
    // loops through the form's input elements
    // checks for empty input values
    // if the input is valid: changes the current element's background color
    // returns invalid for empty inputs
    for(var i in document.querySelectorAll(inputElements)) {
      // validates all input elements in fieldset
      if(numberInputs[i].value == "") {
        numberInputs[i].style.background = "green";
        is_valid = false;
      } else {
        numberInputs[i].style.background = "white";
      }
    }

    // creates error message for hidden errorDiv
    if(is_valid === false) {
      throw "Please complete all fields";
    }
    errorDiv.style.display = "none";
    errorDiv.innerHTML = "";
  }

  // executes statement when the try block throws an exception
  catch(msg) {
    errorDiv.style.display = "block";
    errorDiv.innerHTML = msg;
    formValidity = false;
  }
}

// create event listeners
function createEventListeners() {
  var form = document.getElementsByTagName("form"[0]);
  var ssnFields = document.getElementsByClassName("ssn");

  for(var i = 0; i < ssnFields.length; i++) {
    if(ssnFields[i].addEventListener) {
      ssnFields[i].addEventListener("input", advanceScan, false);
    } else if(ssnFields[i].attachEvent) {
      ssnFields[i].attach("oninput", advanceSsn);
    }
  }

  if(form.addEventListener) {
    form.addEventListener("submit", validateForm, false);
  } else if(form.attachEvent) {
    form.attachEvent("onsubmit", validateForm);
  }
}

function validateNumbers() {
  // creates array of all fields requiring a number input
  var numberInputs = document.querySelectorAll("#contactinfo input[type=number]");
  // the default validity state is set to true unless proven to be false
  var is_valid = true;

  try {
    // loops through the form's numberInput elements
    // checks for non-number values and empty inputs
    // if value isNAN: changes the current element's background color
    // returns invalid for non-number values and empty inputs
    for(var i in numberInputs) {
      // numberInputs[i] = numberInputs[i];
      if(isNAN(numberInputs[i].value) || (numberInputs[i].value === "")) {
        numberInputs[i].style.background = "rgb(255,233,233)";
        is_valid = false;
      } else {
        numberInputs[i].style.background = "white";
      }
    }

    // creates error message for hidden numErrorDiv
    if(is_valid === false) {
      throw "Zip and Social Security values must be numbers";
    }
    numErrorDiv.style.display = "none";
    numErrorDiv.innerHTML = "";
  }

  // executes statement when the try block throws an exception
  catch(msg) {
    numErrorDiv.style.display = "block";
    numErrorDiv.innerHTML = msg;
    formValidity = false;
  }
}

// removes form input's placeholder text
function zeroPlaceholder() {
  var addressBox = document.getElementById("addrinput");
  addressBox.style.color = "black";
  if(addressBox.value === addressBox.placeholder) {
    addressBox.value = "";
  }
}

// restores placeholder text if input field has no entry
function checkPlaceholder() {
  var addressBox = document.getElementById("addrinput");
  if(addressBox.value == "") {
    addressBox.style.color = "rgb(178,184,183)";
    addressBox.value = addressBox.placeholder;
  }
}

// generates placeholder text for browsers that
// don't support placeholder attribute
function generatePlaceholder() {
  if(!Modernizr.input.placeholder) {
    var addressBox = document.getElementById("addrinput");
    addressBox.value = addressBox.placeholder;
    addressBox.style.color = "rgb(178,184,183)";
    if(addressBox.addEventListener) {
      addEventListener("focus", zeroPlaceholder, false);
      addEventListener("blue", checkPlaceholder, false);
    } else if(addressBox.attachEvent ) {
      addressBox.attachEvent("onfocus", zeroPlaceholder);
    }
  }
}

// automatically tabs the cursor forward to the next input
// when the user inputs characters beyond the fields max
// input value
function advanceScan() {
  var ssnFields = document.getElementsByClassName("ssn");
  var currentField = document.activeElement;

  if(currentField.value.length === currentField.maxLength) {
    if(currentField === ssnFields[0]) {
      ssnFields[1].focus();
    }

    if(currentField === ssnFields[1]) {
      ssnFields[2].focus();
    }

    if(currentField === ssnFields[2]) {
      document.getElementById("submitBtn").focus();
    }
  }
}

// limits zip input to 5 integers
zipinput.oninput = function () {
    if(this.value.length > 5) {
      this.value = this.value.slice(0,5);
    }
}

// validates form
function validateForm(evt) {
  if(evt.preventDefault) {
    //prevents form from submitting
    evt.preventDefault();
  } else {
    //prevents form from submitting in IE8
    evt.returnValue = false
  }

  // resets value for revalidation
  formValidity = true;

  validateRequired("#contactinfo input");
  validateNumbers();

  // submits form when input is valid
  if(formValidity === true) {
    document.getElementsByTagName("form")[0].submit();
  }
}

// configures forms initial state
function setUpPage() {
  createEventListeners();
  generatePlaceholder();
  listStateOptions(states, "option");
}

// executes setup functions when page finishes loading
if(window.addEventListener) {
  window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", setUpPage);
}