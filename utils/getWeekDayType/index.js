/* 
  1 to 5 = Week Days
  0 and 6 = Weekend days
  @param date string
  @format DD-MM-YYYY - example '2021-02-22'
*/

function getWeekDayType(date) {
  if (typeof date !== 'string') return 'Invalid date';
  const d = new Date(date.split('-').reverse().join('-')).getDay();
  return (d === 5 || d === 6) ? 'weekend' : 'week';
}

module.exports = getWeekDayType;