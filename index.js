function myFunction() {
  document.getElementById("Start").style.display = "none";
  document.getElementById("mainMenu").style.display = "block";
}

function myFunction1() {
  document.getElementById("mainMenu").style.display = "none";
  document.getElementById("Start").style.display = "block";
}

function toggleDiv(divId) {
  var div = document.getElementById(divId);
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}