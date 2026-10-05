 var text = "SUPRIYA NAGARAJAN | PORTFOLIO";
 let i = 0;

function typingEffect() {
  if (i < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 100);
  }
}
typingEffect();

let skillsBtn = document.getElementById("skills-btn");
let skillsPopup = document.getElementById("skills-popup");
let closeBtn = document.getElementById("close-btn");
skillsBtn.onclick=function() {
  skillsPopup.style.display = "flex";
}
closeBtn.onclick=function() {
  skillsPopup.style.display = "none";
}

let sendMsgBtn = document.getElementById("send-msg");
sendMsgBtn.onclick = function() {
  document.getElementById("message-popup").style.display = "flex";
}

let submitBtn = document.getElementById("submit-btn");
submitBtn.onclick = function() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value; 
  
  if (name === "" || email === "" || message === "") {
    document.getElementById("error-msg").style.display = "block";                                             
    return;
  }

  let mailtoLink = "mailto:supriyanagarajan710@gmail.com?subject=Message from " + encodeURIComponent(name) + "&body=" + encodeURIComponent(message);
  window.location.href = mailtoLink;
  document.getElementById("message-popup").style.display = "flex";

}
let closeMsgBtn = document.getElementById("close-msg-btn");
closeMsgBtn.onclick = function() {
  document.getElementById("message-popup").style.display = "none";
}

