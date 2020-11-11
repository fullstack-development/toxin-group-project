import { memo } from 'react';

import { Props } from 'components/Button/Button.types';

import * as S from './ArrowButton.styles';

const ArrowButton = memo(({ ...rest }: Props) => (
  <S.ArrowButton>
    <S.BasicButton {...rest} isFilled>
      {rest.children}
    </S.BasicButton>
    <S.ArrowIcon />
  </S.ArrowButton>
));

ArrowButton.displayName = 'ArrowButton';

export default ArrowButton;
