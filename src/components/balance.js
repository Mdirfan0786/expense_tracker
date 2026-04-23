import { transactions } from "../store/transactionStore.js";

const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");

export function updateSummary() {
  const amounts = transactions.map((t) => t.amount);

  const total = amounts.reduce((acc, amt) => acc + amt, 0).toFixed(2);

  const income = amounts
    .filter((a) => a > 0)
    .reduce((acc, val) => acc + val, 0)
    .toFixed(2);

  const expense = amounts
    .filter((a) => a < 0)
    .reduce((acc, val) => acc + val, 0)
    .toFixed(2);

  balanceEl.textContent = `₹${total}`;
  incomeEl.textContent = `₹${income}`;
  expenseEl.textContent = `₹${Math.abs(expense)}`;
}
