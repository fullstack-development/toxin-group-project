import { Props as ReviewProps } from 'components/Comment/Comment.types';

export type Props = {
  price: number;
  number: number;
  reviews: ReviewProps[];
  href: string;
  imagePaths?: string[];
  reviewMeasure?: string;
  roomType?: string;
  measure?: string;
  currency?: string;
  rating?: number;
};
