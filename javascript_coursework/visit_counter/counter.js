"use strict"

// returns the querystring part of a URL without the leading "?"
// splits queryData name-value pairs at each "&"
// and stores pairs as "name=value" text strings within an array
function queryDecoder() {
  var result = location.search.substring(location.search.indexOf("?") + 1);
  return decodeURIComponent(result).split("&");
}

// checkValue(s *string) maps over an array of query strings to
// tests if a query name is present and has a value
function checkValue(s) {
  var hasValue;
  document.cookie.split(";").map(function(x) {
    if(x.indexOf(s) != -1) {
      hasValue = x.length > s.length;
    }
  });
  return hasValue;
}

// maps querystring name/value pairs to cookies
// and clears URI part of fragment
function mapToCookie() {
  if(window.location.search) {
    queryDecoder().map(function(q) {
      document.cookie = q;
    });
    window.location.search = "";
  }
}

// destroyCookies() maps over all cookies, setting
// their expiration date to Jan, 1, 1970 GMT.
function destroyCookies() {
  document.cookie.split(";").map(function(c) {
    document.cookie = c + "; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  });
  var domCookie = document.getElementById("domCookie");
  domCookie.style.color = "#c9302c";
  domCookie.innerHTML = "COOKIES WERE DESTROYED!";
}

function processCookie() {
  var counter = 0;

  // creates an expiresDate 7 days from the current date
  var expiresDate = new Date();
  expiresDate.setDate(expiresDate.getDate() + 7);

  // getPrevNum() returns the previous visit count number
  function getPrevNum() {
    var pnum = document.cookie.substring(document.cookie.lastIndexOf("=") + 1);
    return parseInt(pnum);
  }

  // if the current count is not a number or is larger than 5
  // reset the count to 0 and increment the counter by one.
  if (getPrevNum() == 5) {
    counter = 0;
  } else if (Number.isInteger(getPrevNum())) {
    counter = getPrevNum() + 1;
  } else {
    counter = 0;
  }

  document.cookie = "visitcount=" + counter + "; expires=" + expiresDate.toUTCString();

  // for every 5 visits, redirects user to page that prompts
  // them to register for an account
  if (counter !== 0 && counter % 5 == 0 && !checkValue("username=")) {
    return window.location.assign("registration.html");
  }
}

function createDestroyBtn(elem) {
  // creates button to delete cookies
  var _btn = document.createElement("input");
  _btn.id = "cookieDestroyer"
  _btn.className = "btn btn-danger"
  _btn.type = "submit";
  _btn.value = "Destroy Cookies";
  elem.innerHTML += "<hr/>"
  elem.appendChild(_btn);

  if (_btn.addEventListener) {
    _btn.addEventListener("click", function() {
      destroyCookies()}, false);
  } else if (_btn.attachEvent) {
    _btn.attachEvent("onclick", function() {
      destroyCookies()});
  }
}

// writeCookies() writes cookie to the DOM
function writeCookie() {

  // writes cookie data to DOM
  var article = document.createElement("article");
  article.innerHTML = "<h3>COOKIE DATA</h3>"
                    + "<hr/>"
                    + "<p id='domCookie'>" + document.cookie.split(" ").sort().toString().replace(/[\,,\;]/g, " ") + "</p>";
  document.body.appendChild(article);

  createDestroyBtn(article);

}

// configures page to create event listeners
function main() {
  mapToCookie();
  processCookie();
  writeCookie();
}

// calls main on page load
if (window.addEventListener) {
  window.addEventListener("load", main, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", main);
}