const fetch = require('node-fetch');

const hotels = fetch('http://localhost:4000/hotels.json').then((response) => response.json()).then((data) => console.log(data));

function getHotels() {
  return hotels;
}

getHotels();
