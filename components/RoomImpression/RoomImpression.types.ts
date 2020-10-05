type Props = {
  title: string;
  numberOfRatings: {
    excellent: number;
    good: number;
    normal: number;
    bad: number;
  };
};

type RatingValues = {
  excellent: string;
  good: string;
  normal: string;
  bad: string;
};

export type { Props, RatingValues };
