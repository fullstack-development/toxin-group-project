import { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';

import { AdditionalUserInformation } from 'api/entities/types';
import { User } from 'api/Firebase/modules/Authentication/types';
import { getAdditionalUserDataRequest } from 'redux/GetAdditionalUserData/redux/actions';
import { AppState } from 'redux/store.types';

import Subscriptions from '../Subscriptions/Subscriptions';
import * as S from './MainContent.styles';

interface IStateProps {
  user: User;
  isCompleted: boolean;
  additionalUserData: AdditionalUserInformation;
}

const mapState = (state: AppState): IStateProps => ({
  user: state.authReducer.user,
  ...state.getAdditionalUserDataReducer,
});

const mapDispatch = {
  startGetAdditionalUserDataProcess: getAdditionalUserDataRequest,
};

type Props = ReturnType<typeof mapState> & typeof mapDispatch;

const MainContent = ({
  user,
  isCompleted,
  additionalUserData,
  startGetAdditionalUserDataProcess,
}: Props): JSX.Element => {
  const handleGetAdditionalUserData = useCallback(
    (currentUser) => {
      startGetAdditionalUserDataProcess(currentUser);
    },
    [startGetAdditionalUserDataProcess],
  );

  useEffect(() => {
    handleGetAdditionalUserData(user);
  }, [handleGetAdditionalUserData, user]);

  return (
    <S.MainContent>
      <S.Title>Уведомления</S.Title>
      {isCompleted && (
        <Subscriptions
          user={user}
          receiveOffers={additionalUserData ? additionalUserData.receiveOffers : false}
        />
      )}
    </S.MainContent>
  );
};
export default connect(mapState, mapDispatch)(MainContent);
