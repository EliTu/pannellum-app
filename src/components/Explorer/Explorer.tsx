import React, { ChangeEvent, useMemo, useState } from "react";
import ExplorerControls from "./ExplorerControls";
import {
  ApartmentData,
  ApartmentImageData,
  ExplorerSelectInput,
  SelectedApartmentData,
} from "../../interfaces";
import getApartmentNumber from "../../utils/getApartmentNumber";
import formatSelectedDate from "../../utils/formatSelectDate";

interface ExplorerProps {
  apartmentData: ApartmentData[];
  selectedData: SelectedApartmentData;
  setSelectedData: React.Dispatch<
    React.SetStateAction<SelectedApartmentData | undefined>
  >;
}
export default function Explorer({
  apartmentData,
  selectedData,
  setSelectedData,
}: ExplorerProps) {
  const { selectedApartment } = selectedData;
  const [selectedApartmentValue, setSelectedApartmentValue] =
    useState<ApartmentData>(selectedApartment);
  const [selectedImageValue, setSelectedImageValue] =
    useState<ApartmentImageData>();

  function handleSelectedApartment(e: ChangeEvent<HTMLSelectElement>) {
    const selected = e.target.value;
    const newApartment = apartmentData.find(({ name }) =>
      name.includes(selected)
    );
    if (newApartment) {
      setSelectedData((prevData) => ({
        ...prevData,
        selectedApartment: newApartment,
      }));
      setSelectedApartmentValue(newApartment);
    }
  }

  function handleSelectedImageDate(e: ChangeEvent<HTMLSelectElement>) {
    const selectedDate = e.target.value;
    const newSelectedDate = selectedApartment.images.find(
      ({ date }) => formatSelectedDate(date) === selectedDate
    );

    setSelectedImageValue(newSelectedDate);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    if (selectedApartmentValue && selectedImageValue) {
      setSelectedData({
        selectedApartment: selectedApartmentValue,
        selectedImage: selectedImageValue,
      });
    }
  }

  const inputs: ExplorerSelectInput[] = useMemo(
    () => [
      {
        label: "Floor",
        options: ["2"],
      },
      {
        label: "Apartment",
        options: apartmentData.map(({ name }) => getApartmentNumber(name)),
        props: {
          onChange: handleSelectedApartment,
        },
      },
      {
        label: "Room",
        options: ["Kitchen", "Livingroom", "Bathroom"],
      },
      {
        label: "Date",
        options: selectedApartment.images
          .map(({ date }) => formatSelectedDate(date))
          .sort(),
        props: {
          onChange: handleSelectedImageDate,
        },
      },
      {
        label: "State",
        options: ["After Building"],
      },
    ],
    [apartmentData, selectedApartment]
  );

  return (
    <form onSubmit={handleSubmit}>
      <ExplorerControls inputs={inputs} />
    </form>
  );
}
