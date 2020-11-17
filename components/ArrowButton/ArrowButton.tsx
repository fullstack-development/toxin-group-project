import { memo } from 'react';

import { Props } from 'components/Button/Button.types';

import * as S from './ArrowButton.styles';

const ArrowButton = memo((props: Props) => (
  <S.ArrowButton>
    <S.BasicButton {...props} isFilled>
      {props.children}
    </S.BasicButton>
    <S.ArrowIcon />
  </S.ArrowButton>
));

export default ArrowButton;
