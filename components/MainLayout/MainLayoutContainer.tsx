import { connect } from 'react-redux';

import Layout from './MainLayout';
import { Props } from './MainLayout.types';

const mapStateToProps = (state: Props) => ({
  isAuthSuccess: state.isAuthSuccess,
  displayName: state.displayName,
  authStatusText: state.authStatusText,
});

export default connect(mapStateToProps)(Layout);
