const fetch = require('node-fetch');
const { api } = require('../../config');
const getWeekDayType = require('../getWeekDayType');

async function getTheCheapestHotel(clientType = 'regular', days = []) {
  try {
    if (!days.length) return ('Enter at least one day in format DD-MM-YYYY');

    const response = await fetch(api.hotels);
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

    const sortByPriceAndRating = (a, b) => {
      const sortByRating = (a.rating > b.rating) ? -1 : 1;
      if (a.total > b.total) return 1
      if (a.total < b.total) return -1;
      return (a.total === b.total) ? sortByRating : 0;
    };

    const cheapest = hotels.sort(sortByPriceAndRating)[0];
    return cheapest;

  } catch (e) {
    throw new Error(e);
  }
}

module.exports = getTheCheapestHotel;