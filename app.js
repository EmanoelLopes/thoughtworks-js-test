const getTheCheapestHotel = require('./lib/getTheCheapestHotel');

const inputs = {
  1: {
    type: 'regular',
    days: ['16/03/2020', '17/03/2020', '18/03/2020'],
  },
  2: {
    type: 'regular',
    days: ['20/03/2020', '21/03/2020', '22/03/2020'],
  },
  3: {
    type: 'fidelity',
    days: ['26/03/2020', '27/03/2020', '28/03/2020'],
  }
};

const App = {
  getTheCheapestHotel,
};

App.getTheCheapestHotel(
  inputs[1].type,
  inputs[1].days,
).then(response => console.log(response?.name));

App.getTheCheapestHotel(
  inputs[2].type,
  inputs[2].days,
).then(response => console.log(response?.name));

App.getTheCheapestHotel(
  inputs[3].type,
  inputs[3].days,
).then(response => console.log(response?.name));
