import { memo } from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';

import { CopyrightProps } from '../../Footer.types';
import * as S from './Copyright.styles';

type Props = WithTranslation & CopyrightProps;

const Copyright = memo(({ copyrightText, t }: Props) => (
  <S.Copyright>{t(`Footer:${copyrightText}`)}</S.Copyright>
));

Copyright.displayName = 'Copyright';

export default withTranslation()(Copyright);
