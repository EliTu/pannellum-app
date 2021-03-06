// Types
type ImageDataParameters = 'date' | 'id' | 'url';
export type ApartmentImageData = Record<ImageDataParameters, string>;

// Interfaces

export interface NavigationLink {
  label: string;
  to: string;
}
export interface ApartmentData {
  name: string;
  images: ApartmentImageData[];
}
export interface ApiData {
  apartments: ApartmentData[];
}

export interface ExplorerSelectInput {
  label: string;
  options: string[];
  props?: React.SelectHTMLAttributes<HTMLSelectElement>;
}

export interface SelectedApartmentData {
  selectedApartment: ApartmentData;
  selectedImage?: ApartmentImageData;
}

export interface ExplorerContextValues {
  apartmentsData: ApartmentData[];
  selectedData: SelectedApartmentData;
  setApartmentsData: React.Dispatch<React.SetStateAction<ApartmentData[]>>;
  setSelectedData: React.Dispatch<React.SetStateAction<SelectedApartmentData>>;
}
