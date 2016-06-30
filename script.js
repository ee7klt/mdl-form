var email = document.getElementById('email');
var phone = document.getElementById('phone');
var first = document.getElementById('firstName');
var last = document.getElementById('lastName');
var contact = document.getElementById('contactform');
var uploadButton = document.getElementById('resume_upload_button');
var resumeUpload = document.getElementById('resumeupload');
var fileInputText = document.getElementById('file_input_text');
var fileInputTextDiv = document.getElementById('file-input-text-div');

//var msg = document.getElementById('status');








//
// essayText.addEventListener('keyup', function() {
//   var words = essayText.value.match(/\S+/g).length;
//   window.console.log(words);
//   if (words > 10) {
//     nextEssay.disabled = false;
//   } else {
//     nextEssay.disabled = true;
//   }
//
// })

// resumeUpload is a hidden input field
// 'change' watches for when the filename text appears on this field
resumeUpload.addEventListener('change', function() {
  window.console.log('file input changed');

  // extract only the filename (modulo path to it)
  var fullPath = resumeUpload.value;
  if (fullPath) {
    var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
    var filename = fullPath.substring(startIndex);
    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
      filename = filename.substring(1);
    }

  }

  // fileInputText: input field styled in MDL fashion
  // this is NOT hidden and will display the extracted filename from above
  // if there is a file
  // otherwise displays ''
  fileInputText.value = (typeof filename === 'undefined') ? '': filename;

  // activate the MDL underline if there is a  valid file in the input field
  // .is-focused initiates the transition
  if (fileInputText.value.length != 0) {
    fileInputTextDiv.classList.add('is-focused');
  } else {
    fileInputTextDiv.classList.remove('is-focused');
  }
})






  // contactform.addEventListener('keyup',function() {
  //   // window.console.log('form valid? ' + myform.checkValidity());
  //   window.console.log('button disabled?' + nextContact.disabled);
  //   if(first.validity.valid && last.validity.valid && mobile.validity.valid && mail.validity.valid) {
  //   nextContact.disabled=false;
  //   }
  //   else {
  //     nextContact.disabled=true;
  //   }
  // });
/*
  $('#next').click(function() {
    window.console.log('submit button pressed');
    // $('#mycard').hide();
  });


  $('#essaytext').keyup(function() {


  });

  */
