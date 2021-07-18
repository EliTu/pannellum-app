import React from 'react';
import ExplorerControls from './ExplorerControls';
import {
    ExplorerSelectInput
} from '../../interfaces';
export default function Explorer() {
    const inputs: ExplorerSelectInput[] = [{
        label: 'Floor',
        options: ['2']
    }, {
        label: 'Apartment',
        options: ['7', '5', '1']
    }, {
        label: 'Room',
        options: ['Kitchen', 'Livingroom', 'Bathroom']
    }, {
        label: 'Date',
        options: ['18/07/21', '17/07/21']
    }, {
        label: 'State',
        options: ['After Building']
    }];
    return ( 
        <div>
            <ExplorerControls inputs={inputs}/>
        </div>
    )
}