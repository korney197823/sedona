var link = document.querySelector(".link");
var popup = document.querySelector(".modal-content");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("modal-content-show");
});
