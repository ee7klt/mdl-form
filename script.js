var email = document.getElementById('email');
var phone = document.getElementById('phone');
var first = document.getElementById('firstName');
var last = document.getElementById('lastName');
var contact = document.getElementById('contact');
var uploadButton = document.getElementById('resume_upload_button');
var resumeUpload = document.getElementById('resumeupload');
var fileInputText = document.getElementById('file_input_text');
var fileInputTextDiv = document.getElementById('file-input-text-div');
var container = document.getElementById('container');
var myform = document.getElementById('myform');
//var msg = document.getElementById('status');

// if screen width is at least 600px, mql.matches is true.


// when user first lands, check for width and assigne appropriate Xshift
var Xshift = setShift();

function setShift()  { // function statements are hoisted
  var mql = window.matchMedia("screen and (min-width:600px)");
  if (mql.matches) {
    console.log('viewport is wider than 600px')
    return '600px';  // screen is wider than 600px
  } else {
    console.log('viewport is narrower than 600px')
    return '320px';
  }  // screen is less than 600px width
}


// then if user subsequently resizes browser, change the xshift again
var mql = window.matchMedia("screen and (min-width:600px)");
mql.addListener(function(mql) {
    Xshift = setShift();
});

var nexts = document.getElementsByClassName('next')
Array.prototype.forEach.call(nexts, function(element) {
  element.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('next button clicked')
    console.log('shifting by '+ Xshift)
    container.style.opacity = '0.5';
    container.style.transform = 'translateX('+-Xshift+'px)';
  })
})








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





  //
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
