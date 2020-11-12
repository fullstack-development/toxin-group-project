import { withTranslation, WithTranslation } from 'react-i18next';

import { CopyrightProps } from '../../Footer.types';
import * as S from './Copyright.styles';

const Copyright: React.ComponentType<WithTranslation & CopyrightProps> = ({
  copyrightText,
  t,
}: CopyrightProps) => <S.Copyright>{t(`Footer:${copyrightText}`)}</S.Copyright>;

export default withTranslation()(Copyright);
