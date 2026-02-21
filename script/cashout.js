document.getElementById("cashout-btn").addEventListener("click", function () {
  //1. Get the agent number & validate.
  const cashoutNumber = getValueFromInput("cashout-number");
  if (cashoutNumber.length != 11) {
    alert("Invalid Agent Number");
    return;
  }

  //2. Get the amount, validate, convert to number.
  const cashoutAmount = getValueFromInput("cashout-amount");

  //3. Get the current balance, validate, convert to number.
  const currentBalance = getBalance();

  //4. Calculate new balance.
  const newBalance = currentBalance - Number(cashoutAmount);
  console.log(newBalance);
  if (newBalance < 0) {
    alert("You do not have sufferance balance");
    return;
  }

  //5. Get the PIN and verify.
  const pin = getValueFromInput("cashout-pin");
  if (pin == "1234") {
    alert(" Cashout successful");
    setBalance(newBalance);
  } else {
    alert("Invalid PIN");
    return;
  }
});

//------------------------------------------------------------------

// document.getElementById("cashout-btn").addEventListener("click", function () {
//   //1. Get the agent number & validate.
//   const cashoutNumberInput = document.getElementById("cashout-number");
//   const cashoutNumber = cashoutNumberInput.value;
//   console.log(cashoutNumber);
//   if (cashoutNumber.length != 11) {
//     alert("Invalid Agent Number");
//     return;
//   }

//   //2. Get the amount, validate, convert to number.
//   const cashoutAmountInput = document.getElementById("cashout-amount");
//   const cashoutAmount = cashoutAmountInput.value;
//   console.log(cashoutAmount);

//   //3. Get the current balance, validate, convert to number.
// const balanceElement = document.getElementById("balance");
// const balance = balanceElement.innerText;
// console.log(balance);

//   //4. Calculate new balance.
//   const newBalance = Number(balance) - Number(cashoutAmount);
//   console.log(newBalance);

//   if (newBalance < 0) {
//     alert("You do not have sufferance balance to cashout $" + cashoutAmount);
//     return;
//   }
//   //5. Get the PIN and verify.
//   const cashoutPinInput = document.getElementById("cashout-pin");
//   const pin = cashoutPinInput.value;
//   if (pin == "1234") {
//     //5-1. true:: show an alert > set new balance.
//     alert(
//       "$" +
//         cashoutAmount +
//         " Cashout successful \nYour New balance is $" +
//         newBalance,
//     );

// balanceElement.innerText = newBalance;
//   } else {
//     //5-2. true:: show an error alert > return.
//     alert("Invalid PIN");
//     return;
//   }
// });
