(function () {
  document.addEventListener("DOMContentLoaded", () => {
    //check the id from URL
    const parameterURL = new URLSearchParams(window.location.search);

    const idClient = parameterURL.get("id");
    console.log(idClient);
    if (idClient) {
      getClient(idClient);
    }
  });

  function getClient(id) {
    console.log(id);
  }
})();
