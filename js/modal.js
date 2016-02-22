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

// Connection map

var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {

  myMap = new ymaps.Map("map", {

    center: [34.863598, -111.777121], // Седона
    zoom: 10,
    controls: []
  }, {
    searchControlProvider: "yandex#search"
  });

}


