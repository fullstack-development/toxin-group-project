import { ButtonProps } from 'components/Button/Button.types';

import * as S from './ArrowButton.styles';

const ArrowButton: React.FC<ButtonProps> = ({ isLink, ...rest }: ButtonProps) => (
  <S.ArrowButton>
    <S.BasicButton {...rest} isLink={isLink} isFilled>
      {rest.children}
    </S.BasicButton>
    <S.ArrowIcon />
  </S.ArrowButton>
);

export default ArrowButton;
