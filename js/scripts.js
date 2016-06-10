// //Business End Logic
var equation = function(userInput) {

  for (var i = 1; i <= userInput; i += 1) {
    if (((i % 3) === 0) && ((i % 5) === 0)) {
      alert("pingpong");
    } else if ((i % 3) === 0) {
      alert("ping");
    } else if ((i % 5) === 0) {
      alert("pong");
    } else {
      alert(i);
    }
  }
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





// Experimentation
// var userCount = [(userInput - (userInput - 1)),(userInput - (userInput - 2)),(userInput - (userInput - 3)),(userInput - (userInput - 4)), userInput]
//
// [uI-(uI-1)],[uI-(uI-2)],[uI-(uI-3)],...,[uI-(uI-(uI-1))],[uI]
//
// var inputSplit = [!userInput];
// for (var i = 0; i < userInput; i ++) {
//   var userCount = [userInput,(userInput - (userInput - i))];
// }
