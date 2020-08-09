import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '~/pages/Login';
import Dash from '~/pages/Dash';
import NotePad from '~/pages/NotePad';
import Deck from '~/pages/Deck';
import Profile from '~/pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={Dash} isPrivate />
      <Route path="/notepad" exact component={NotePad} isPrivate />
      <Route path="/deck" exact component={Deck} isPrivate />
      <Route path="/profile" exact component={Profile} isPrivate />

      <Route path="*" component={() => <h1>404</h1>} />
    </Switch>
  );
}
