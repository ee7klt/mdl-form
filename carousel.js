




  var i = 1;
  var n = 4; // number of cards
document.querySelector('.button').addEventListener('click',function() {
  if (i < n) {
 document.getElementById('content').style.transform = 'translateX('+-300*i+'px)';


  i += 1;
} else if (i === n) {
    document.getElementById('content').style.transform = 'translateX(0px)';
    i = 1;
  }

});
