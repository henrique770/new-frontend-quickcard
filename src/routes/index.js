import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '~/pages/Login';
import Dash from '~/pages/Dash';
import Profile from '~/pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={Dash} isPrivate />
      <Route path="/perfil" exact component={Profile} isPrivate />

      <Route path="*" component={() => <h1>404</h1>} />
    </Switch>
  );
}
