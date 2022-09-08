document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".hamburger").addEventListener("click", function () {
    document.querySelector(".navigation").classList.toggle("showNav");
  });
});
