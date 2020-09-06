/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '~/context/AuthContext';

export default function AdminRoutes({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { user } = useContext(AuthContext);

  const signed = !!user;

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
