type ImageDataParameters = 'date' | 'id' | 'url';
type ImageData = Record<ImageDataParameters, string>;

export interface ApartmentData {
    name: string;
    images: ImageData[];
}
export interface ApiData {
    apartments: ApartmentData[];
}