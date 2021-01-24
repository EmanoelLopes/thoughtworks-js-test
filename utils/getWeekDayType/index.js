/*
  0 to 4 = Week Days
  5 and 6 = Weekend days
  @param date string
  @format DD/MM/YYYY - example '23/01/2021'
*/

function getWeekDayType(date) {
  if (typeof date !== 'string') return 'Invalid date';
  const d = new Date(date.split('/').reverse().join('-')).getDay();
  const weekDayType = (d === 5 || d === 6) ? 'weekend' : 'week';
  return weekDayType;
}

module.exports = getWeekDayType;
