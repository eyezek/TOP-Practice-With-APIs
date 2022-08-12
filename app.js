const img = document.querySelector("img");

const button = document.getElementById("button");

const searchButton = document.getElementById("searchbutton");

const searchField = document.getElementById("searchfield");

let defaultURL =
  "https://api.giphy.com/v1/gifs/translate?api_key=WRfYXYKJrVZpZ8ARkoeTRdNrYJ3E96Q0&s=";

async function getCats() {
  const response = await fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=WRfYXYKJrVZpZ8ARkoeTRdNrYJ3E96Q0&s=cats",
    { mode: "cors" }
  );
  const catData = await response.json();
  img.src = catData.data.images.original.url;
}

async function getSearch() {
  const response = await fetch(defaultURL.concat(searchField.value), {
    mode: "cors",
  });
  const searchData = await response.json();
  img.src = searchData.data.images.original.url;
}

searchButton.addEventListener("click", function () {
  if (searchField.value != "") {
    getSearch();
  }
});

button.addEventListener("click", function () {
  getCats();
});
