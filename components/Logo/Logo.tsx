import { Toxin } from 'public/img/svg';

import * as S from './Logo.styles';
import { LogoProps } from './Logo.types';

const Logo: React.FC<LogoProps> = ({ isLink, ...rest }: LogoProps) => (
  <S.LogoContainer as={isLink ? 'a' : 'div'} {...rest} href={isLink && '/'}>
    <S.Logo />
    <Toxin />
  </S.LogoContainer>
);
export default Logo;
