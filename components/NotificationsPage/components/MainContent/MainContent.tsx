import { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';

import { SubscriptionData } from 'api/entities/types';
import { User } from 'api/Firebase/modules/Authentication/types';
import NavAccountSettings from 'components/NavAccountSettings/NavAccountSettings';
import { AppState } from 'redux/store.types';
import { getSubscriptionData as getSubscriptionDataRequest } from 'redux/Subscriptions/redux/actions';

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
  startGetSubscriptionData: getSubscriptionDataRequest,
};

type Props = StateProps & typeof mapDispatch;

const MainContent = ({ user, subscriptionData, startGetSubscriptionData }: Props): JSX.Element => {
  const getSubscriptionData = useCallback(
    (currentUser) => {
      if (currentUser) startGetSubscriptionData(currentUser.email);
    },
    [startGetSubscriptionData],
  );

  useEffect(() => {
    getSubscriptionData(user);
  }, [getSubscriptionData, user]);

  return (
    <S.MainContent>
      <NavAccountSettings title="Уведомления" />
      <S.Title>Уведомления</S.Title>
      <Subscriptions
        email={user ? user.email : null}
        specialOffers={subscriptionData ? subscriptionData.specialOffers : false}
      />
    </S.MainContent>
  );
};
export default connect(mapState, mapDispatch)(MainContent);
