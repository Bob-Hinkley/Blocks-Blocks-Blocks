$(document).ready(function() {



  $('button').on('click', function() {

    var colors = '#';

    //applies random 6 numbers to the variable 'colors'
    for (var i = 0; i < 6; i++) {
      colors += randomNumber(0, 9);
    };
    console.log(colors);


      // console.log('Click detected, initiating Fun Times');
    $('body').append('<div class="box" style="background-color: ' + colors + ';"><button class="delete">x</button></div>');

  });

  $('body').on('click', '.delete', function() {
     $(this).closest('.box').remove();
    console.log('Deleting box');
  });

  function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
  };

});
