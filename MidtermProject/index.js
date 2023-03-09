//import fetch from "node-fetch";
console.log("Welcome to Programiz!");

function getData(url) {
  const response = fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));

  parseResponse(response);
}
function parseResponse(resp) {

  document.getElementById("data").innerHTML = resp;
}
