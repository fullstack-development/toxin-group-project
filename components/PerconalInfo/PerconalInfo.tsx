import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import EditPerconalInfo from '../EditPerconalInfo/EditPerconalInfo';
import { data } from './PerconalInfo.data';
import * as S from './PerconalInfo.styles';

type Props = {
  user: firebase.User;
};

type State = {
  authReducer: Props;
};

const PerconalInfo = ({ user }: Props): JSX.Element => {
  const [userData, setUserData] = useState({ userName: '', email: '' });

  useEffect(() => {
    if (user) {
      const { displayName, email } = user;

      setUserData({ userName: displayName, email });
    }
  }, [user]);

  const accountData = data.map((elem) => {
    // eslint-disable-next-line no-param-reassign
    if (userData[elem.component]) elem.value = userData[elem.component];
    return elem;
  });

  return (
    <S.PerconalInfo>
      {accountData.map((elem) => (
        <S.Item key={elem.title}>
          <EditPerconalInfo user={user} {...elem} />
        </S.Item>
      ))}
    </S.PerconalInfo>
  );
};

const mapState = (state: State) => ({
  user: state.authReducer.user,
});

export default connect(mapState)(PerconalInfo);
