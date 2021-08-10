export default function getApartmentNumber(name: string) {
  const apartmentNumber = name.split(' ')[1];
  return apartmentNumber;
}
