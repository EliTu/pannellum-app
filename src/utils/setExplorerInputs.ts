import { ChangeEvent } from 'react';
import { ApartmentData, ExplorerSelectInput } from './../interfaces';
import formatSelectedDate from './formatSelectDate';
import getApartmentNumber from './getApartmentNumber';

type ChangeEventHandlerType = (e: ChangeEvent<HTMLSelectElement>) => void;

export default function setExplorerInputs(
  apartmentsData: ApartmentData[],
  selectedApartment: ApartmentData,
  handleSelectedApartment: ChangeEventHandlerType,
  handleSelectedImageDate: ChangeEventHandlerType
): ExplorerSelectInput[] {
  return [
    {
      label: 'Floor',
      options: ['2'],
    },
    {
      label: 'Apartment',
      options: apartmentsData.map(({ name }) => getApartmentNumber(name)),
      props: {
        onChange: handleSelectedApartment,
      },
    },
    {
      label: 'Room',
      options: ['Kitchen', 'Livingroom', 'Bathroom'],
    },
    {
      label: 'Date',
      options: selectedApartment.images.map(({ date }) => formatSelectedDate(date)).sort(),
      props: {
        onChange: handleSelectedImageDate,
      },
    },
    {
      label: 'State',
      options: ['After Building'],
    },
  ];
}
