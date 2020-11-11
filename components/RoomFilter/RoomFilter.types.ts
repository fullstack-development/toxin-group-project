import { Accessibility, AdditionalAmenities, Opportunities } from 'services/api/entities/types';

import { Filters } from '../../services/api/entities/types';

export type Props = {
  isPending?: boolean;
  loadRooms: (options?: Filters) => void;
  initialFilters?: Filters;
};

export type OptionName = keyof (Opportunities & Accessibility & AdditionalAmenities);
