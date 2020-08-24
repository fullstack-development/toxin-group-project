export type Apartment = {
  price: number;
  rating: number;
  reviews: number;
  class: 'economy' | 'luxury';
  amenities: {
    bedrooms: number;
    beds: number;
    bathrooms: number;
  };
  accessibility: {
    wideCorridor: boolean;
    invalidHelper: boolean;
  };
  opportunities: {
    smoking: boolean;
    keepPets: boolean;
    largeNumberOfPersons: boolean;
  };
  images: { url: string, alt: string }[];
}

export type ApartmentsList = {[k: number]: Apartment};
