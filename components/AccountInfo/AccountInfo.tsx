import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import EditAccountInfo from '../EditAccountInfo/EditAccountInfo';
import { data } from './AccountInfo.data';
import * as S from './AccountInfo.styles';

type Props = {
  user: firebase.User;
};

type State = {
  authReducer: Props;
};

const AccountInfo = ({ user }: Props): JSX.Element => {
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
    <S.EditAccountInfo>
      {accountData.map((elem) => (
        <S.Item key={elem.title}>
          <EditAccountInfo user={user} {...elem} />
        </S.Item>
      ))}
    </S.EditAccountInfo>
  );
};

const mapState = (state: State) => ({
  user: state.authReducer.user,
});

export default connect(mapState)(AccountInfo);
