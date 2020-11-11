import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import SocialMedia from 'components/SocialMedia/SocialMedia';

import Copyright from './components/Copyright/Copyright';
import Logo from './components/Logo/Logo';
import Nav from './components/Nav/Nav';
import Subscription from './components/Subscription/Subscription';
import footerData from './Footer.data';
import * as S from './Footer.styles';
import { FooterProps } from './Footer.types';

const Footer = memo(
  ({
    subscription = footerData.subscription,
    description = footerData.description,
    copyrightText = footerData.copyrightText,
  }: FooterProps) => {
    const { t } = useTranslation('Footer');

    return (
      <S.Wrapper>
        <S.Title>{t('Site map')}</S.Title>
        <S.MainContainer>
          <Logo description={description} />
          <Nav />
          <Subscription {...subscription} />
        </S.MainContainer>
        <S.BottomContainer>
          <Copyright copyrightText={copyrightText} />
          <SocialMedia />
        </S.BottomContainer>
      </S.Wrapper>
    );
  },
);

Footer.displayName = 'Footer';

export default Footer;
