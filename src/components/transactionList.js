import { transactions, updateLocalStorage } from "../store/transactionStore.js";

import { updateSummary } from "./balance.js";

const transactionsList = document.getElementById("transactions");

export function renderTransactions() {
  transactionsList.innerHTML = "";

  if (transactions.length === 0) {
    transactionsList.innerHTML = '<p class="empty">No transactions yet</p>';
    updateSummary();
    updateEntryCount();
    return;
  }

  transactions.forEach((t) => {
    const li = document.createElement("li");

    li.classList.add(t.amount > 0 ? "income" : "expense");

    li.innerHTML = `
      <span>${t.text}</span>
      <span>
        ${t.amount > 0 ? "+" : "-"}₹${Math.abs(t.amount)}
        <button data-id="${t.id}" class="delete-btn">x</button>
      </span>
    `;

    transactionsList.appendChild(li);
  });

  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      deleteTransaction(Number(btn.dataset.id));
    });
  });

  updateSummary();
  updateEntryCount();
}

function deleteTransaction(id) {
  const index = transactions.findIndex((t) => t.id === id);
  if (index !== -1) transactions.splice(index, 1);

  updateLocalStorage();
  renderTransactions();
}

function updateEntryCount() {
  const entryCountEl = document.getElementById("entryCount");
  entryCountEl.textContent = `${transactions.length} entries`;
}
