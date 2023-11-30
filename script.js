// let star1 = document.getElementsByClassName("star");
// let star2 = document.getElementsByClassName("star");
// let star3 = document.getElementsByClassName("star");
// let star4 = document.getElementsByClassName("star");
// let star5 = document.getElementsByClassName("star");

let star = document.querySelectorAll("star");
let container = document.getElementById("star-container");
let i = 0;

container.addEventListener("click", function (e) {
  //   for (let i = 0; i < star.length; i++) {
  //     star[i].style.color = "rgb(232, 235, 229)";}
  document.getElementById("star1").style.color = "rgb(232,235,229)";
  document.getElementById("star2").style.color = "rgb(232,235,229)";
  document.getElementById("star3").style.color = "rgb(232,235,229)";
  document.getElementById("star4").style.color = "rgb(232,235,229)";
  document.getElementById("star5").style.color = "rgb(232,235,229)";

  let currentclicked = e.target.id;

  console.log(currentclicked);
  document.getElementById(currentclicked).style.color = "green";
  if (currentclicked === "star5") {
    document.getElementById("star1").style.color = "green";
    document.getElementById("star2").style.color = "green";
    document.getElementById("star3").style.color = "green";
    document.getElementById("star4").style.color = "green";
    document.getElementById("star5").style.color = "green";
    document.getElementById("ratingcount").innerHTML = 5;
    // let index = currentclicked.slice(4);
    // console.log(index);
    // for (let index = ; index < array.length; index++) {
    //   const element = array[index];
    // }
  }
  if (currentclicked === "star4") {
    document.getElementById("star1").style.color = "green";
    document.getElementById("star2").style.color = "green";
    document.getElementById("star3").style.color = "green";
    document.getElementById("star4").style.color = "green";
    document.getElementById("ratingcount").innerHTML = 4;
  }
  if (currentclicked === "star3") {
    document.getElementById("star1").style.color = "green";
    document.getElementById("star2").style.color = "green";
    document.getElementById("star3").style.color = "green";
    document.getElementById("ratingcount").innerHTML = 3;
  }
  if (currentclicked === "star2") {
    document.getElementById("star1").style.color = "green";
    document.getElementById("star2").style.color = "green";
    document.getElementById("ratingcount").innerHTML = 2;
  }
  if (currentclicked === "star1") {
    document.getElementById("star1").style.color = "green";
    document.getElementById("ratingcount").innerHTML = 1;
  }
});
