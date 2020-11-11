import { memo } from 'react';

import ColorsTypesPage from 'components/ColorsTypesPage/ColorsTypesPage';

const ColorsAndTypes = memo(() => <ColorsTypesPage />);

ColorsAndTypes.displayName = 'ColorsAndTypes';

export default ColorsAndTypes;
