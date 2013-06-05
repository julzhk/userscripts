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
  var script2 = document.createElement("script");
  var script3 = document.createElement("link");
  script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js");
  script2.setAttribute("src", "//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js");
  script3.setAttribute("href", "//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css");   
  script3.setAttribute("rel", "stylesheet");   
  script.addEventListener('load', function() {
  var script = document.createElement("script");
  script.textContent = "(" + callback.toString() + ")();";
  document.body.appendChild(script);   
    document.body.appendChild(script2);
    document.body.appendChild(script3);
  }, false);
    document.body.appendChild(script);
    document.body.appendChild(script2);
    document.body.appendChild(script3); 
}
 
// the guts of this userscript
function main() {
//  alert("There are " + $('a').length + " links on this page.");
    var modalcontent = '<a href="#myModal" role="button" class="btn" data-toggle="modal">Launch demo modal</a>'+
    '<div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
    '<div class="modal-header">'+
    '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>'+
    '<h3 id="myModalLabel">Modal header</h3>'+
    '</div>'+
    '<div class="modal-body">'+
    ' <p>There are ' + $('a').length + ' links on this page.</p>' + 
    '</div>'+
    '<div class="modal-footer">'+
    '<button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>'+
    '<button class="btn btn-primary">Save changes</button>'+
    '</div>'+
'</div>';

//    $('h1').append('woow!');
	$('div').append(modalcontent);    
}

// load jQuery and execute the main function
addJQuery(main);