var mail = document.getElementById('mail');

//var msg = document.getElementById('status');
mail.addEventListener("keyup", function () {
  // Each time the user types something, we check if the
  // email field is valid.
  //window.console.log('email is valid? ' +mail.validity.valid);
}, false);

$(function() {


  $('#mail').keyup(function() {
    window.console.log(mail.validity.valid);
    if(mail.validity.valid) {
      $('#next').removeClass("hidden");
    }
    else {
      $('#next').addClass("hidden");
    }
  });

});
