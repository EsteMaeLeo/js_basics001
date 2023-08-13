(function () {
    console.log('edit')
  document.addEventListener("DOMContentLoaded", () => {
    //check the id from URL
    const parameterURL = new URLSearchParams(window.location.search);

    const idClient = parameterURL.get("id");
    console.log(idClient);
  });
});
