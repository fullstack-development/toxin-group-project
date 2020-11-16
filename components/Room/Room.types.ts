import { Review } from 'services/api/entities/types';

export type RoomProps = {
  price: number;
  number: number;
  reviews: Review[];
  imagePaths?: string[];
  reviewMeasure?: string;
  roomType?: string;
  measure?: string;
  currency?: string;
  rating?: number;
};
