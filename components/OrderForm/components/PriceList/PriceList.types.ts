type Item = {
  label: string;
  price: number;
  tooltip?: string;
  currency?: string;
};

export type Props = {
  items: Item[];
};
