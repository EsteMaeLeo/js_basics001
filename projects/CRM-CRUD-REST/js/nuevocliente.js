(function () {
  const form = document.querySelector("#formulario");

  form.addEventListener("submit", validateClient);

  function validateClient(e) {
    e.preventDefault();

    const name = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#telefono").value;
    const company = document.querySelector("#empresa").value;

    const client = {
      name,
      email,
      phone,
      company,
    };

    console.log(!Object.values(cliente).every((input) => input !== ""));
  }

  function val(obj){}
})();
