// Machine ID -> input value.
function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  console.log(id, value);
  return value;
}

//Get balance.
function getBalance() {
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  console.log("Current balance is ", balance);
  return Number(balance);
}

//Machine value -> set Balance.
function setBalance(value) {
  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = value;
}

//Machine ID -> Hide all -> Show specific one only.
function showOnly(id) {
  const addMoney = document.getElementById("add-money");
  const cashout = document.getElementById("cashout");

  //Hide All.
  addMoney.classList.add('hidden')
  cashout.classList.add('hidden')

  //Show only specific one (provided ID).
  document.getElementById(id).classList.remove('hidden')
}
