//Business Logic
var gameEquation = function(userNumberInput) {
  var arrayResult = [];
  for (var inputCountUp = 1; inputCountUp <= userNumberInput; inputCountUp += 1) {
    if (((inputCountUp % 3) === 0) && ((inputCountUp % 5) === 0)) {
      arrayResult.push("pingpong");
    } else if ((inputCountUp % 3) === 0) {
      arrayResult.push("ping");
    } else if ((inputCountUp % 5) === 0) {
      arrayResult.push("pong");
    } else {
      arrayResult.push(inputCountUp);
    }
  }
  return arrayResult;
}


//User Interface Logic
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    var userNumberInput = parseInt($("input#number-input").val());

    var arrayResult = gameEquation(userNumberInput);

    $("#pingpong-result").text(arrayResult);
    $("#result, #pingpong-result").slideToggle();
    $("#initial-display").slideToggle();
  });
  $("#reset-btn").click(function(event) {
    location.reload();
  });
});































// Experimentation
// var userCount = [(userInput - (userInput - 1)),(userInput - (userInput - 2)),(userInput - (userInput - 3)),(userInput - (userInput - 4)), userInput]

// [uI-(uI-1)],[uI-(uI-2)],[uI-(uI-3)],...,[uI-(uI-(uI-1))],[uI]

// var inputSplit = [!userInput];

// for (var i = 0; i < userInput; i ++) {
//   var userCount = [userInput,(userInput - (userInput - i))];
// }
