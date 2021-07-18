import React from 'react';
import {
    ExplorerSelectInput
} from '../../interfaces';

interface ExplorerControlsProps {
    inputs: ExplorerSelectInput[]
}
export default function ExplorerControls({inputs}: ExplorerControlsProps) {
    return (
        <div>
             {inputs.map(({label, options}) => (
                 <React.Fragment key={label}>
                     <label htmlFor={label}>{label}</label>
                     <select name={label} id={label}>
                         {options.map(option => (<option key={option}>{option}</option>))}
                     </select>
                 </React.Fragment>
             ))}   
            <button>Go</button>
        </div>
    )
}
