import SocialMedia from 'components/SocialMedia/SocialMedia';

import Copyright from './components/Copyright/Copyright';
import Logo from './components/Logo/Logo';
import Nav from './components/Nav/Nav';
import Subscription from './components/Subscription/Subscription';
import * as S from './Footer.styles';
import { FooterProps } from './Footer.types';

const Footer: React.FC<FooterProps> = ({
  subscription,
  description,
  copyrightText,
}: FooterProps) => (
  <>
    <S.MainContainer>
      <Logo description={description} />
      <Nav />
      <Subscription {...subscription} />
    </S.MainContainer>
    <S.BottomContainer>
      <Copyright copyrightText={copyrightText} />
      <SocialMedia />
    </S.BottomContainer>
  </>
);

export default Footer;
