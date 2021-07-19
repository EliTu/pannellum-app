import React from "react";
import { ExplorerSelectInput } from "../../interfaces";

interface ExplorerControlsProps {
  inputs: ExplorerSelectInput[];
  isDateSelected: boolean;
}
export default function ExplorerControls({
  inputs,
  isDateSelected,
}: ExplorerControlsProps) {
  return (
    <div>
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
      <button disabled={!isDateSelected}>Go</button>
    </div>
  );
}
