const buttonA = document.getElementById("image1-button");
const buttonB = document.getElementById("image2-button");
const buttonC = document.getElementById("image3-button");

buttonA.addEventListener('click', function (event) {
  localStorage.setItem('Building', buttonA.name);
  window.location.href = "buildingplanA.html";
});

buttonB.addEventListener('click', function (event) {
  localStorage.setItem('Building', buttonB.name);
  window.location.href = "buildingplanA.html";
});

buttonC.addEventListener('click', function (event) {
  localStorage.setItem('Building', buttonC.name);
  window.location.href = "buildingplanA.html";
});


