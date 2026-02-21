document.getElementById("add-money-btn").addEventListener("click", function () {
  //1. Get Bank Account.
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount == "Select a Bank") {
    alert("Please select a Bank first");
    return;
  }

  //2. Get Bank Number.
  const accNo = getValueFromInput("add-money-number");
  if (accNo.length != 11) {
    alert("Invalid A/C No");
  }

  //3. Get amount & calculate the new balance.
  const amount = getValueFromInput("add-money-amount");
  const newBalance = getBalance() + Number(amount);

  //4. Get the PIN and verify the PIN Number
  const pin = getValueFromInput("add-money-pin");
  if (pin == "1234") {
    alert(`Add Money Successful from
    ${bankAccount} at ${new Date()}`);
    setBalance(newBalance);
  } else {
    alert("Invalid PIN");
    return;
  }
});
