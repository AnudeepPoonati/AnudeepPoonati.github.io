var form = document.getElementById("form");
var name = document.getElementById("name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var message = document.getElementById("message");
var submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function(event) {
  event.preventDefault(); // prevent form from submitting
  var userData = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    message: message.value
  };
  console.log(userData);
  // send userData to the server, or do something else with it
});
