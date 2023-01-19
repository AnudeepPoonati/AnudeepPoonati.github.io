var form = document.getElementById("form");
var name = document.getElementById("fname");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var message = document.getElementById("message");
var submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function(event) {
  event.preventDefault(); // prevent form from submitting
  var userData = {
    name: fname.value,
    email: email.value,
    phone: phone.value,
    message: message.value
  };
  console.log(userData);
  // send userData to the server, or do something else with it
});
