var mail = document.getElementById('mail');
var contactform = $("contactform");
contactform.validate();
//var msg = document.getElementById('status');
mail.addEventListener("keyup", function () {
  // Each time the user types something, we check if the
  // email field is valid.
  //window.console.log('email is valid? ' +mail.validity.valid);
}, false);

$(function() {


  $('#contactform input').keyup(function() {
    window.console.log(contactform);
    if(contactform.valid()) {
      $('#next').prop('disabled',false);
    }
    else {
      $('#next').prop('disabled',true);
    }
  });

});
