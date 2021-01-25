'use strict'

const chai = require('chai');
const expect = chai.expect;
const getTheCheapestHotel = require('../lib/getTheCheapestHotel');


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
}

describe('Return de the cheapest Hotel after entering the following inputs:', () => {
  describe('Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)', () => {
    it('should return "Parque as flores" as output', () => {
      return getTheCheapestHotel(inputs[1].type, inputs[1].days).then(data => {
        expect(data?.name).to.equal('Parque Das Flores');
      });
    });
  });

  describe('Regular: 20Mar2020(fri), 21Mar2020(sat), 22Mar2020(sun)', () => {
    it('should return "Jardim Botânico" as output', () => {
      return getTheCheapestHotel(inputs[2].type, inputs[2].days).then(data => {
        expect(data?.name).to.equal('Jardim Botânico');
      });
    });
  });

  describe('Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)', () => {
    it('should return "Mar Atlântico" as output', () => {
      return getTheCheapestHotel(inputs[3].type, inputs[3].days).then(data => {
        expect(data?.name).to.equal('Mar Atlântico');
      });
    });
  });

  describe('if any date value was not entered', () => {
    it('should return the message: Enter at least one day in format DD-MM-YYYY', () => {
      return getTheCheapestHotel().then(data => data).catch(e => {
        expect(e).toBe('Enter at least one day in format DD-MM-YYYY');
      });
    });
  });
});
