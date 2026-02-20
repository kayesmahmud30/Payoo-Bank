document.getElementById("login-btn").addEventListener("click", function () {
  //1. Get the mobile number.
  const numberInput = document.getElementById("input-number");
  const contactNumber = numberInput.value;
  console.log(contactNumber);

  //2. Get the PIN.
  const inputPin = document.getElementById("input-pin");
  const pin = inputPin.value;
  console.log(pin);

  //3. Match the PIN & Mobile Number.
  if (contactNumber == "01234567890" && pin == "1234") {
    //3-1. true:::>> alert> homepage
    alert("Login Successful");
    window.location.assign("/home.html");
  } else {
    //3-2. false:::>> alert> return
    alert("Login Failed");
    return;
  }
});
