import Logo from './components/Logo/Logo';
import Subscription from './components/Subscription/Subscription';
import * as S from './Footer.styles';
import { FooterProps } from './Footer.types';

const Footer: React.FC<FooterProps> = ({ subscription, description }: FooterProps) => (
  <S.Container>
    <Logo description={description} />
    <Subscription {...subscription} />
  </S.Container>
);

export default Footer;
