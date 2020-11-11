import { withTranslation, WithTranslation } from 'react-i18next';

import SubscriptionField from 'components/SubscriptionField/SubscriptionField';

import { SubscriptionProps } from '../../Footer.types';
import * as S from './Subscription.styles';

const Subscription: React.ComponentType<WithTranslation & SubscriptionProps> = ({
  title,
  text,
  t,
}: SubscriptionProps) => (
  <S.Container>
    <S.Title>{t(`Footer:${title}`)}</S.Title>
    <S.Description>{t(`Footer:${text}`)}</S.Description>
    <S.FieldContainer>
      <SubscriptionField placeholder="Email" />
    </S.FieldContainer>
  </S.Container>
);

export default withTranslation()(Subscription);
