const url = "https://picsum.photos/list";

document.addEventListener("DOMContentLoaded", getDataAwait);

function getData() {
  fetch(url)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}

async function getDataAwait() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
