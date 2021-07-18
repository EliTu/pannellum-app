import React, { ChangeEvent, useMemo } from "react";
import ExplorerControls from "./ExplorerControls";
import {
  ApartmentData,
  ApartmentImageData,
  ExplorerSelectInput,
} from "../../interfaces";
import getApartmentNumber from "../../utils/getApartmentNumber";
import formatSelectedDate from "../../utils/formatSelectDate";

interface ExplorerProps {
  apartmentData: ApartmentData[];
  selectedApartment: ApartmentData;
  setSelectedApartment: React.Dispatch<
    React.SetStateAction<ApartmentData | undefined>
  >;
  setSelectedImage: React.Dispatch<
    React.SetStateAction<ApartmentImageData | undefined>
  >;
}
export default function Explorer({
  selectedApartment,
  apartmentData,
  setSelectedApartment,
  setSelectedImage,
}: ExplorerProps) {
  function handleSelectedApartment(e: ChangeEvent<HTMLSelectElement>) {
    const selected = e.target.value;
    const newApartment = apartmentData.find(({ name }) =>
      name.includes(selected)
    );
    setSelectedApartment(newApartment);
  }

  function handleSelectedImageDate(e: ChangeEvent<HTMLSelectElement>) {
    const selectedDate = e.target.value;
    const newSelectedDate = selectedApartment.images.find(
      ({ date }) => formatSelectedDate(date) === selectedDate
    );

    setSelectedImage(newSelectedDate);
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
        placeholder: "Choose date",
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
    <div>
      <ExplorerControls inputs={inputs} />
    </div>
  );
}
