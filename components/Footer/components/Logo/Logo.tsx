import { ComponentType, memo } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

import LogoImg from 'components/Logo/Logo';

import { LogoProps } from '../../Footer.types';
import * as S from './Logo.styles';

const Logo: ComponentType<WithTranslation & LogoProps> = memo(({ description, t }: LogoProps) => (
  <S.Container>
    <S.ImgContainer>
      <LogoImg />
    </S.ImgContainer>
    <S.Description>{t(`Footer:${description}`)}</S.Description>
  </S.Container>
));

Logo.displayName = 'Logo';

export default withTranslation()(Logo);
