const loadTxtBtn = document.querySelector("#loadTxt");
loadTxtBtn.addEventListener("click", getData);

function getData() {
  const url = "data/data.txt";
  fetch(url).then((response) => {
    console.log(response);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.url);
    console.log(response.type);
    
    return response.text();
  });
}
