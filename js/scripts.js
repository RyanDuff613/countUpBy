$(document).ready(function(){

  $('#theForm').submit(function(event){
    event.preventDefault();
    var number1 = $('#number1').val();
    var number2 = $('#number2').val();
    console.log(number1, number2);

    for (var index = 0; index >= number1; index += number2) {
      $('#output').text(index);
      console.log(index);
    }

  });
});
