import { connect } from 'react-redux';

import { requestToAuth } from 'redux/actions';

import InnerPage from './InnerPage';

const mapState = (state) => ({
  hasAuth: state.hasAuth,
  authStatusText: state.authStatusText,
});

const mapDispatch = {
  requestToAuth,
};

export default connect(mapState, mapDispatch)(InnerPage);
