import { memo } from 'react';

import CardsPage from 'components/CardsPage/CardsPage';

const Cards = memo(() => <CardsPage />);

Cards.displayName = 'Cards';

export default Cards;
