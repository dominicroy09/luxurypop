const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("closeBtn");
const sideMenu = document.getElementById("sideMenu");


/* OPEN */

hamburger.addEventListener("click", function () {

    sideMenu.classList.add("active");

});


/* CLOSE */

closeBtn.addEventListener("click", function () {

    sideMenu.classList.remove("active");

});