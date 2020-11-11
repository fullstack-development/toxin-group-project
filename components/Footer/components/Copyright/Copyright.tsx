import { memo } from 'react';

import { CopyrightProps } from '../../Footer.types';
import * as S from './Copyright.styles';

const Copyright = memo(({ copyrightText }: CopyrightProps) => (
  <S.Copyright>{copyrightText}</S.Copyright>
));

Copyright.displayName = 'Copyright';

export default Copyright;
