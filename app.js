const img = document.querySelector("img");

const button = document.getElementById("button");

const searchButton = document.getElementById("searchbutton");

const searchField = document.getElementById("searchfield");

let defaultURL =
  "https://api.giphy.com/v1/gifs/translate?api_key=WRfYXYKJrVZpZ8ARkoeTRdNrYJ3E96Q0&s=";

searchButton.addEventListener("click", function () {
  if (searchField.value != "") {
    fetch(defaultURL.concat(searchField.value), { mode: "cors" })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log(response.data.images.original.url);
        img.setAttribute("src", response.data.images.original.url);
      });
  }
});

button.addEventListener("click", function () {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=WRfYXYKJrVZpZ8ARkoeTRdNrYJ3E96Q0&s=cats",
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response.data.images.original.url);
      img.setAttribute("src", response.data.images.original.url);
    });
});
