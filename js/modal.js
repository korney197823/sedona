var link = document.querySelector(".link");
var popup = document.querySelector(".modal-content");

//link.onclick = function() {
//  event.preventDefault();
//  if (popup.style.display === 'none') {
//    popup.style.display = 'block';
//  }
//  else {
//    popup.style.display = 'none';
//  }
//};

link.addEventListener("click", function(event) {
  event.preventDefault();
    if (popup.style.display === 'none') {
    popup.style.display = 'block';
  }
   else {
      popup.style.display = 'none';
    }
});

//link.addEventListener("click", function(event) {
//  event.preventDefault();
//  popup.classList.remove("modal-content-show");
//});
