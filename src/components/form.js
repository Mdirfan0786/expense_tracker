import {
  transactions,
  isIncome,
  updateLocalStorage,
} from "../store/transactionStore.js";

import { clearError, showError } from "../utils/errorHandler.js";
import { renderTransactions } from "./transactionList.js";

const form = document.getElementById("form");
const textInput = document.getElementById("text");
const amountInput = document.getElementById("amount");
const errorMsg = document.getElementById("errorMsg");
const categoryInput = document.getElementById("category");

textInput.addEventListener("input", () => {
  textInput.value = textInput.value.replace(/[^A-Za-z\s]/g, "");
});

export function initForm() {
  form.addEventListener("submit", addTransaction);
}

function addTransaction(e) {
  e.preventDefault();

  const text = textInput.value.trim();
  const amountValue = +amountInput.value;
  const category = categoryInput.value;

  const isValidText = /^[A-Za-z\s]+$/.test(text);

  if (!text) {
    showError(textInput, errorMsg, "Please enter description");
    return;
  }

  if (!isValidText) {
    showError(textInput, errorMsg, "Only text allowed (no numbers)");
    return;
  }

  if (!amountValue) {
    showError(amountInput, errorMsg, "Please enter valid amount");
    return;
  }

  clearError(textInput, amountInput, errorMsg);

  const amount = isIncome ? amountValue : -amountValue;

  const transaction = {
    id: Date.now(),
    text,
    amount,
    category,
  };

  transactions.unshift(transaction);

  updateLocalStorage();
  renderTransactions();

  form.reset();
}
