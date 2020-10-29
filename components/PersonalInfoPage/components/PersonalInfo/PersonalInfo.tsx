import { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import { AdditionalUserInformation } from 'api/entities/types';
import { User } from 'api/Firebase/modules/Authentication/types';
import { getAdditionalUserDataRequest } from 'redux/Profile/redux/actions';
import { AppState } from 'redux/store.types';

import EditPersonalInfo from '../EditPersonalInfo/EditPersonalInfo';
import { data } from './PersonalInfo.data';
import * as S from './PersonalInfo.styles';

type StateProps = {
  user: User;
  isCompleted: boolean;
  additionalUserData: AdditionalUserInformation;
};

const mapState = (state: AppState): StateProps => ({
  user: state.auth.user,
  isCompleted: state.profile.isGetAdditionalUserDataCompleted,
  additionalUserData: state.profile.additionalUserData,
});

const mapDispatch = {
  startGetAdditionalUserDataProcess: getAdditionalUserDataRequest,
};

type Props = StateProps & typeof mapDispatch;

const PersonalInfo = ({
  user,
  isCompleted,
  additionalUserData,
  startGetAdditionalUserDataProcess,
}: Props): JSX.Element => {
  const [userData, setUserData] = useState({
    displayName: '',
    gender: '',
    birthday: '',
    email: '',
  });

  const handleGetAdditionalUserData = useCallback(
    (currentUser) => {
      startGetAdditionalUserDataProcess(currentUser);
    },
    [startGetAdditionalUserDataProcess],
  );

  useEffect(() => {
    if (user) handleGetAdditionalUserData(user);
  }, [handleGetAdditionalUserData, user]);

  const handleSetAdditionalUserData = useCallback(() => {
    const { displayName, email } = user;

    setUserData({
      displayName,
      email,
      gender: additionalUserData ? additionalUserData.gender : '',
      birthday: additionalUserData ? additionalUserData.birthDate : '',
    });
  }, [additionalUserData, user]);

  useEffect(() => {
    if (isCompleted) handleSetAdditionalUserData();
  }, [handleSetAdditionalUserData, isCompleted]);

  const accountData = data.map((elem) => {
    return { ...elem, value: userData[elem.component] };
  });

  const [currentEditing, setCurrentEditing] = useState('');

  const handleEditButtonClick = (title: string) => {
    if (title === currentEditing) {
      setCurrentEditing('');
    } else {
      setCurrentEditing(title);
    }
  };

  return (
    <S.PersonalInfo>
      {accountData.map((elem) => (
        <S.Item key={elem.title}>
          <EditPersonalInfo
            user={user}
            currentEditing={currentEditing}
            onEditButtonClick={handleEditButtonClick}
            {...elem}
          />
        </S.Item>
      ))}
    </S.PersonalInfo>
  );
};

export default connect(mapState, mapDispatch)(PersonalInfo);
