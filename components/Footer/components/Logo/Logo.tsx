import LogoImg from 'components/Logo/Logo';

import { LogoProps } from '../../Footer.types';
import * as S from './Logo.styles';

const Logo: React.FC<LogoProps> = ({ description }: LogoProps) => (
  <S.Container>
    <S.ImgContainer>
      <LogoImg isLink />
    </S.ImgContainer>
    <S.Description>{description}</S.Description>
  </S.Container>
);

export default Logo;
