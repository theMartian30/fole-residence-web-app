const kati1 = document.getElementById("kati1-button");
const kati2 = document.getElementById("kati2-button");
const kati3 = document.getElementById("kati3-button");
const kati4 = document.getElementById("kati4-button");
const kati5 = document.getElementById("kati5-button");
const kati6 = document.getElementById("kati6-button");
const kati7 = document.getElementById("kati7-button");
const kati8 = document.getElementById("kati8-button");


kati1.addEventListener('click', function (event) {
    localStorage.setItem('Floor', 1);
    window.location.href = "floor.html";
  });

  kati2.addEventListener('click', function (event) {
    localStorage.setItem('Floor', 2);
    window.location.href = "floor.html";
  });

  kati3.addEventListener('click', function (event) {
    localStorage.setItem('Floor', 3);
    window.location.href = "floor.html";
  });

  kati4.addEventListener('click', function (event) {
    localStorage.setItem('Floor', 4);
    window.location.href = "floor.html";
  });

  kati5.addEventListener('click', function (event) {
    localStorage.setItem('Floor', 5);
    window.location.href = "floor.html";
  });

  kati6.addEventListener('click', function (event) {
    localStorage.setItem('Floor', 6);
    window.location.href = "floor.html";
  });

  kati7.addEventListener('click', function (event) {
    localStorage.setItem('Floor', 7);
    window.location.href = "floor.html";
  });

  kati8.addEventListener('click', function (event) {
    localStorage.setItem('Floor', 8);
    window.location.href = "floor.html";
  });

  function loadBuildings() {
    var myHeading = document.getElementById("buildingid");
    myHeading.innerHTML = "Godina " + localStorage.getItem('Building');
  }