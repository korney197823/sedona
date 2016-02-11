/**
 * Created by Denis on 11.02.2016.
 */
var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {

  myMap = new ymaps.Map('map', {

    center: [34.863598, -111.777121], // Седона
    zoom: 10,
    controls: []
  }, {
    searchControlProvider: 'yandex#search'
  });

  document.getElementById('destroyButton').onclick = function () {
    // Для уничтожения используется метод destroy.
    myMap.destroy();
  };

}
