import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';

// import { store } from '~/store';

export default function AdminRoutes({
  component: Component,
  isPrivate,
  ...rest
}) {
  // const { signed } = store.getState().adminAuth;

  const signed = false;
  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} component={Component} />;
}

AdminRoutes.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

AdminRoutes.defaultProps = {
  isPrivate: false,
};
