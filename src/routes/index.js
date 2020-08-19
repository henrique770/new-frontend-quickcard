import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '~/pages/Login';
import Dash from '~/pages/Dash';
import Note from '~/pages/Dash/Note';
import NotePad from '~/pages/NotePad';
import ListNotePad from '~/pages/NotePad/ListNotePad';
import Deck from '~/pages/Deck';
import Card from '~/pages/Deck/Card';
import Pomodoro from '~/pages/Pomodoro';
import Statistics from '~/pages/Statistics';
import Profile from '~/pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={Dash} isPrivate />
      <Route path="/note" exact component={Note} isPrivate />
      <Route path="/notepad" exact component={NotePad} isPrivate />
      <Route path="/notepad/notes" exact component={ListNotePad} isPrivate />
      <Route path="/deck" exact component={Deck} isPrivate />
      <Route path="/deck/card" exact component={Card} isPrivate />
      <Route path="/pomodoro" exact component={Pomodoro} isPrivate />
      <Route path="/statistics" exact component={Statistics} isPrivate />
      <Route path="/profile" exact component={Profile} isPrivate />

      <Route path="*" component={() => <h1>404</h1>} />
    </Switch>
  );
}
