import React from "react";
import { ExplorerSelectInput } from "../../interfaces";

export default function SelectController({
  label,
  options,
  props,
}: ExplorerSelectInput) {
  return (
    <>
      <label htmlFor={label}>{label}:</label>
      <select name={label} id={label} {...props}>
        {label === "Date" && <option>Select date</option>}
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </>
  );
}
