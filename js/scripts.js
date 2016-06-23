//Business Logic
var pingpongGenerator = function(userNumberInput) {
  var resultArray = [];
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
  return resultArray;
}


//User Interface Logic
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    var userNumberInput = parseInt($("input#number-input").val());
    var resultArray = pingpongGenerator(userNumberInput);
    $("#pingpong-result").text(resultArray);
    $("#result, #pingpong-result").slideToggle();
    $("#initial-display").slideToggle();
  });
  $("#reset-btn").click(function(event) {
    location.reload();
  });
});
