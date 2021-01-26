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

App.getTheCheapestHotel(...Object.values(inputs[1])).then(response => console.log(response?.name));

App.getTheCheapestHotel(...Object.values(inputs[2])).then(response => console.log(response?.name));

App.getTheCheapestHotel(...Object.values(inputs[3])).then(response => console.log(response?.name));
