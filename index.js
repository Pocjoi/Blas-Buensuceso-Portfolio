function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
function myFunction() {
  document.getElementById("Start").style.display = "none";
  document.getElementById("mainMenu").style.display = "flex";
}

function myFunction1() {
  document.getElementById("mainMenu").style.display = "none";
  document.getElementById("Start").style.display = "flex";
}

function toggleDiv(divId) {
  var div = document.getElementById(divId);
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}