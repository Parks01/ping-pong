//logic
//var firstNumbers = [1];
//var secondNumbers = [1,2];
//var thirdNumber = [1,2,"ping"];
var firstNumber = ["1"];
var secondNumber = ["2"];
var thirdNumber = ["1", "2", "ping"];
var fourthNumber = ["4","pong"];
var fifthNumber = ["ping","7","8","ping","pong","11","ping","13","14","ping-pong"];





//UI
$(document).ready(function(){
$("#form1").submit(function(event){
event.preventDefault();

var userInput = $("#userInput").val();


if(userInput === firstNumber[0]) {

 $("#output h2").append(firstNumber[0]);

}

if(userInput === secondNumber[0]) {

  var connect = firstNumber.concat(secondNumber);

 $("#output h2").append(connect);

}

var addPing = thirdNumber.join();

if(userInput === "3") {

$("#output h2").append(addPing);

}

var secondPing = thirdNumber.concat(fourthNumber);

if(userInput === "5") {

$("#output h2").append(secondPing);

}

var firstPong = secondPing.concat(fifthNumber);

if(userInput === "15") {

$("#output h2").append(firstPong);

}



  });
});
