import { withTranslation, WithTranslation } from 'react-i18next';

import LogoImg from 'components/Logo/Logo';

import { LogoProps } from '../../Footer.model';
import * as S from './Logo.styles';

const Logo: React.ComponentType<WithTranslation & LogoProps> = ({ description, t }: LogoProps) => (
  <S.Container>
    <S.ImgContainer>
      <LogoImg />
    </S.ImgContainer>
    <S.Description>{t(`Footer:${description}`)}</S.Description>
  </S.Container>
);

export default withTranslation()(Logo);
