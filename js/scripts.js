//logic
//var firstNumbers = [1];
//var secondNumbers = [1,2];
//var thirdNumber = [1,2,"ping"];



var firstNumbers = 1;






//UI
$(document).ready(function(){
$("#form1").submit(function(event){
event.preventDefault();

var userInput = $ parseInt("#userInput").val());
console.log(userInput);

if(userInput === firstNumbers){

  alert('hello');
}


  });
});
