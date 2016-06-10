//User Interface Logic

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#ping-pong-input").val());

    $("#ping-pong-result").text(result);
    $("#result").show();
  });
});


//Business End Logic

var equation = function(userInput) {
  
}
