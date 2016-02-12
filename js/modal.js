var link = document.querySelector(".link");
var popup = document.querySelector(".modal-content");


link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
});

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
});
