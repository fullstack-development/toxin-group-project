import { memo } from 'react';

import SubscriptionField from 'components/SubscriptionField/SubscriptionField';

import { SubscriptionProps } from '../../Footer.types';
import * as S from './Subscription.styles';

const Subscription = memo(({ title, text }: SubscriptionProps) => (
  <S.Container>
    <S.Title>{title}</S.Title>
    <S.Description>{text}</S.Description>
    <S.FieldContainer>
      <SubscriptionField placeholder="Email" />
    </S.FieldContainer>
  </S.Container>
));

Subscription.displayName = 'Subscription';

export default Subscription;
