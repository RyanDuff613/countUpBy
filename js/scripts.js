$(document).ready(function(){

  $('#theForm').submit(function(event){
    event.preventDefault();
    var number1 = parseInt($('#number1').val());
    var number2 = parseInt($('#number2').val());
    console.log(number1, number2);
 
    for (var index = 0; index <= number1; index += number2) {
      $('#output').append(index +',');
    }

  });
});
