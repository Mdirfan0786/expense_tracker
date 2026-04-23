import { transactions } from "../store/transactionStore.js";

export function exportToCSV() {
  if (transactions.length === 0) {
    alert("no transaction yet");
    return;
  }

  let csv = "Description,Amount,Category\n";

  transactions.forEach((t) => {
    csv += `${t.text},${t.amount},${t.category}\n`;
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "transactions.csv";
  a.click();

  URL.revokeObjectURL(url);
}
