import { dataAppoitment, newAppoitment, createDB } from "../functions.js";
import {
  petInput,
  ownerInput,
  phoneInput,
  dateInput,
  timeInput,
  sympInputs,
  form,
} from "../selector.js";
class App {
  constructor() {
    this.initApp();
  }

  initApp() {
    petInput.addEventListener("input", dataAppoitment);
    ownerInput.addEventListener("input", dataAppoitment);
    phoneInput.addEventListener("input", dataAppoitment);
    dateInput.addEventListener("input", dataAppoitment);
    timeInput.addEventListener("input", dataAppoitment);
    sympInputs.addEventListener("input", dataAppoitment);

    form.addEventListener("submit", newAppoitment);

    createDB();
  }
}

export default App;
