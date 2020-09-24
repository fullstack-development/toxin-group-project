import Logo from 'components/Logo/Logo';
import SubscriptionField from 'components/SubscriptionField/SubscriptionField';

import * as Sub from './components/Subscription/Subscription.styles';
import * as S from './Footer.styles';
import { FooterProps } from './Footer.types';

const Footer: React.FC<FooterProps> = ({ subscription, description }: FooterProps) => (
  <S.Container>
    <Logo isLink />
    <Sub.Container>
      <Sub.Title>{subscription.title}</Sub.Title>
      <Sub.Description>{subscription.text}</Sub.Description>
      <Sub.FieldContainer>
        <SubscriptionField placeholder="Email" />
      </Sub.FieldContainer>
    </Sub.Container>
  </S.Container>
);

export default Footer;
