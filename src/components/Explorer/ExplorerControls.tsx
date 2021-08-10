import React from 'react';
import SelectController from './SelectController';
import { ExplorerSelectInput } from '../../interfaces';
import { ControlButton, ControlsContainer } from './Styled';

interface ExplorerControlsProps {
  inputs: ExplorerSelectInput[];
  isDateSelected: boolean;
}

export default function ExplorerControls({ inputs, isDateSelected }: ExplorerControlsProps) {
  return (
    <ControlsContainer>
      {inputs.map((inputProps) => (
        <SelectController key={inputProps.label} {...inputProps} />
      ))}
      <ControlButton disabled={!isDateSelected}>Go</ControlButton>
    </ControlsContainer>
  );
}
