import { connect } from 'react-redux';

import { requestToAuth, breakAuthProcess } from 'redux/actions';

import MainContent from './MainContent';
import { Props } from './MainContent.types';

const mapState = (state: Props) => ({
  isAuthSuccess: state.isAuthSuccess,
  isAuthProcessNow: state.isAuthProcessNow,
  authStatusText: state.authStatusText,
});

const mapDispatch = {
  requestToAuth,
  breakAuthProcess,
};

export default connect(mapState, mapDispatch)(MainContent);
