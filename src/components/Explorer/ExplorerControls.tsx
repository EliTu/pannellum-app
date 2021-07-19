import React from "react";
import { ExplorerSelectInput } from "../../interfaces";
import { ControlButton, ControlsContainer } from "./Styled";

interface ExplorerControlsProps {
  inputs: ExplorerSelectInput[];
  isDateSelected: boolean;
}
export default function ExplorerControls({
  inputs,
  isDateSelected,
}: ExplorerControlsProps) {
  return (
    <ControlsContainer>
      {inputs.map(({ label, options, props }) => (
        <React.Fragment key={label}>
          <label htmlFor={label}>{label}:</label>
          <select name={label} id={label} {...props}>
            {label === "Date" && <option>Select date</option>}
            {options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </React.Fragment>
      ))}
      <ControlButton disabled={!isDateSelected}>Go</ControlButton>
    </ControlsContainer>
  );
}
