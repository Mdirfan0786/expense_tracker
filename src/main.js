import { setIncome } from "./store/transactionStore.js";
import { initForm } from "./components/form.js";
import { renderTransactions } from "./components/transactionList.js";
import { getFormattedDate } from "./utils/date.js";
import { exportToCSV } from "./utils/exportCSV.js";

const incomeBtn = document.getElementById("incomeBtn");
const expenseBtn = document.getElementById("expenseBtn");
const dateEl = document.getElementById("date");
const exportBtn = document.getElementById("exportBtn");

// date
dateEl.textContent = getFormattedDate();

// toggle
incomeBtn.addEventListener("click", () => {
  setIncome(true);
  incomeBtn.classList.add("active");
  expenseBtn.classList.remove("active");
});

expenseBtn.addEventListener("click", () => {
  setIncome(false);
  expenseBtn.classList.add("active");
  incomeBtn.classList.remove("active");
});

exportBtn.addEventListener("click", exportToCSV);

// init
initForm();
renderTransactions();
