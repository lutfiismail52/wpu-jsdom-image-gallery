/*
Cara 1: Buatan saya

const jumbo = document.querySelector(".jumbo");
const thumbSelected = document.getElementsByClassName("thumb");

for (let thumb of thumbSelected) {
  thumb.addEventListener("click", function () {
    changeJumbo(this.src);
  });
}

function changeJumbo(newSrc) {
  jumbo.setAttribute("src", newSrc);
}
*/

// Cara 2: Cara pak Dhika

const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");

container.addEventListener("click", function (e) {
  // Cek apakah yang diklik adalah thumb
  if (e.target.className == "thumb") {
    jumbo.src = e.target.src;
    jumbo.classList.add("fade");
    setTimeout(function () {
      jumbo.classList.remove("fade");
    }, 500);

    thumbs.forEach(function (thumb) {
      thumb.className = "thumb";
    });

    e.target.classList.add("active");
  }
});
