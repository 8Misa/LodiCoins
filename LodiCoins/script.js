// Simple in-browser data
let wallets = [
  { name: "Alice", balance: 1000 },
  { name: "Bob", balance: 500 }
];

// Display wallets
function displayWallets() {
  const container = document.getElementById("wallets");
  container.innerHTML = "<h3>Accounts</h3>";
  wallets.forEach(w => {
    container.innerHTML += `<p><strong>${w.name}</strong>: ₱${w.balance.toFixed(2)}</p>`;
  });
}

// Top-up balance
function topUp() {
  const name = document.getElementById("topup-name").value.trim();
  const amount = parseFloat(document.getElementById("topup-amount").value);
  if (!name || isNaN(amount) || amount <= 0) {
    alert("⚠️ Enter a valid name and amount.");
    return;
  }

  let user = wallets.find(w => w.name.toLowerCase() === name.toLowerCase());
  if (!user) {
    user = { name, balance: 0 };
    wallets.push(user);
  }
  user.balance += amount;
  displayWallets();
  alert(`✅ ${name} topped up ₱${amount.toFixed(2)}`);
}

// Transfer between users
function transfer() {
  const from = document.getElementById("from-name").value.trim();
  const to = document.getElementById("to-name").value.trim();
  const amount = parseFloat(document.getElementById("transfer-amount").value);

  if (!from || !to || isNaN(amount) || amount <= 0) {
    alert("⚠️ Enter valid names and amount.");
    return;
  }

  const sender = wallets.find(w => w.name.toLowerCase() === from.toLowerCase());
  const receiver = wallets.find(w => w.name.toLowerCase() === to.toLowerCase());

  if (!sender) return alert(`❌ Sender ${from} not found.`);
  if (!receiver) return alert(`❌ Receiver ${to} not found.`);
  if (sender.balance < amount) return alert(`❌ ${from} has insufficient funds.`);

  sender.balance -= amount;
  receiver.balance += amount;
  displayWallets();
  alert(`💸 ${from} sent ₱${amount.toFixed(2)} to ${to}`);
}

// Initialize UI
displayWallets();
