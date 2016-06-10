//Business End Logic
var equation = function(userInput) {

  if (userInput === "3") {
    var replaceThree = "ping";
    $("#pingpong-result").text(replaceThree);
  } else if (userInput === "5") {
    var replaceFive = "pong";
    $("#pingpong-result").text(replaceFive);
  } else if (userInput === "15") {
    var replaceFifteen = "pingpong";
    $("#pingpong-result").text(replaceFifteen);
  }
}





//User Interface Logic
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#number-input").val();

    $("#pingpong-result").text(equation(userInput));
    $("#result, #pingpong-result").show();
    $("#initial-display").hide();
  });
});
