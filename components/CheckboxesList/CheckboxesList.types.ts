export type Option = {
  name: string;
  value: string;
  label: string;
  title?: string;
};

export type CheckboxesListProps = {
  roomOptions: Option[];
};
