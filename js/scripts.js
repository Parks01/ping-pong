//logic
//var firstNumbers = [1];
//var secondNumbers = [1,2];
//var thirdNumber = [1,2,"ping"];
var firstNumber = 1;
var secondNumber = [2];
var thirdNumber = [1,2,"ping"];







//UI
$(document).ready(function(){
$("#form1").submit(function(event){
event.preventDefault();

var userInput = $("#userInput").val();


if(userInput === firstNumber) {

 $("#output h1").append(firstNumber);

}


  });
});
