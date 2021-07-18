import React, { useMemo } from "react";
import ExplorerControls from "./ExplorerControls";
import { ApartmentData, ExplorerSelectInput } from "../../interfaces";
import setApartmentNumber from "../../utils/setApartmentNumber";
import setSelectDate from "../../utils/setSelectDate";

interface ExplorerProps {
  apartmentData: ApartmentData[];
  selectedApartment: ApartmentData;
  setSelectedApartment: React.Dispatch<
    React.SetStateAction<ApartmentData | undefined>
  >;
}
export default function Explorer({
  selectedApartment,
  apartmentData,
  setSelectedApartment,
}: ExplorerProps) {
  function handleSelectedApartment(e: any) {
    const selected = e.target.value;
    const newApartment = apartmentData.find(({ name }) =>
      name.includes(selected)
    );
    if (selectedApartment === newApartment) return;

    setSelectedApartment(newApartment);
  }

  const inputs: ExplorerSelectInput[] = useMemo(
    () => [
      {
        label: "Floor",
        options: ["2"],
      },
      {
        label: "Apartment",
        options: apartmentData.map(({ name }) => setApartmentNumber(name)),
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
          .map(({ date }) => setSelectDate(date))
          .sort(),
        placeholder: "Choose date",
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
