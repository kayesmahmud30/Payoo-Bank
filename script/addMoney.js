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
    alert(`Add Money Successful from ${bankAccount} at ${new Date()}`);
    setBalance(newBalance);

    //Add the transaction to history
    //1. Grab history-container.
    const history = document.getElementById("history-container");

    //2. Create new div.
    const newHistory = document.createElement("div");

    //3. Add innerHTML in new div.
    newHistory.innerHTML = `<div class="transactions-card p-5 bg-base-100">
    Add Money Successful from ${bankAccount},
    A/C No ${accNo}
     at ${new Date()}
    </div>`;

    //4. Append the new div to history-container.
    history.append(newHistory);
  } else {
    alert("Invalid PIN");
    return;
  }
});
