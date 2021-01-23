const fetch = require('node-fetch');

async function fetchHotelsData(api) {
  const response = await fetch(api);
  const hotels = response.json();
  return hotels;
};

module.exports = fetchHotelsData;
