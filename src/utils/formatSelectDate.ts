import format from 'date-fns/format';

export default function formatSelectedDate(date: string) {
  const [dateString] = date.split('_');
  const year = +dateString.substring(0, 4);
  const month = +dateString.substring(4, 6);
  const day = +dateString.substring(6, 8);

  return format(new Date(year, month, day), 'dd/MM/yyyy');
}
