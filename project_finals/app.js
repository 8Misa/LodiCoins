document.getElementById("topUpButton").addEventListener("click", topUpWallet);
document.getElementById("transferButton").addEventListener("click", transferFunds);

let balance = 0;
const historyList = document.getElementById("historyList");

function topUpWallet() {
    const amount = prompt("Enter amount to top up (PESO): ");
    balance += parseFloat(amount);
    document.getElementById("balance").textContent = balance.toFixed(2);
    addHistoryEntry(`Top-up: $${amount}`);
}

function transferFunds() {
    const recipient = document.getElementById("recipient").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (balance >= amount && recipient) {
        balance -= amount;
        document.getElementById("balance").textContent = balance.toFixed(2);
        addHistoryEntry(`Transfer to ${recipient}: -$${amount}`);
    } else {
        alert("Insufficient funds or invalid recipient");
    }
}

function addHistoryEntry(entry) {
    const listItem = document.createElement("li");
    listItem.textContent = entry;
    historyList.appendChild(listItem);
}
