import { Filters } from '../../api/entities/types';

export type Props = {
  loadRooms: (options?: Filters) => void;
  initialFilters?: Filters;
};
