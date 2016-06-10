//Business End Logic
var equation = function(numberInput) {
  var result = "";

  for (var i = 0; i <= userInput.length; i ++ ) {

  }
  return result;
}





//User Interface Logic
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#number-input").val();

    $("#pingpong-result").text(equation(userInput));
    $("#result, #pingpong-result").slideUp();
    $("#initial-display").hide();
  });
});
