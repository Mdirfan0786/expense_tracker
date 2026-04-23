import { transactions } from "../store/transactionStore.js";

const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");

export function updateSummary() {
  const amounts = transactions.map((t) => t.amount);

  // calculations
  const total = amounts.reduce((acc, amt) => acc + amt, 0);
  const income = amounts
    .filter((a) => a > 0)
    .reduce((acc, val) => acc + val, 0);
  const expense = amounts
    .filter((a) => a < 0)
    .reduce((acc, val) => acc + val, 0);

  // update values
  balanceEl.textContent = `₹${total.toFixed(2)}`;
  incomeEl.textContent = `₹${income.toFixed(2)}`;
  expenseEl.textContent = `₹${Math.abs(expense).toFixed(2)}`;

  // remove old color classes
  balanceEl.classList.remove("balance-positive", "balance-negative");

  // apply color based on value
  if (total >= 0) {
    balanceEl.classList.add("balance-positive");
  } else {
    balanceEl.classList.add("balance-negative");
  }

  // animation trigger
  balanceEl.classList.remove("balance-animate");
  void balanceEl.offsetWidth;
  balanceEl.classList.add("balance-animate");
}
