import React, { ChangeEvent, useMemo, useState, useCallback, FormEvent, useContext } from 'react';
import ExplorerControls from './ExplorerControls';
import { ApartmentData, ApartmentImageData } from '../../interfaces';
import formatSelectedDate from '../../utils/formatSelectDate';
import { ExplorerForm } from './ExplorerStyles';
import setExplorerInputs from '../../utils/setExplorerInputs';
import { ExplorerContext } from '../../Context/ExplorerContextProvider';

export default function Explorer() {
  const {
    apartmentsData,
    selectedData: { selectedApartment },
    setSelectedData,
  } = useContext(ExplorerContext);

  const [selectedApartmentValue, setSelectedApartmentValue] =
    useState<ApartmentData>(selectedApartment);
  const [selectedDateValue, setSelectedDateValue] = useState<ApartmentImageData>();

  const handleSelectedApartment = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const selected = e.target.value;
      const newApartment = apartmentsData.find(({ name }) => name.includes(selected));
      if (newApartment) {
        setSelectedData((prevData) => ({
          ...prevData,
          selectedApartment: newApartment,
        }));
        setSelectedApartmentValue(newApartment);
      }
    },
    [apartmentsData, setSelectedData]
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
        apartmentsData,
        selectedApartment,
        handleSelectedApartment,
        handleSelectedImageDate
      ),
    [apartmentsData, handleSelectedApartment, handleSelectedImageDate, selectedApartment]
  );

  return (
    <ExplorerForm onSubmit={handleSubmit}>
      <span>Navigate:</span>
      <ExplorerControls inputs={ExplorerSelectInputs} isDateSelected={Boolean(selectedDateValue)} />
    </ExplorerForm>
  );
}
