import i18next from 'shared/lang';

import { FooterProps } from './Footer.types';

const data: Required<FooterProps> = {
  subscription: {
    title: i18next.t('Subscription'),
    text: i18next.t('Receive special offers and service news'),
  },
  description: i18next.t(
    'Reservation of rooms in the best hotel of 2019 according to the "Hotel Views" association',
  ),
  copyrightText: i18next.t('Copyright © 2018 Toxin Hotel. All rights reserved.'),
};

export default data;
