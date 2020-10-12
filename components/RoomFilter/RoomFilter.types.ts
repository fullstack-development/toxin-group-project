import { Filters } from '../../api/entities/types';

export type Props = {
  handleRequest: (options?: Filters) => void;
  initialValues?: Filters;
};
