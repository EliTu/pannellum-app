import format from "date-fns/format";

export default function setSelectDate(date: string) {
    const [dateString, timeString] = date.split('_');
    const year = +dateString.substring(0, 4);
    const month = +dateString.substring(4, 6);
    const day = +dateString.substring(6, 8);
    
    return format(new Date(year, month, day), 'dd/MM/yyyy');
}