import { memo } from 'react';

import * as S from './DotButton.styles';
import { DotButtonProps } from './DotButton.types';

const DotButton = memo((props: DotButtonProps) => {
  return <S.DotButton {...props} type="button" />;
});

export default DotButton;
