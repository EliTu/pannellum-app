import format from 'date-fns/format';

export default function formatSelectedDate(date: string) {
  const [dateString, timeString] = date.split('_');

  const { first: year, second: month, third: day } = extractPreciseDateUnits(dateString, 'date');
  const {
    first: hour,
    second: minute,
    third: second,
  } = extractPreciseDateUnits(timeString, 'time');

  return format(new Date(year, month, day, hour, minute, second), 'dd/MM/yyyy hh:mm:dd a');
}

function extractPreciseDateUnits(fullString: string, by: 'date' | 'time'): Record<string, number> {
  let first = 0,
    second = 0,
    third = 0;

  if (by === 'date') {
    first = +fullString.substring(0, 4);
    second = +fullString.substring(4, 6);
    third = +fullString.substring(6, 8);
  } else if (by === 'time') {
    first = +fullString.substring(0, 2);
    second = +fullString.substring(2, 4);
    third = +fullString.substring(4, 6);
  }

  return { first, second, third };
}
