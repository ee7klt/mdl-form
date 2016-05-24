var mail = document.getElementById('mail');
var contactform = document.getElementById('contactform');

//var msg = document.getElementById('status');
mail.addEventListener("keyup", function () {
  // Each time the user types something, we check if the
  // email field is valid.
  //window.console.log('email is valid? ' +mail.validity.valid);
}, false);

$(function() {


  $('#contactform input').keyup(function() {
    window.console.log(contactform.checkValidity());
    if(contactform.checkValidity()) {
      $('#next').prop('disabled',false);
    }
    else {
      $('#next').prop('disabled',true);
    }
  });

  $('#next').click(function() {
    window.console.log('submit button pressed');
    $('#mycard').hide();
  });


  $('#essaytext').keyup(function() {
     var words = this.value.match(/\S+/g).length;
     window.console.log(words);
     if (words > 50) {
       $('#nextessay').prop('disabled', false);
     } else {
       $('#nextessay').prop('disabled', true);
     }


  });

});
