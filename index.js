function myFunction() {
  document.getElementById("Start").style.display = "none";
  document.getElementById("mainMenu").style.display = "flex";
}

document.addEventListener("DOMContentLoaded", function () {
  var overlay = document.getElementById('overlay');
  var closeBtn = document.getElementById('closeBtn');

  // Hide the overlay when the close button is clicked
  closeBtn.addEventListener('click', function () {
    overlay.style.display = 'none';
  });

  // Optionally, you can hide the overlay after a certain delay
  // setTimeout(function() {
  //   overlay.style.display = 'none';
  // }, 5000); // 5000 milliseconds = 5 seconds
});

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
