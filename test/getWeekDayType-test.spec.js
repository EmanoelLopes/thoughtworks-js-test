'use strict';

const chai = require('chai');
const getWeekDayType = require('../utils/getWeekDayType');

const expect = chai.expect;

describe('Get the correclty day type', function () {
  describe('Date Format: DD-MM-YYYY', function () {
    it('should show the message "Enter a valid date" if is invalid format date', function () {
      expect(getWeekDayType(10)).to.equal('Invalid date');
      expect(getWeekDayType(NaN)).to.equal('Invalid date');
      expect(getWeekDayType({})).to.equal('Invalid date');
      expect(getWeekDayType([])).to.equal('Invalid date');
    });

    it('should return "week" if input date type is a week day', function () {
      expect(getWeekDayType('20-01-2021')).to.equal('week');
      expect(getWeekDayType('21-01-2021')).to.equal('week');
      expect(getWeekDayType('22-02-2021')).to.equal('week');
    });

    it('should return "weekend" if input date type is a week day', function () {
      expect(getWeekDayType('23-01-2021')).to.equal('weekend');
      expect(getWeekDayType('24-01-2021')).to.equal('weekend');
    });
  });
});


