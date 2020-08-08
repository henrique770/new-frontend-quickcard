import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Dash from '~/pages/Dash';
import Login from '~/pages/Login';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dash} isPrivate />
      <Route path="/login" exact component={Login} />

      <Route path="*" component={() => <h1>404</h1>} />
    </Switch>
  );
}
