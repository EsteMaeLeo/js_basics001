const result = document.querySelector("#resultado");
const form = document.querySelector("#formulario");
const page = document.querySelector("#paginacion");

const regPerPage = 40;
let totalPages = 0;
let iterator;
let actualPage = 1;

window.onload = () => {
  form.addEventListener("submit", valForm);
};

function valForm(e) {
  e.preventDefault();

  const wordSearch = document.querySelector("#termino").value;
  if (!wordSearch) {
    console.log("Search is empty please provide a search word");
    showAlert("Search is empty please provide a search word");
    return;
  }
  searchImg();
}

function searchImg() {

  const wordSearch = document.querySelector("#termino").value;

  const key = "39618957-229b962459be4fa4b5566cba9";
  const url = `https://pixabay.com/api/?key=${key}&q=${wordSearch}&per_page=${regPerPage}&page=${actualPage}`;

  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      totalPages = calcPages(result.totalHits);
      console.log(totalPages);
      showImages(result.hits);
    })
    .catch((error) => console.log(error));
}

function calcPages(total) {
  return parseInt(Math.ceil(total / regPerPage));
}

//generator for element acording number pages
function* createPager(total) {
  for (let i = 1; i <= total; i++) {
    yield i;
  }
}

function showImages(images) {
  cleanHTML(result);
  // result.textContent += `<div class='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-10'>`;
  images.forEach((imagen) => {
    const { previewURL, likes, views, largeImageURL, fullHDURL } = imagen;
    //mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm-grid-cols-2 grid-cols-1 sm:gap-4 gap-14 w-1/2 md:w-1/3 lg:w-1/4 mb-4
    result.innerHTML += `    
    <div class="bg-white border border-gray-200  rounded rounded-lg shadow shadow-lg  p-2 m-2 overflow-hidden  dark:bg-gray-800 dark:border-gray-700"> 
    <div className="flex flex-column">       
    <img class='w-48 h-48 object-contain rounded-t-lg'src=${previewURL}>

            <div class='p-4 m-4'>    
                <p class="font-bold">${likes}<span class="font-light"> Like</span></p>
                <p class="font-bold">${likes}<span class="font-light"> Views</span></p>

                <a class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1"
                    href='${largeImageURL}' target="_blank" rel="noopener noreferrer"> See Image</a>

            </div>
        </div>
        </div>
        </div>
        `;
  });
  //result.innerHTML += `</div>`;
  //clean paging
  while (page.firstChild) {
    page.removeChild(page.firstChild);
  }
  printPager();
}

//show pages button
function printPager() {
  iterator = createPager(totalPages);

  while (true) {
    const { value, done } = iterator.next();
    if (done) return;
    const buttonPage = document.createElement("A");
    buttonPage.href = "#";
    buttonPage.dataset.page = value;
    buttonPage.textContent = value;
    buttonPage.classList.add(
      "siguiente",
      "bg-yellow-200",
      "px-4",
      "py-1",
      "mr-2",
      "font-bold",
      "mb-1",
      "rounded"
    );

    buttonPage.onclick=()=>{
        actualPage = value
        console.log(actualPage)
        searchImg()
    }

    page.appendChild(buttonPage);
  }
}

function cleanHTML(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function showAlert(msg) {
  const existAlert = document.querySelector(".bg-red-100");
  if (!existAlert) {
    const alert = document.createElement("P");
    alert.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-lg",
      "mx-auto",
      "mt-6",
      "text-center"
    );

    alert.innerHTML = `
  <strong class="font-bold">Error!</strong>
  <span class="block sm:inline">${msg}</span> `;

    form.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 3000);
  }
}
