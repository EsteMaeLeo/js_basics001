
eventListener();

function eventListener() {
  petInput.addEventListener("input", dataAppoitment);
  ownerInput.addEventListener("input", dataAppoitment);
  phoneInput.addEventListener("input", dataAppoitment);
  dateInput.addEventListener("input", dataAppoitment);
  timeInput.addEventListener("input", dataAppoitment);
  sympInputs.addEventListener("input", dataAppoitment);

  form.addEventListener("submit", newAppoitment);
}
