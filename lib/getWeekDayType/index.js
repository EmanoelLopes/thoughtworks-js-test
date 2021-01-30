/*
  1 to 5 = Week Days
  0 and 6 = Weekend days
  Months: 0 to 11, 0 = January, 11 = December
  @param string
  @format d/m/YYYY
  @examples '23/0/2021' (23, Jan, 2021), '20/9/2021' (20, Oct, 2021);

  Some references:
  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
  https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/
  https://javascript.info/date
*/

function getWeekDayType(date) {
  try {
    const d = date.split('/').reverse().map(i => parseInt(i, 10));
    const day = new Date(...d).getDay();
    if (isNaN(day)) return 'Invalid Date';
    return (day === 0 || day === 6) ? 'weekend' : 'week';
  } catch(e) {
    return 'Invalid Date';
  }
}

module.exports = getWeekDayType;
