function ValidateEmail(email) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.value.match(mailformat)) {
    if (document.getElementById("error_msg").style.display == "none")
      document.getElementById("error_msg").style.display = "block";
      emailform.reset();
  } else document.getElementById("error_msg").style.display = "none";
    emailform.reset();
}


