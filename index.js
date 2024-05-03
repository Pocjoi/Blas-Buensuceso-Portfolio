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

function myFunction2() {
  document.getElementById("content").style.display = "none";
  document.getElementById("About").style.display = "flex";
}

function myFunction3() {
  document.getElementById("About").style.display = "none";
  document.getElementById("content").style.display = "flex";
}

function myFunction4() {
  document.getElementById("content").style.display = "none";
  document.getElementById("myWork").style.display = "flex";
}

function myFunction5() {
  document.getElementById("myWork").style.display = "none";
  document.getElementById("content").style.display = "flex";
}

function myFunction6() {
  document.getElementById("content").style.display = "none";
  document.getElementById("Info").style.display = "flex";
}
function myFunction7() {
  document.getElementById("Info").style.display = "none";
  document.getElementById("content").style.display = "flex";
}
