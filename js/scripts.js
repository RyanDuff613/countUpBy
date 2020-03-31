$(document).ready(function(){

  $('#theForm').submit(function(event){
    event.preventDefault();
    var number1 = parseInt($('#number1').val());
    var number2 = parseInt($('#number2').val());
    console.log(number1, number2);
 
    /*for (var index = 0; index <= number1; index += number2) {
      if (number1=NaN || number2=NaN) {
        alert('oops, you need to enter a number for this to work, please refresh page and try again');
      } else if (number1 <= 0 || number2 <= 0) {
        alert('sorry, this page only works with positive numbers');
      } else if (number2 > number1) {
        alert('you cannot count to ' + number1 + ' in increments of '+ number2 + ' because ' + number2 + ' is larger than ' + number1);
      } else {
        $('#output').append(index +',');
      }
    }*/

    for (var index = 0; index <= number1; index += number2) {
      if (number1='NaN') {
        alert('oops, you need to enter a number for this to work, please refresh page and try again');
      } else if (number1 <= 0 || number2 <= 0) {
        alert('sorry, this page only works with positive numbers');
      } else if (number2 > number1) {
        alert('you cannot count to ' + number1 + ' in increments of '+ number2 + ' because ' + number2 + ' is larger than ' + number1);
      } else {
        $('#output').append(index +',');
      }
    }

  });
});
