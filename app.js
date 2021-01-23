const fetch = require('node-fetch');
const getWeekDayType = require('./utils/getWeekDayType');
const endpoint = 'http://localhost:4200/hotels.json';

async function getTheCheapestHotel(clientType = 'regular', days = []) {
  try {
    if (!days.length) return ('Enter at least one day in format DD-MM-YYYY');

    const response = await fetch(endpoint);
    const json = await response.json();
    const hotels = json.map(item => ({
      name: item.name,
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
      return (a.total > b.total && a.rating > b.rating) ? 1 : (a.total < b.total) ? -1 : 0;
    };

    const cheapest = hotels.sort(sortedByPrice)[0];
    return cheapest;
  } catch (e) {
    console.log(e);
  }
}

getTheCheapestHotel('regular', ['16-03-2020', '17-03-2020', '18-03-2020']).then(response => console.log(response?.name));

getTheCheapestHotel('regular', ['20-03-2020', '21-03-2020', '22-03-2020']).then(response => console.log(response?.name));

getTheCheapestHotel('fidelity', ['26-03-2020', '27-03-2020', '28-03-2020']).then(response => console.log(response?.name));

module.exports = {
  getTheCheapestHotel,
};


