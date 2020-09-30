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
  additionalAmenities: {
    breakfast: boolean;
    desk: boolean;
    chair: boolean;
    crib: boolean;
    tv: boolean;
    shampoo: boolean;
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
  images: { url: string; alt: string }[];
};

export type ApartmentsList = { [k: number]: Apartment };

export type ProfileData = {
  email: string;
  password: string;
  name: string;
  surname: string;
  birthDate: string;
  gender: 'male' | 'female';
  receiveOffers: boolean;
};
