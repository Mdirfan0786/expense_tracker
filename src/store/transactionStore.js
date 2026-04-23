export let transactions =
  JSON.parse(localStorage.getItem("transactions")) || [];

export let isIncome = true;

export function setIncome(value) {
  isIncome = value;
}

export function updateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}
