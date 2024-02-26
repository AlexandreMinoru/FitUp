
var modal = document.getElementsByClassName("myModal")[0];


var btn = document.querySelector(".openModal")


var span = document.getElementsByClassName("close")[0];

var submit = document.querySelector("#submitModal")

var container = document.querySelector(".container")

btn.addEventListener("click", (e) =>{
    e.preventDefault();
    modal.style.display = "block";
    container.style.opacity = 0.5;
})


span.onclick = function() {
  modal.style.display = "none";
  container.style.opacity = 1;
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    container.style.opacity = 1;
  }
}

submit.addEventListener("submit", (e) =>{
    e.preventDefault();
    window.location.href = "https://www.youtube.com/watch?v=UWM2VANfR0w";
})




