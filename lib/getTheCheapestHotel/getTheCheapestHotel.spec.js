const getTheCheapestHotel = require('../getTheCheapestHotel');
const { api } = require('../../config');

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

describe('Return de the cheapest Hotel after entering the following inputs:', () => {
  describe('Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)', () => {
    it('should return "Parque as flores" as output', () => {
      return getTheCheapestHotel(api.hotels, inputs[1].type, inputs[1].days).then(data => {
        expect(data?.name).toEqual('Parque Das Flores');
      });
    });
  });

  describe('Regular: 20Mar2020(fri), 21Mar2020(sat), 22Mar2020(sun)', () => {
    it('should return "Jardim Botânico" as output', () => {
      return getTheCheapestHotel(api.hotels, inputs[2].type, inputs[2].days).then(data => {
        expect(data?.name).toEqual('Jardim Botânico');
      });
    });
  });

  describe('Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)', () => {
    it('should return "Mar Atlântico" as output', () => {
      return getTheCheapestHotel(api.hotels, inputs[3].type, inputs[3].days).then(data => {
        expect(data?.name).toEqual('Mar Atlântico');
      });
    });
  });

  describe('if any date value was not entered', () => {
    it('should return the message: Enter at least one day in format DD-MM-YYYY', () => {
      return getTheCheapestHotel('', 'regular', []).then(data => data).catch(e => {
        expect(e).toEqual('Enter at least one day in format DD-MM-YYYY');
      });
    });
  });

  describe('Fail request', () => {
    it('should return the message: "Oh no! Something got wrong!"', () => {
      return getTheCheapestHotel().then(data => data).catch(e => {
        expect(e).toEqual('Oh no! Something got wrong!');
      });
    });
  });
});
