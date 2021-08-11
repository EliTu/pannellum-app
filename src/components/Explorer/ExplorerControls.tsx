import React from 'react';
import SelectController from './SelectController';
import { ExplorerSelectInput } from '../../interfaces';
import { ControlButton, ControlsContainer } from './ExplorerStyles';

interface ExplorerControlsProps {
  inputs: ExplorerSelectInput[];
  isDateSelected: boolean;
}

export default function ExplorerControls({ inputs, isDateSelected }: ExplorerControlsProps) {
  return (
    <ControlsContainer>
      {inputs.map((input) => (
        <SelectController key={input.label} {...input} />
      ))}
      <ControlButton disabled={!isDateSelected}>Go</ControlButton>
    </ControlsContainer>
  );
}
