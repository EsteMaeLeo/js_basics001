const btfloat = document.querySelector(".btn-flotante");
const footer = document.querySelector(".footer");

// btfloat.addEventListener('click', ()=>{
//     console.log('click')
// });

btfloat.addEventListener("click", showHideFooter);

function showHideFooter() {
  if (footer.classList.contains("activo")) {
    footer.classList.remove("activo");
    // btfloat.classList.remove("activo"); using is the same
    this.classList.remove("activo");
    this.textContent = 'idioma y moneda';
  } else {
    footer.classList.add("activo");
    // btfloat.classList.add("activo"); using is the same
    this.classList.add("activo");
    this.textContent = 'X cerrar';
  }
}
