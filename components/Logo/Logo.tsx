import { AnchorHTMLAttributes } from 'react';

import Toxin from '../../public/img/toxin.svg';
import * as S from './Logo.styles';

type LogoProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const Logo: React.FC<LogoProps> = (props: LogoProps) => (
  <S.LogoContainer {...props}>
    <S.Logo />
    <Toxin />
  </S.LogoContainer>
);
export default Logo;
