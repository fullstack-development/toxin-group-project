import { withTranslation, WithTranslation } from 'react-i18next';

import { Logo as LogoImg } from 'shared/view/elements';

import { LogoProps } from '../../Footer.types';
import * as S from './Logo.styles';

const Logo: React.ComponentType<WithTranslation & LogoProps> = ({ description, t }: LogoProps) => (
  <S.Container>
    <S.ImgContainer>
      <LogoImg />
    </S.ImgContainer>
    <S.Description>{t(`Footer:${description}`)}</S.Description>
  </S.Container>
);

const TranslatedComponent = withTranslation()(Logo);
export { TranslatedComponent as Logo };
