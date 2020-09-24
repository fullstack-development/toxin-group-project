import Logo from './components/Logo/Logo';
import Nav from './components/Nav/Nav';
import Subscription from './components/Subscription/Subscription';
import * as S from './Footer.styles';
import { FooterProps } from './Footer.types';

const Footer: React.FC<FooterProps> = ({ subscription, description }: FooterProps) => (
  <S.Container>
    <Logo description={description} />
    <Nav />
    <Subscription {...subscription} />
  </S.Container>
);

export default Footer;
