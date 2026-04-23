export const showError = (input, errorMsg, message) => {
  errorMsg.classList.add("error");
  errorMsg.textContent = message;

  input.classList.add("input-error");
};

export const clearError = (textInput, amountInput, errorMsg) => {
  errorMsg.classList.remove("error");
  errorMsg.textContent = "";

  textInput.classList.remove("input-error");
  amountInput.classList.remove("input-error");
};
