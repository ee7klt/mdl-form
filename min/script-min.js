function setShift(){var e=window.matchMedia("screen and (min-width:600px)");return e.matches?(console.log("viewport is wider than 600px"),"600"):(console.log("viewport is narrower than 600px"),"320")}var email=document.getElementById("email"),phone=document.getElementById("phone"),first=document.getElementById("firstName"),last=document.getElementById("lastName"),contact=document.getElementById("contact"),uploadButton=document.getElementById("resume_upload_button"),resumeUpload=document.getElementById("resumeupload"),fileInputText=document.getElementById("file_input_text"),fileInputTextDiv=document.getElementById("file-input-text-div"),container=document.getElementById("container"),myform=document.getElementById("myform"),submit=document.getElementsByClassName("submit")[0],nexts=document.getElementsByClassName("next"),count=0,Xshift=setShift(),mql=window.matchMedia("screen and (min-width:600px)");mql.addListener(function(e){Xshift=setShift()}),Array.prototype.forEach.call(nexts,function(e){e.addEventListener("click",function(e){container.children[count+1].classList.remove("none"),container.style.transform="translateX("+-Xshift*++count+"px)"})}),submit.addEventListener("click",function(){console.log("submit clicked"),myform.submit()}),resumeUpload.addEventListener("change",function(){window.console.log("file input changed");var e=resumeUpload.value;if(e){var t=e.indexOf("\\")>=0?e.lastIndexOf("\\"):e.lastIndexOf("/"),n=e.substring(t);(0===n.indexOf("\\")||0===n.indexOf("/"))&&(n=n.substring(1))}fileInputText.value="undefined"==typeof n?"":n,0!=fileInputText.value.length?fileInputTextDiv.classList.add("is-focused"):fileInputTextDiv.classList.remove("is-focused")});