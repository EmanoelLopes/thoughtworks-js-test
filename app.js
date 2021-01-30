const getTheCheapestHotel = require('./lib/getTheCheapestHotel');
const { api } = require('./config');

const inputs = {
  1: {
    type: 'regular',
    days: ['16/2/2020', '17/2/2020', '18/2/2020'],
  },
  2: {
    type: 'regular',
    days: ['20/2/2020', '21/2/2020', '22/2/2020'],
  },
  3: {
    type: 'fidelity',
    days: ['26/2/2020', '27/2/2020', '28/2/2020'],
  }
}

const App = {
  getTheCheapestHotel,
};

App.getTheCheapestHotel(
  api.hotels, ...Object.values(inputs[1])
).then(response => console.log(response?.name));

App.getTheCheapestHotel(
  api.hotels, ...Object.values(inputs[2])
).then(response => console.log(response?.name));

App.getTheCheapestHotel(
  api.hotels, ...Object.values(inputs[3])
).then(response => console.log(response?.name));
