const fetch = require('node-fetch');
const getWeekDayType = require('./utils/getWeekDayType');

const hotelsData = 'http://localhost:4200/hotels.json';

async function fetchHotelsData(api) {
  const response = await fetch(api);
  const hotels = response.json();
  return hotels;
};

async function getTheCheapestHotel(clientType = 'regular', days = []) {
  if (!days.length) console.error('Enter at least one day in format DD-MM-YYYY');

  try {
    const data = await fetchHotelsData(hotelsData);
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

    const sortedByPrice = (a, b) => {
      if (a.total > b.total && a.rating > b.rating) return 1;
      if (a.total < b.total) return -1;
      return 0;
    };

    const sortedHotels = hotels.sort(sortedByPrice);
    const bestPrice = hotels.sort(sortedByPrice)[0];

    console.log(
      sortedHotels,
      `Best Price: ${bestPrice.hotel_name}, $ ${bestPrice.total}`
    );

  } catch (e) {
    console.log(e);
  }
}

getTheCheapestHotel('fidelity');
getTheCheapestHotel('regular', ['21-01-2021', '22-01-2021', '23-01-2021', '24-01-2021']);
getTheCheapestHotel('fidelity', ['29-01-2021', '30-01-2021', '31-01-2021']);

module.exports = getTheCheapestHotel;


