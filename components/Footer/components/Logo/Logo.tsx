import { memo } from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';

import LogoImg from 'components/Logo/Logo';

import { LogoProps } from '../../Footer.types';
import * as S from './Logo.styles';

type Props = WithTranslation & LogoProps;

const Logo = memo(({ description, t }: Props) => (
  <S.Container>
    <S.ImgContainer>
      <LogoImg />
    </S.ImgContainer>
    <S.Description>{t(`Footer:${description}`)}</S.Description>
  </S.Container>
));

export default withTranslation()(Logo);
