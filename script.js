var mail = document.getElementById('mail');
var contactform = document.getElementById('contactform');
var uploadButton = document.getElementById('resume-upload');
var resumeUpload = document.getElementById('resume-upload');
var fileInputText = document.getElementById('file_input_text');
var fileInputTextDiv = document.getElementById('file-input-text-div');
var nextFile = document.getElementById('nextfile');
var essayText = document.getElementById('essaytext');
var nextEssay = document.getElementById('nextessay');
var nextContact = document.getElementById('next');
var nextButton = document.querySelectorAll('.next');
var cards = document.getElementById('cards');
//var msg = document.getElementById('status');


nextContact.addEventListener('click',function() {
  window.console.log('nextContact button clicked');
  cards.style.transform ='translateX('+-800+'px)';


});

nextEssay.addEventListener('click',function() {
  window.console.log('nextEssay button clicked');
  cards.style.transform ='translateX('+-800*2+'px)';


});


essayText.addEventListener('keyup', function() {
  var words = essayText.value.match(/\S+/g).length;
  window.console.log(words);
  if (words > 0) {
    nextEssay.disabled = false;
  } else {
    nextEssay.disabled = true;
  }

})

mail.addEventListener("keyup", function () {
// deprecated in favor of 'required' keyword on the field
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
    nextFile.disabled=false;
  } else {
    fileInputTextDiv.classList.remove('is-focused');
    nextFile.disabled=true;
  }
})






  contactform.addEventListener('keyup',function() {
    window.console.log('form valid? ' + contactform.checkValidity());
    window.console.log('button disabled?' + nextContact.disabled);
    if(contactform.checkValidity()) {
    nextContact.disabled=false;
    }
    else {
      nextContact.disabled=true;
    }
  });
/*
  $('#next').click(function() {
    window.console.log('submit button pressed');
    // $('#mycard').hide();
  });


  $('#essaytext').keyup(function() {


  });

  */
