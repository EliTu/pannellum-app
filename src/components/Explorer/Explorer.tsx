import React, { ChangeEvent, useMemo, useState, useCallback, FormEvent } from 'react';
import ExplorerControls from './ExplorerControls';
import { ApartmentData, ApartmentImageData, SelectedApartmentData } from '../../interfaces';
import formatSelectedDate from '../../utils/formatSelectDate';
import { ExplorerForm } from './ExplorerStyles';
import setExplorerInputs from '../../utils/setExplorerInputs';

interface ExplorerProps {
  apartmentData: ApartmentData[];
  selectedData: SelectedApartmentData;
  setSelectedData: React.Dispatch<React.SetStateAction<SelectedApartmentData | undefined>>;
}
export default function Explorer({ apartmentData, selectedData, setSelectedData }: ExplorerProps) {
  const { selectedApartment } = selectedData;
  const [selectedApartmentValue, setSelectedApartmentValue] =
    useState<ApartmentData>(selectedApartment);
  const [selectedDateValue, setSelectedDateValue] = useState<ApartmentImageData>();

  const handleSelectedApartment = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const selected = e.target.value;
      const newApartment = apartmentData.find(({ name }) => name.includes(selected));
      if (newApartment) {
        setSelectedData((prevData) => ({
          ...prevData,
          selectedApartment: newApartment,
        }));
        setSelectedApartmentValue(newApartment);
      }
    },
    [apartmentData, setSelectedData]
  );

  const handleSelectedImageDate = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const selectedDate = e.target.value;
      const newSelectedDate = selectedApartment.images.find(
        ({ date }) => formatSelectedDate(date) === selectedDate
      );

      setSelectedDateValue(newSelectedDate);
    },
    [selectedApartment.images]
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (selectedApartmentValue && selectedDateValue) {
      setSelectedData({
        selectedApartment: selectedApartmentValue,
        selectedImage: selectedDateValue,
      });
    }
  };

  const ExplorerSelectInputs = useMemo(
    () =>
      setExplorerInputs(
        apartmentData,
        selectedApartment,
        handleSelectedApartment,
        handleSelectedImageDate
      ),
    [apartmentData, handleSelectedApartment, handleSelectedImageDate, selectedApartment]
  );

  return (
    <ExplorerForm onSubmit={handleSubmit}>
      <span>Navigate:</span>
      <ExplorerControls inputs={ExplorerSelectInputs} isDateSelected={Boolean(selectedDateValue)} />
    </ExplorerForm>
  );
}
