const modalButton = document.querySelector(".nav__right--mobile");
modalButton.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "gray";
  document.querySelector("body").style.opacity = "1";
  document.querySelector(".nav__right--hamburger").style.display = "block";
});

const closeModalButton = document.querySelector(".nav__right--mobile--close");
closeModalButton.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector("body").style.opacity = "none";
  document.querySelector(".nav__right--hamburger").style.display = "none";
});
