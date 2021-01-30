const getWeekDayType = require('../getWeekDayType');

describe('Get the correclty day type', function () {
  describe('Date Format: d-m-YYYY', function () {
    it('should show the message "Invalid Date" if it receives an invalid date format', function () {
      expect(getWeekDayType(``)).toEqual('Invalid Date');
      expect(getWeekDayType(NaN)).toEqual('Invalid Date');
      expect(getWeekDayType({})).toEqual('Invalid Date');
      expect(getWeekDayType([])).toEqual('Invalid Date');
      expect(getWeekDayType(null)).toEqual('Invalid Date');
      expect(getWeekDayType(undefined)).toEqual('Invalid Date');
      expect(getWeekDayType(false)).toEqual('Invalid Date');
      expect(getWeekDayType(true === true)).toEqual('Invalid Date');
      expect(getWeekDayType(false ?? true)).toEqual('Invalid Date');
    });

    it('should return the correctly week day type (week or weekend)', function () {
      // 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)
      expect(getWeekDayType('16/2/2020')).toEqual('week');
      expect(getWeekDayType('17/2/2020')).toEqual('week');
      expect(getWeekDayType('18/2/2020')).toEqual('week');

      // 20Mar2020(fri), 21Mar2020(sat), 22Mar2020(sun)
      expect(getWeekDayType('20/2/2020')).toEqual('week');
      expect(getWeekDayType('21/2/2020')).toEqual('weekend');
      expect(getWeekDayType('22/2/2020')).toEqual('weekend');

      // 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)
      expect(getWeekDayType('26/2/2020')).toEqual('week');
      expect(getWeekDayType('27/2/2020')).toEqual('week');
      expect(getWeekDayType('28/2/2020')).toEqual('weekend');

      // 18May2021(tue), 25Jul2021(sun), 25Dec2021(sat)
      expect(getWeekDayType('18/4/2021')).toEqual('week');
      expect(getWeekDayType('25/6/2021')).toEqual('weekend');
      expect(getWeekDayType('25/11/2021')).toEqual('weekend');
    });
  });
});


