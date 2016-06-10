//Business End Logic
var convert = function(userInput) {
  for (var inputCountUp = 1; inputCountUp <= userInput; inputCountUp += 1) {
    if (((inputCountUp % 3) === 0) && ((inputCountUp % 5) === 0)) {
      alert("pingpong");
    } else if ((inputCountUp % 3) === 0) {
      alert("ping");
    } else if ((inputCountUp % 5) === 0) {
      alert("pong");
    } else {
      alert(inputCountUp);
    }
  }
}


//User Interface Logic
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#number-input").val());

    $("#pingpong-result").text(convert(userInput));
    $("#result, #pingpong-result").show();
    $("#initial-display").toggle();
  });
});





// Experimentation
// var userCount = [(userInput - (userInput - 1)),(userInput - (userInput - 2)),(userInput - (userInput - 3)),(userInput - (userInput - 4)), userInput]

// [uI-(uI-1)],[uI-(uI-2)],[uI-(uI-3)],...,[uI-(uI-(uI-1))],[uI]

// var inputSplit = [!userInput];

// for (var i = 0; i < userInput; i ++) {
//   var userCount = [userInput,(userInput - (userInput - i))];
// }
