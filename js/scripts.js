//business logic
function pingPong(input) {
  var arrayOfNumbers = [];
  for (var i = 1; i <= input; i++) {
    if (i % 15 === 0) {
      arrayOfNumbers.push("pingpong");
    } else if (i % 5 === 0) {
      arrayOfNumbers.push("pong");
    } else if (i % 3 === 0) {
      arrayOfNumbers.push("ping");
    } else {
      arrayOfNumbers.push(i);
    }
  }
  return arrayOfNumbers;
}

//UI
$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    $("#output ul").empty();
    var userInput = $("#userInput").val();
    $("#userInput").val("");
    var answer = pingPong(userInput);
    answer.forEach(function(item) {
      $("#output ul").append("<li>" + item + "</li>");
    })

    // $("#output div h2").append(pingPong($("#userInput").val()));
  });
});
