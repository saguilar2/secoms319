
fetch("data.json")
.then(response => response.json())
.then(data => dataToHTML(data));

function dataToHTML(data){

  for (let i = 0; i < data.playstation.length; i++) {
    let title = data.playstation[i].title;
    let developer = data.playstation[i].developer;
    let releaseDate = data.playstation[i].releaseDate;
    let image = data.playstation[i].image;

    document.getElementById("image"+i).src = image;
    document.getElementById("title"+i).innerHTML = title;
    document.getElementById("developer"+i).innerHTML = developer;
    document.getElementById("year"+i).innerHTML = releaseDate;
  }
}



































//import fetch from "node-fetch";
console.log("Welcome to Programiz!");

function getData() {
  const response = fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));

  parseResponse(response);
}
function parseResponse(resp) {

  document.getElementById("data").innerHTML = resp;
}

