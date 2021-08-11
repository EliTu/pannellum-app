import React, { createContext, useMemo, useState } from 'react';
import { ApartmentData, SelectedApartmentData, ExplorerContextValues } from '../interfaces';

export const ExplorerContext = createContext<ExplorerContextValues>({
  apartmentsData: [],
  selectedData: { selectedApartment: { images: [], name: '' }, selectedImage: undefined },
  setApartmentsData: () => null,
  setSelectedData: () => null,
});

export function ExplorerContextProvider(props: any) {
  const [apartmentsData, setApartmentsData] = useState<ApartmentData[]>();
  const [selectedData, setSelectedData] = useState<SelectedApartmentData>();

  const values = useMemo(
    () => ({ apartmentsData, selectedData, setApartmentsData, setSelectedData }),
    [apartmentsData, selectedData]
  );

  return <ExplorerContext.Provider value={values} {...props} />;
}
