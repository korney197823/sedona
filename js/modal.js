var link = document.querySelector(".link"),
    popup = document.querySelector(".modal-content"),
    dateIn = popup.querySelector("[name=checkin]"),
    dateOut = popup.querySelector("[name=checkout]"),
    form = popup.querySelector("form");


link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("modal-content-show");
  dateIn.focus();
});

form.addEventListener("submit", function(event) {
  if (!dateIn.value || !dateOut.value)
      event.preventDefault();
      console.log("Введите даты заезда и выезда");
});

