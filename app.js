const fetch = require('node-fetch');
const getWeekDayType = require('./utils/getWeekDayType');
const endpoint = 'http://localhost:4200/hotels.json';

async function getTheCheapestHotel(clientType = 'regular', days = []) {
  try {
    if (!days.length) console.error('Enter at least one day in format DD-MM-YYYY');

    const response = await fetch(endpoint);
    const json = await response.json();
    const hotels = json.map(item => ({
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

    const cheapest = hotels.sort(sortedByPrice)[0];
    return cheapest;
  } catch (e) {
    console.log(e);
  }
}

getTheCheapestHotel('regular', ['16-03-2020', '17-03-2020', '18-03-2020']).then(response => console.log(response?.hotel_name));

getTheCheapestHotel('regular', ['20-03-2020', '21-03-2020', '22-03-2020']).then(response => console.log(response?.hotel_name));

getTheCheapestHotel('fidelity', ['26-03-2020', '27-03-2020', '28-03-2020']).then(response => console.log(response?.hotel_name));
module.exports = {
  getTheCheapestHotel,
};


