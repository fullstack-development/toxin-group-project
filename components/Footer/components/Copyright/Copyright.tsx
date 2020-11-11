import { ComponentType, memo } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

import { CopyrightProps } from '../../Footer.types';
import * as S from './Copyright.styles';

const Copyright: ComponentType<
  WithTranslation & CopyrightProps
> = memo(({ copyrightText, t }: CopyrightProps) => (
  <S.Copyright>{t(`Footer:${copyrightText}`)}</S.Copyright>
));

Copyright.displayName = 'Copyright';

export default withTranslation()(Copyright);
