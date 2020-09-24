import Logo from 'components/Logo/Logo';
import SubscriptionField from 'components/SubscriptionField/SubscriptionField';

import * as S from './Footer.styles';

type FooterProps = unknown;

const Footer: React.FC<FooterProps> = () => (
  <S.Container>
    <Logo isLink />

    <SubscriptionField placeholder="Email" />
  </S.Container>
);

export default Footer;
