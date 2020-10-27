import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { User } from 'api/Firebase/modules/Authentication/types';
import { AppState } from 'redux/store.types';

import EditPersonalInfo from '../EditPersonalInfo/EditPersonalInfo';
import { data } from './PersonalInfo.data';
import * as S from './PersonalInfo.styles';

interface IStateProps {
  user: User;
}

const mapState = (state: AppState): IStateProps => ({
  user: state.authReducer.user,
});

type Props = ReturnType<typeof mapState>;

const PersonalInfo = ({ user }: Props): JSX.Element => {
  const [userData, setUserData] = useState({ userName: '', email: '' });

  useEffect(() => {
    if (user) {
      const { displayName, email } = user;

      setUserData({ userName: displayName, email });
    }
  }, [user]);

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
