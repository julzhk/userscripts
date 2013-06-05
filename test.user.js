// ==UserScript==
// @name       Testing Userscripts
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  Pop up a form dialogue
//  @match      http://*/*
// @copyright  NA
// ==/UserScript==
function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

// the guts of this userscript
function main() {
  alert("There are " + $('a').length + " links on this page.");
}

// load jQuery and execute the main function
addJQuery(main);
