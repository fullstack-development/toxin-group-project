import { Filters } from '../../api/entities/types';

export type Props = {
  handleRequest: (options?: Filters) => void;
  initialFilters?: Filters;
};
