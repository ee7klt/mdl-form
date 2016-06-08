




  var i = 1;
document.querySelector('.button').addEventListener('click',function() {
  if (i < 3) {
 document.getElementById('content').style.transform = 'translateX('+-300*i+'px)';


  i += 1;
  } else if (i === 3) {
    document.getElementById('content').style.transform = 'translateX(0px)';
    i = 1;
  }

});
