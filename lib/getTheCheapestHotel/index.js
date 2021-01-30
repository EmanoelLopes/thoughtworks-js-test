const fetch = require('node-fetch');
const getWeekDayType = require('../getWeekDayType');

async function getTheCheapestHotel(endpoint, clientType, days) {
  try {
    if (!days.length) return ('Enter at least one day in format DD-MM-YYYY');

    const response = await fetch(endpoint);
    const json = await response.json();
    const hotels = json.map(hotel => ({
      name: hotel.name,
      rating: hotel.rating,
      price: {
        week: hotel.values[clientType].week,
        weekend: hotel.values[clientType].weekend,
      },
      clientType,
      daysChosen: days,
      daysChosenType: days.map(day => getWeekDayType(day)),
      total: days.reduce((acc, value) => {
        return hotel.values[clientType][getWeekDayType(value)] + acc;
      }, 0),
    }));

    const sortByPriceAndRating = (a, b) => {
      const sortByRating = (a.rating > b.rating) ? -1 : 1;
      if (a.total > b.total) return 1
      if (a.total < b.total) return -1;
      return (a.total === b.total) ? sortByRating : 0;
    };

    const cheapest = hotels.sort(sortByPriceAndRating)[0];
    return cheapest;

  } catch (e) {
    console.log(`Oh no! Something got wrong!`);
  }
}

module.exports = getTheCheapestHotel;
