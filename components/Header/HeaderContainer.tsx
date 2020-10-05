import { connect } from 'react-redux';

import Header from './Header';

const mapState = (state) => ({
  hasAuth: state.hasAuth,
  displayName: state.displayName,
});

const mapDispatch = {};

export default connect(mapState, mapDispatch)(Header);
