const getTheCheapestHotel = require('./lib/getTheCheapestHotel');

const App = {
  getTheCheapestHotel,
};

App.getTheCheapestHotel('regular', ['16/03/2020', '17/03/2020', '18/03/2020']).then(response => console.log(response?.name));

App.getTheCheapestHotel('regular', ['20/03/2020', '21/03/2020', '22/03/2020']).then(response => console.log(response?.name));

App.getTheCheapestHotel('fidelity', ['26/03/2020', '27/03/2020', '28/03/2020']).then(response => console.log(response?.name));
