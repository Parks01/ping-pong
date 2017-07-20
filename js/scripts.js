//logic










//UI
$(document).ready(function(){
$("form").submit(function(event){
event.preventDefault();
var firstName = $("input#firstName").val();
var lastName = $("input#lastName").val();
alert(firstName + lastName);
});
});
