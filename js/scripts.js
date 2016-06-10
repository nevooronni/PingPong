//Business End Logic
var equation = function(userInput) {
//   var userCount = [(userInput - (userInput - 1)),(userInput - (userInput - 2)),(userInput - (userInput - 3)),(userInput - (userInput - 4)), parseInput]
//
// starts at 1, goes all the way to (userInput-1)
//
// [uI-(uI-1)],[uI-(uI-2)],[uI-(uI-3)],...,[uI-(uI-(uI-1))],[uI]
// debugger;


  // if (((userInput % 3) === 0) && ((userInput % 5) === 0)) {
  //   userInput = "pingpong";
  // } else if ((userInput % 3) === 0) {
  //   userInput = "ping";
  // } else if ((userInput % 5) === 0) {
  //   userInput = "pong";
  // } else {
  // }
  // $("#pingpong-result").text(userInput);
}





//User Interface Logic
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#number-input").val());

    $("#pingpong-result").text(equation(userInput));
    $("#result, #pingpong-result").show();
    $("#initial-display").hide();
  });
});
