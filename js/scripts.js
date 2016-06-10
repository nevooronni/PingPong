//User Interface Logic
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#number-input").val();

    $("#pingpong-result").text(equation(userInput));
    // $("#result").slideUp();
    $("#result, #pingpong-result").show();
    $("#initial-display").hide();
  });
});



//Business End Logic
var equation = function(numberInput) {
  var result = "";

}
