//Business End Logic
var convert = function(userInput) {
  var result = [];
  for (var inputCountUp = 1; inputCountUp <= userInput; inputCountUp += 1) {
    if (((inputCountUp % 3) === 0) && ((inputCountUp % 5) === 0)) {
      result.push("pingpong");
    } else if ((inputCountUp % 3) === 0) {
      result.push("ping");
    } else if ((inputCountUp % 5) === 0) {
      result.push("pong");
    } else {
      result.push(inputCountUp);
    }
  }
  return result;
}


//User Interface Logic
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#number-input").val());

    var result = convert(userInput);

    $("#pingpong-result").text(result);
    $("#result, #pingpong-result").slideToggle();
    $("#initial-display").slideToggle();
  });
});































// Experimentation
// var userCount = [(userInput - (userInput - 1)),(userInput - (userInput - 2)),(userInput - (userInput - 3)),(userInput - (userInput - 4)), userInput]

// [uI-(uI-1)],[uI-(uI-2)],[uI-(uI-3)],...,[uI-(uI-(uI-1))],[uI]

// var inputSplit = [!userInput];

// for (var i = 0; i < userInput; i ++) {
//   var userCount = [userInput,(userInput - (userInput - i))];
// }
