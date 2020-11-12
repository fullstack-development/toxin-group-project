import { Props } from 'shared/view/elements/Button/Button.types';

import * as S from './ArrowButton.styles';

const ArrowButton: React.FC<Props> = ({ ...rest }: Props) => (
  <S.ArrowButton>
    <S.BasicButton {...rest} isFilled>
      {rest.children}
    </S.BasicButton>
    <S.ArrowIcon />
  </S.ArrowButton>
);

export { ArrowButton };
