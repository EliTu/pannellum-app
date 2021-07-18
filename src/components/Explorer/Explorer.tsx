import React, { useState, useMemo } from 'react';
import ExplorerControls from './ExplorerControls';
import {
    ApartmentData,
    ExplorerSelectInput
} from '../../interfaces';
import setApartmentNumber from '../../utils/setApartmentNumber';
import setSelectDate from '../../utils/setSelectDate';

interface ExplorerProps {
    apartmentData: ApartmentData[]
}
export default function Explorer({ apartmentData }: ExplorerProps) {
    const [selectedApartment, setSelectedApartment] = useState<ApartmentData>(apartmentData[0]);
    
    const inputs: ExplorerSelectInput[] = useMemo(() => [{
        label: 'Floor',
        options: ['2']
    }, {
        label: 'Apartment',
        options: apartmentData.map(({name}) => setApartmentNumber(name))
    }, {
        label: 'Room',
        options: ['Kitchen', 'Livingroom', 'Bathroom']
    }, {
        label: 'Date',
        options: selectedApartment.images.map(({ date }) => setSelectDate(date)).sort(),
        placeholder: 'Choose date'
    }, {
        label: 'State',
        options: ['After Building']
    }], [apartmentData, selectedApartment]);

    return ( 
        <div>
            <ExplorerControls inputs={inputs}/>
        </div>
    )
}