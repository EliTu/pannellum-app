import React from "react";
import { ExplorerSelectInput } from "../../interfaces";

interface ExplorerControlsProps {
  inputs: ExplorerSelectInput[];
}
export default function ExplorerControls({ inputs }: ExplorerControlsProps) {
  return (
    <div>
      {inputs.map(({ label, options, placeholder, props }) => (
        <React.Fragment key={label}>
          <label htmlFor={label}>{label}:</label>
          <select name={label} id={label} {...props}>
            {options.map((option) => (
              <option key={option} placeholder={placeholder}>
                {option}
              </option>
            ))}
          </select>
        </React.Fragment>
      ))}
      <button>Go</button>
    </div>
  );
}
