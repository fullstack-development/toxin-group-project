import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { User } from 'api/Firebase/modules/Authentication/types';
import { getAdditionalUserDataRequest } from 'redux/GetAdditionalUserData/redux/actions';
import { AppState } from 'redux/store.types';

import EditPersonalInfo from '../EditPersonalInfo/EditPersonalInfo';
import { data } from './PersonalInfo.data';
import * as S from './PersonalInfo.styles';

interface IStateProps {
  user: User;
  additionalUserData: any;
}

const mapState = (state: AppState): IStateProps => ({
  user: state.authReducer.user,
  ...state.getAdditionalUserDataReducer,
});

const mapDispatch = {
  startGetAdditionalUserDataProcess: getAdditionalUserDataRequest,
};

type Props = ReturnType<typeof mapState> & typeof mapDispatch;

const PersonalInfo = ({
  user,
  additionalUserData,
  startGetAdditionalUserDataProcess,
}: Props): JSX.Element => {
  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    gender: '',
    birthday: null,
    receiveOffers: false,
  });

  useEffect(() => {
    if (user) {
      startGetAdditionalUserDataProcess(user);

      const { displayName, email } = user;
      const { gender, birthday, receiveOffers } = additionalUserData;

      setUserData({
        userName: displayName,
        email,
        gender,
        birthday: birthday.toDate(),
        receiveOffers,
      });
    }
  }, [user, additionalUserData, startGetAdditionalUserDataProcess]);

  const accountData = data.map((elem) => {
    return { ...elem, value: userData[elem.component] };
  });

  return (
    <S.PersonalInfo>
      {accountData.map((elem) => (
        <S.Item key={elem.title}>
          <EditPersonalInfo user={user} {...elem} />
        </S.Item>
      ))}
    </S.PersonalInfo>
  );
};

export default connect(mapState)(PersonalInfo);
