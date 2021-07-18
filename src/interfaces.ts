type ImageDataParameters = 'date' | 'id' | 'url';
export type ApartmentImageData = Record<ImageDataParameters, string>;

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
    placeholder?: string;
    props?: React.SelectHTMLAttributes<HTMLSelectElement>;
}