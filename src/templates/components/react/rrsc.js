import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import { Container } from './styles';

const {componentName} = () => <div />;

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)({componentName});
