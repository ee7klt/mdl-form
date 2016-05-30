var mail = document.getElementById('mail');
var contactform = document.getElementById('contactform');
var uploadButton = document.getElementById('resume-upload');
var resumeUpload = document.getElementById('resume-upload');
var fileInputText = document.getElementById('file_input_text');
var fileInputTextDiv = document.getElementById('file-input-text-div');
var nextFile = document.getElementById('nextfile');
//var msg = document.getElementById('status');
mail.addEventListener("keyup", function () {
  // Each time the user types something, we check if the
  // email field is valid.
  //window.console.log('email is valid? ' +mail.validity.valid);
}, false);

resumeUpload.addEventListener('change', function() {
  console.log('file input changed');

  var fullPath = resumeUpload.value;
  if (fullPath) {
    var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
    var filename = fullPath.substring(startIndex);
    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
      filename = filename.substring(1);
    }

  }
  fileInputText.value = (typeof filename === 'undefined') ? '': filename;
  if (fileInputText.value.length != 0) {
    fileInputTextDiv.classList.add('is-focused');
    nextFile.prop('disabled',false);
  } else {
    fileInputTextDiv.classList.remove('is-focused');
    nextFile.prop('disabled',true);
  }
})



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
    // $('#mycard').hide();
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
