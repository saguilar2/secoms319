
fetch("data.json")
.then(response => response.json())
.then(data => dataToHTML(data));

function dataToHTML(data){

  let x = document.getElementById("title").textContent;

  if(x == "Playstation 1"){
    for (let i = 0; i < data.playstation.length; i++) {
      let p_title = data.playstation[i].title;
      let p_developer = data.playstation[i].developer;
      let p_releaseDate = data.playstation[i].releaseDate;
      let p_image = data.playstation[i].image;

      document.getElementById("image"+i).src = p_image;
      document.getElementById("title"+i).innerHTML = p_title;
      document.getElementById("developer"+i).innerHTML = p_developer;
      document.getElementById("year"+i).innerHTML = p_releaseDate;
    }
  }

  if(x == "Xbox"){
    for (let j = 0; j < data.xbox.length; j++) {
      let x_title = data.xbox[j].title;
      let x_developer = data.xbox[j].developer;
      let x_releaseDate = data.xbox[j].releaseDate;
      let x_image = data.xbox[j].image;

      document.getElementById("image"+j).src = x_image;
      document.getElementById("title"+j).innerHTML = x_title;
      document.getElementById("developer"+j).innerHTML = x_developer;
      document.getElementById("year"+j).innerHTML = x_releaseDate;
    }
  }

  if(x == "Nintendo 64"){
    for (let i = 0; i < data.nintendo.length; i++) {
      let n_title = data.nintendo[i].title;
      let n_developer = data.nintendo[i].developer;
      let n_releaseDate = data.nintendo[i].releaseDate;
      let n_image = data.nintendo[i].image;

      document.getElementById("image"+i).src = n_image;
      document.getElementById("title"+i).innerHTML = n_title;
      document.getElementById("developer"+i).innerHTML = n_developer;
      document.getElementById("year"+i).innerHTML = n_releaseDate;
    }
  }
}










/*
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
*/
