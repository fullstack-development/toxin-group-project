import { connect } from 'react-redux';

import Layout from './MainLayout';

type Props = {
  children?: JSX.Element;
};

const mapStateToProps = (state) => ({
  hasAuth: state.hasAuth,
  displayName: state.displayName,
  authStatusText: state.authStatusText,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
