$(document).ready(function(){

  $('#theForm').submit(function(event){
    var number1 = $('#number1').val();
    var number2 = $('#number2').val();
    console.log(number1, number2);

    event.preventDefault();
  });
  
});
