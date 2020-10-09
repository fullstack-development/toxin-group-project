type Options = {
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
};
export type Apartment = {
  id: number;
  price: number;
  rating: number;
  reviews: number;
  class: 'economy' | 'luxury';
  images: { url: string; alt: string }[];
} & Options;

export type Filters = {
  price: {
    from: number;
    to: number;
  };
  booked: {
    from: number;
    to: number;
  };
} & Options;

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

export type BookingData = {
  id: number;
  apartmentId: number;
  from: Date;
  to: Date;
};
