import { Review } from 'services/api/entities/types';
import { Props } from 'components/Comment/Comment.types';
import { TFunction } from 'i18next';

export type Props = {
  price: number;
  number: number;
  reviews: Review[];
  imagePaths?: string[];
  reviewMeasure?: string;
  roomType?: string;
  measure?: string;
  currency?: string;
  rating?: number;
  t?: TFunction;
};
