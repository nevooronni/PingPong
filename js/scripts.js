//Business End Logic
var equation = function(userInput) {

  var userInputParse = parseInt(userInput);
  var userCount = [userInputParse,(userInputParse - 1),(userInputParse - 2),(userInputParse - 3),(userInputParse - (userInputParse-1))];
  var userCountReverse = userCount.reverse();
  $("#pingpong-result").text(userCountReverse);


  // if (userInput === "3") {
  //   var replaceThree = "ping";
  //   $("#pingpong-result").text(replaceThree);
  // } else if (userInput === "5") {
  //   var replaceFive = "pong";
  //   $("#pingpong-result").text(replaceFive);
  // } else if (userInput === "15") {
  //   var replaceFifteen = "pingpong";
  //   $("#pingpong-result").text(replaceFifteen);
  // }
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
