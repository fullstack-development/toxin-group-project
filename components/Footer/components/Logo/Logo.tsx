import { memo } from 'react';

import LogoImg from 'components/Logo/Logo';

import { LogoProps } from '../../Footer.types';
import * as S from './Logo.styles';

const Logo = memo(({ description }: LogoProps) => (
  <S.Container>
    <S.ImgContainer>
      <LogoImg />
    </S.ImgContainer>
    <S.Description>{description}</S.Description>
  </S.Container>
));

Logo.displayName = 'Logo';

export default Logo;
