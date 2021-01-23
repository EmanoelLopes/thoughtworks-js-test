'use strict'

const chai = require('chai');
const getWeekDayType = require('../utils/getWeekDayType');
const expect = chai.expect;

describe('Get the correclty day type', function () {
  it('should show the message "Enter a valid date" if is invalid format date', function () {
    expect(getWeekDayType(10)).to.equal('Invalid date');
    expect(getWeekDayType(NaN)).to.equal('Invalid date');
    expect(getWeekDayType({})).to.equal('Invalid date');
    expect(getWeekDayType([])).to.equal('Invalid date');
  });

  it('should return "week" if input date type is a week day', function () {
    expect(getWeekDayType('2021-01-20')).to.equal('week');
    expect(getWeekDayType('2021-01-21')).to.equal('week');
    expect(getWeekDayType('2021-01-22')).to.equal('week');
  });

  it('should return "weekend" if input date type is a week day', function () {
    expect(getWeekDayType('2021-01-23')).to.equal('weekend');
    expect(getWeekDayType('2021-01-24')).to.equal('weekend');
  });
});


