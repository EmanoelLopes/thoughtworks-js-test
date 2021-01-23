const fetch = require('node-fetch');
const getWeekDayType = require('./utils/getWeekDayType');

async function fetchHotelsData() {
  const response = await fetch('http://localhost:4200/hotels.json');
  const hotels = response.json();
  return hotels;
};

function getTheCheapestHotel(clientType, days) {
  return fetchHotelsData().then(
    hotels => hotels.map(item => {
      console.log({
        hotel_name: item.name,
        rating: item.rating,
        price: {
          week: item.values[clientType].week,
          weekend: item.values[clientType].weekend,
        },
        total: days.reduce((acc, value, index) => {
          return item.values[clientType][getWeekDayType(value)] + acc;
        }, 0)
      })
    })
  );
}

getTheCheapestHotel('regular', ['21-01-2021', '22-01-2021', '23-01-2021']);
