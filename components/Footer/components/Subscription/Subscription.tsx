import { memo } from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';

import SubscriptionField from 'components/SubscriptionField/SubscriptionField';

import { SubscriptionProps } from '../../Footer.types';
import * as S from './Subscription.styles';

type Props = WithTranslation & SubscriptionProps;

const Subscription = memo(({ title, text, t }: Props) => (
  <S.Container>
    <S.Title>{t(`Footer:${title}`)}</S.Title>
    <S.Description>{t(`Footer:${text}`)}</S.Description>
    <S.FieldContainer>
      <SubscriptionField placeholder="Email" />
    </S.FieldContainer>
  </S.Container>
));

export default withTranslation()(Subscription);
