import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import NavAccountSettings from 'components/NavAccountSettings/NavAccountSettings';
import { AppState } from 'redux/store.types';
import { getSubscriptionData as getSubscriptionDataRequest } from 'redux/Subscriptions/redux/actions';
import { SubscriptionData } from 'services/api/entities/types';
import { User } from 'services/api/Firebase/modules/Authentication/types';

import Subscriptions from '../Subscriptions/Subscriptions';
import * as S from './MainContent.styles';

type StateProps = {
  user: User;
  subscriptionData: SubscriptionData;
};

const mapState = (state: AppState): StateProps => ({
  user: state.auth.user,
  subscriptionData: state.subscriptions.subscriptionData,
});

const mapDispatch = {
  loadSubscriptionData: getSubscriptionDataRequest,
};

type Props = StateProps & typeof mapDispatch;

const MainContent = memo(({ user, subscriptionData, loadSubscriptionData }: Props) => {
  const getSubscriptionData = useCallback(
    (currentUser) => {
      if (currentUser) loadSubscriptionData(currentUser.email);
    },
    [loadSubscriptionData],
  );

  useEffect(() => {
    getSubscriptionData(user);
  }, [getSubscriptionData, user]);

  const { t } = useTranslation('AccountSettings');

  return (
    <S.MainContent>
      <NavAccountSettings title={t('Notifications')} />
      <S.Title>{t('Notifications')}</S.Title>
      <Subscriptions
        email={user ? user.email : null}
        hasSpecialOffers={subscriptionData ? subscriptionData.hasSpecialOffers : false}
      />
    </S.MainContent>
  );
});

MainContent.displayName = 'MainContent';

export default connect(mapState, mapDispatch)(MainContent);
