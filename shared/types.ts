import { Apartment, Review as ServerReview } from 'services/api/entities/types';

export type Review = Omit<ServerReview, 'date'> & {
  date: Date;
};

export type ApartmentWithTransformedDate = Omit<Apartment, 'reviews'> & {
  reviews: Review[];
};
