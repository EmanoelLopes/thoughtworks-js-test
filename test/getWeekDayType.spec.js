'use strict';

const chai = require('chai');
const getWeekDayType = require('../lib/getWeekDayType');

const expect = chai.expect;

describe('Get the correclty day type', function () {
  describe('Date Format: DD-MM-YYYY', function () {
    it('should show the message "Enter a valid date" if is invalid format date', function () {
      expect(getWeekDayType(10)).to.equal('Invalid date');
      expect(getWeekDayType(NaN)).to.equal('Invalid date');
      expect(getWeekDayType({})).to.equal('Invalid date');
      expect(getWeekDayType([])).to.equal('Invalid date');
    });

    it('should return the correctly week day type', function () {
      // 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)
      expect(getWeekDayType('16/03/2020')).to.equal('week');
      expect(getWeekDayType('17/03/2020')).to.equal('week');
      expect(getWeekDayType('18/03/2020')).to.equal('week');

      // 20Mar2020(fri), 21Mar2020(sat), 22Mar2020(sun)
      expect(getWeekDayType('20/03/2020')).to.equal('week');
      expect(getWeekDayType('21/03/2020')).to.equal('weekend');
      expect(getWeekDayType('22/03/2020')).to.equal('weekend');

      // 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)
      expect(getWeekDayType('26/03/2020')).to.equal('week');
      expect(getWeekDayType('27/03/2020')).to.equal('week');
      expect(getWeekDayType('28/03/2020')).to.equal('weekend');
    });
  });
});


