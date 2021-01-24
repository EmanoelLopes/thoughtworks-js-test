'use strict'

const chai = require('chai');
const {
  getTheCheapestHotel
} = require('../app');

const expect = chai.expect;

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

describe('Return de the cheapest Hotel', () => {
  it('should return "Parque as flores"', () => {
    return getTheCheapestHotel(inputs[1].type, inputs[1].days).then(data => {
      expect(data?.name).to.equal('Parque Das Flores');
    });
  });

  it('should return "Jardim Botânico"', () => {
    return getTheCheapestHotel(inputs[2].type, inputs[2].days).then(data => {
      expect(data?.name).to.equal('Jardim Botânico');
    });
  });

  it('should return "Mar Atlântico"', () => {
    return getTheCheapestHotel(inputs[3].type, inputs[3].days).then(data => {
      expect(data?.name).to.equal('Mar Atlântico');
    });
  });

  it('fails request', () => {
    return getTheCheapestHotel().then(data => data).catch(e => {
      expect(e).toBe('Enter at least one day in format DD-MM-YYYY');
    });
  });
});
