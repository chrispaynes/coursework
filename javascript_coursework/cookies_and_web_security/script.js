"use strict"

// clearCookies() creates a list of current cookies and sets
// their expire date to 7 days in the past, thus deleting
// the cookie
function clearCookies() {
  var cookieString = document.cookie;
  var cookieArray = cookieString.split("; ");
  var expiresDate = new Date();
  expiresDate.setDate(expiresDate.getDate() - 7);

  cookieArray.map(function(c) {
    document.cookie = c + "; expires=" + expiresDate.toUTCString();
  });
}

// calls populateInfo on page load
if(window.addEventListener) {
  window.addEventListener("load", clearCookies, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", clearCookies);
}