const fetch = require('node-fetch');
const getWeekDayType = require('./utils/getWeekDayType');

async function fetchHotelsData() {
  const response = await fetch('http://localhost:4200/hotels.json');
  const hotels = response.json();
  return hotels;
};

async function getTheCheapestHotel(clientType, days) {
  try {
    const data = await fetchHotelsData();
    const hotels = data.map(item => ({
      hotel_name: item.name,
      rating: item.rating,
      price: {
        week: item.values[clientType].week,
        weekend: item.values[clientType].weekend,
      },
      total: days.reduce((acc, value) => {
        return item.values[clientType][getWeekDayType(value)] + acc;
      }, 0)
    }));

    const sortByPrice = (a, b) => {
      if (a.total > b.total) return 1;
      if (a.total < b.total) return -1;
      return 0;
    };

    const bestPrice = hotels.sort(sortByPrice).shift();
    console.log(bestPrice.hotel_name);

  } catch (e) {
    console.log(e);
  }
}

getTheCheapestHotel('regular', ['21-01-2021', '22-01-2021', '23-01-2021', '24-01-2021']);
getTheCheapestHotel('fidelity', ['29-01-2021', '30-01-2021', '31-01-2021']);

